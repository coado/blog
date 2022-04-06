import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import { ArticleNavigation } from '../../components/ArticleNavigation/ArticleNavigation';
import { Mdx } from '../../components/Mdx/Mdx';
import { useMemo } from 'react';

// MDX COMPONENTS
import { Heading } from '../../components/Mdx/components/Heading/Heading';
import { Emphasize } from '../../components/Mdx/components/Emphasize/Emphasize';


const Article = ({ frontmatter, slug, source }: InferGetStaticPropsType<typeof getStaticProps>) => {
    
    const mdxComponents = useMemo(
        () => (
            {   
                h1: (props: {children: string}) => (
                    <Heading tag='h1' {...props}></Heading>
                ),
                h2: (props: {children: string}) => (
                    <Heading tag='h2' {...props}></Heading>
                ),
                h3: (props: {children: string}) => (
                    <Heading tag='h3' {...props}></Heading>
                ),
                h4: (props: {children: string}) => (
                    <Heading tag='h4' {...props}></Heading>
                ),
                h5: (props: {children: string}) => (
                    <Heading tag='h5' {...props}></Heading>
                ),
                h6: (props: {children: string}) => (
                    <Heading tag='h6' {...props}></Heading>
                ),
                Emphasize,
            }
        ),[]
    )
    
    return (
        <>
            <ArticleNavigation />
                <Mdx frontmatter={frontmatter} >
                    <MDXRemote {...source} components={mdxComponents} /> 
                </Mdx>
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

    const source = await serialize(content, {
        // code styling
        mdxOptions: {
            remarkPlugins: [remarkCodeTitles],
            rehypePlugins: [mdxPrism]
        },
        scope: frontmatter,
      });

    return {
        props: {
            frontmatter,
            slug,
            source
        }
    }
}

