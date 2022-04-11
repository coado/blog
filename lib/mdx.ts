import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import matter from "gray-matter";
import dayjs from 'dayjs';
import type { Articles } from '../types/types';


export const sortArticlesByDate = (articles: Articles): Articles => {
    return articles.sort((articleA, articleB) => {
        const articleDateA = dayjs(articleA.date, 'DD-MM-YYYY')
        const articleDateB = dayjs(articleB.date, 'DD-MM-YYYY')
        return articleDateA.isBefore(articleDateB) ? 1 : -1
    })
}

export const getAllPosts = () => {
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
  return articles
}

export const getThreeLatestPostsWithoutOne = (slug: string) => {
    return sortArticlesByDate(getAllPosts().filter(article => article.slug !== slug).slice(0, 3))
}
