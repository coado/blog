import type { NextPage } from "next";
import { LandingPage } from '../components/sections/LandingPage/LandingPage';
import { NewPost } from '../components/sections/NewPost/NewPost';
import { About } from '../components/sections/About/About';
import { Community } from '../components/sections/Community/Community';
import { Newsletter } from '../components/sections/Newsletter/Newsletter';

import { getLatestPost } from '../lib/mdx';
import type { Article } from "../types/types";

const Home = ({ latestPost }: { latestPost: Article }) => {
  return (
    <>
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
