import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const Article = ({ frontmatter, slug, content }) => {
    console.log(content);
    
    return <div dangerouslySetInnerHTML={{__html: marked(content)}}>

    </div>
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


export async function getStaticProps({ params: { slug }}) {
    const markDownWithMeta = fs.readFileSync(path.join('articles', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markDownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}

