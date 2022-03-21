import styles from './LandingPage.module.scss';
import { Hero } from './Hero/Hero';
import { Navbar } from '../../Navbar/Navbar';
import { Illustration } from './Illustration/Illustration';

export const LandingPage = () => {
    return (
        <section className={styles.landingPage}>
            <Navbar />
            <div className={styles.landingPage__mainContent}>
                <Hero />
                <Illustration />
            </div>
        </section>
    )
}