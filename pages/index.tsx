import type { NextPage } from "next";
import { LandingPage } from '../components/sections/LandingPage/LandingPage';
import { NewPost } from '../components/sections/NewPost/NewPost';
import { About } from '../components/sections/About/About';
import { Community } from '../components/sections/Community/Community';
import { Newsletter } from '../components/sections/Newsletter/Newsletter';

import { NextSeo } from "next-seo";
import { getLatestPost } from '../lib/mdx';
import type { Article } from "../types/types";

const Home = ({ latestPost }: { latestPost: Article }) => {

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
      <LandingPage />
      <NewPost latestPost={latestPost} />
      <About />
      <Community />
      <Newsletter />
    </>
  )
}

export const getStaticProps = async () => {
  const latestPost = getLatestPost()
  console.log(latestPost);
  
  return {
      props: {
          latestPost
      }
  }
}

export default Home
