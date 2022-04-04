import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { marked } from 'marked';
import { ArticleNavigation } from '../../components/ArticleNavigation/ArticleNavigation';


const Article = ({ frontmatter, slug, transformedMdx }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <ArticleNavigation />
            <main>
                {/* <MDXRemote {...transformedMdx} /> */}
            </main>
        </>
    )
}

export default Article;


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('articles'));

    const paths = files.filter(filename => filename.includes('.md')).map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params: { slug }}) => {
    const markDownWithMeta = fs.readFileSync(path.join('articles', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markDownWithMeta)

    const transformedMdx = await serialize(content, {
        scope: frontmatter,
      });

    return {
        props: {
            frontmatter,
            slug,
            transformedMdx
        }
    }
}

