import { Category } from '../../components/Category/Category';
import { Card } from '../../components/Card/Card';
import styles from './styles.module.scss';
import { useState } from 'react';
import { sortArticlesByDate } from '../../lib/mdx';
import { getAllPosts } from '../../lib/mdx';

import type { Articles, Frontmatter } from '../../types/types';

const Articles = ({ articles }: { articles: Articles}) => {

  const [currentArticles, setCurrentArticles] = useState(articles)
  const [currentCategory, setCurrentCategory] = useState<string>('all')

  const filterArticles = (category: string) => {
    let filteredArticles: Articles;
    if (category === 'all') {
      filteredArticles = articles
    } else {
      filteredArticles = articles.filter(article => article.categories.split(' ').includes(category))
    }
    setCurrentArticles(filteredArticles)
    setCurrentCategory(category)
  } 
  

  return (
    <>
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
              <Category filter={filterArticles} text='Algorithms' />

            </div>
            
            <h3 className={styles.currentCategory}> {currentCategory} </h3>

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
      </>
  )
}

export async function getStaticProps() {
  const articles = sortArticlesByDate(getAllPosts())

  return {
    props: {
      articles
    }
  }
  
}

export default Articles
