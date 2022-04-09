import { Category } from '../../components/Category/Category';
import { Card } from '../../components/Card/Card';
import styles from './styles.module.scss';
import readingTime from 'reading-time';
import matter from "gray-matter";
import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { sortArticlesByDate } from '../../lib/mdx';

import type { Articles, Frontmatter } from '../../types/types';

const Articles = ({ articles }: { articles: Articles}) => {

  const [currentArticles, setCurrentArticles] = useState(articles)

  const filterArticles = (category: string) => {
    let filteredArticles: Articles;
    if (category === 'all') {
      filteredArticles = articles
    } else {
      filteredArticles = articles.filter(article => article.categories.split(' ').includes(category))
    }
    setCurrentArticles(filteredArticles)
  } 
  

  return (
        <div className={styles.posts}>
            <div className={styles.articles}>
                <h1 className={styles.header}>Articles</h1>
            </div>

            <div className={styles.categoriesTextContainer}>
              <h2 className={styles.categoriesHeader}>Categories</h2>
            </div>

            <div className={styles.categories}>
              <Category filter={filterArticles} text='all' />
              <Category filter={filterArticles} text='Hacks' />
              <Category filter={filterArticles} text='Smart-Contract' />
              <Category filter={filterArticles} text='Smart-Contract' />

            </div>

            <div className={styles.cards}> 
              {
                currentArticles.map(article => (
                      <Card 
                        key = {article.slug} 
                        title = {article.title}
                        date = {article.date}
                        categories = {article.categories?.split(' ')}
                        slug={article.slug}
                        readTime={article.readTime}
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

    const readTime = readingTime(markdownWithMeta).minutes

    const {data: frontmatter}  = matter(markdownWithMeta)

    return {
      slug, 
      ...frontmatter,
      readTime
    }  
  }) as Articles

  const sortedArticles = sortArticlesByDate(articles)

  return {
    props: {
      articles: sortedArticles
    }
  }
  
}

export default Articles
