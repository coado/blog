import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkCodeTitles from 'remark-code-titles';
import mdxPrism from 'mdx-prism';
import { ArticleNavigation } from '../../components/ArticleNavigation/ArticleNavigation';
import { Mdx } from '../../components/Mdx/Mdx';
import readingTime from 'reading-time';
import { useMemo } from 'react';
import { getThreeLatestPostsWithoutOne } from '../../lib/mdx';
import type { Frontmatter } from '../../types/types';
import { LatestPosts } from '../../components/LatestPosts/LatestPosts';
import { SEO } from '../../next-seo.config';

// MDX COMPONENTS
import { Heading } from '../../components/Mdx/components/Heading/Heading';
import { Emphasize } from '../../components/Mdx/components/Emphasize/Emphasize';
import { Pre } from '../../components/Mdx/components/Pre/Pre';
import { Image } from '../../components/Mdx/components/Image/Image';
import { TableOfContents } from '../../components/Mdx/components/Topics/TableOfContents'

// TODO - ADD SEO

const Article = ({ frontmatter, source, readTime, newestPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    
    const { title, slug, date, seoExcerpt } = frontmatter

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
                Image,
                pre: Pre,
                TableOfContents
            }
        ),[]
    )
    
    return (
        <>  
            <NextSeo 
                {...SEO}
            />

            <ArticleJsonLd 
                authorName='Veo'
                type='Blog'
                url={''}
                title={title}
                description={seoExcerpt}
                datePublished={date}
                dateModified={date}
                images={[]}
                // TODO ////////////////////////////////////
            
            />

            <ArticleNavigation />
            <Mdx readTime={readTime} frontmatter={frontmatter as Frontmatter} >
                <MDXRemote {...source} components={mdxComponents} /> 
            </Mdx>
            <LatestPosts newestPosts={newestPosts} />
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


export const getStaticProps = async ({ params: { slug  }}: {params: {slug: string}}) => {
    const markDownWithMeta = fs.readFileSync(path.join('articles', slug + '.md'), 'utf-8')
    const readTime = readingTime(markDownWithMeta).minutes
    const {data: frontmatter, content} = matter(markDownWithMeta)

    const source = await serialize(content, {
        // code styling
        mdxOptions: {
            remarkPlugins: [remarkCodeTitles],
            rehypePlugins: [mdxPrism]
        },
        scope: frontmatter,
      });

      const newestPosts = getThreeLatestPostsWithoutOne(slug)

    return {
        props: {
            frontmatter,
            source,
            readTime,
            newestPosts
        }
    }
}

