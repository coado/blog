import type { NextPage } from "next";
import { LandingPage } from '../components/sections/LandingPage/LandingPage';
import { NewPost } from '../components/sections/NewPost/NewPost';
import { About } from '../components/sections/About/About';
import { Community } from '../components/sections/Community/Community';
import { Newsletter } from '../components/sections/Newsletter/Newsletter';
import { Footer } from '../components/sections/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <NewPost />
      <About />
      <Community />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
