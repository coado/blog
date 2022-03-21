import type { NextPage } from "next";
import { LandingPage } from '../components/sections/LandingPage/LandingPage';
import { NewPost } from '../components/sections/NewPost/NewPost';

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <NewPost />
    </>
  )
}

export default Home
