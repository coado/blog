
import { Category } from '../../components/Category/Category';
import { Card } from '../../components/Card/Card';

import styles from './styles.module.scss';

import matter from "gray-matter";
import fs from 'fs';
import path from 'path';

type Articles = [{
  slug: string,
  frontmatter: {
    "title": string,
    "date": string,
    "categories": string
  }
}]

const Articles = ({ articles }: { articles: Articles}) => {
  return (
        <div className={styles.posts}>
            <div className={styles.articles}>
                <h1 className={styles.header}>Articles</h1>
            </div>

            <div className={styles.categoriesTextContainer}>
              <h2 className={styles.categoriesHeader}>Categories</h2>
            </div>

            <div className={styles.categories}>
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />

            </div>

            <div className={styles.cards}> 
              {
                articles.map(article => (
                      <Card 
                        key = {article.slug} 
                        title = {article.frontmatter.title}
                        date = {article.frontmatter.date}
                        categories = {article.frontmatter.categories.split(' ')}
                        slug={article.slug}
                      /> 
                    ))
              }
            </div>
        </div>
  )
}

export async function getStaticProps() {
  // Get all files from the articles
  const files = fs.readdirSync(path.join('articles'))
  
  const articles = files.filter(filename => filename.includes('.md')).map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('articles', filename), 'utf-8')

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug, 
      frontmatter
    }  
  })

  return {
    props: {
      articles
    }
  }
  
}

export default Articles
