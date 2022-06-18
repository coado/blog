import styles from './styles.module.scss';
import Link from 'next/link';
import Eth from '../public/svg/eth.svg';
import { NextSeo } from "next-seo";
import { getLatestPost, getThreeLatestPostsWithoutOne } from '../lib/mdx';
import type { Article } from "../types/types";
import { Card } from '../components/Card/Card';


const Home = ({ latestPost, threeLatestPosts }: { latestPost: Article, threeLatestPosts: Article[] }) => {

  const title = 'Blog-chain, the blog about blogchain technology';
  const description = 'Blog about web3, blockchain, algorithms and many more!';
  const url = ''
  

  return (
    <>
      <NextSeo 
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url,
          title,
          description,
          images: []
        }}
        twitter={{
            // TODO ///////////////////////////////////////////////////////
        }}
      />
      <header className={styles.landingPage}>
          <div className={styles.mainContent}>
            <div className={styles.heroWrapper}>
              <h1 className={styles.hero}>Blogchain</h1>
              <p className={styles.description}> The blog about blockchain </p>
              <p className={styles.description}> technology </p>
              <h6 className={styles.link}><Link href="/articles">See all articles &#10141;</Link></h6>
            </div>

            <div className={styles.imageWrapper}>
              <Eth className={styles.eth} />
              <div className={styles.ellipseWrapper}>
                <div className={`${styles.ellipse} ${styles.ellipse__left}`}></div>
                <div className={`${styles.ellipse} ${styles.ellipse__right}`}></div>
              </div>
            </div>

          </div>
      </header>

      <main className={styles.articles}>
        <div className={styles.newArticle}>
          <h2 className={styles.newArticle__text}>New Article </h2>
          <Card 
            title={latestPost.title}
            date={latestPost.date}
            slug={latestPost.slug}
            readTime={latestPost.readTime}
            categories={latestPost.categories.split(' ')}
            difficulty={latestPost.difficulty}
          />
        </div>

        <div className={styles.latestPosts}>
          {
            threeLatestPosts && threeLatestPosts.map((el, index) => (
            <Card 
              title={el.title}
              date={el.date}
              slug={el.slug}
              readTime={el.readTime}
              categories={el.categories.split(' ')}
              difficulty={el.difficulty}
              key={index}
            />))
          }
        </div>
      </main>  

    </>
  )
}

export const getStaticProps = async () => {
  const latestPost = getLatestPost()
  const threeLatestPosts = getThreeLatestPostsWithoutOne(latestPost.slug)


  return {
      props: {
          latestPost,
          threeLatestPosts
      }
  }
}

export default Home
