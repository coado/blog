import styles from './About.module.scss';
import Nerd from '../../../public/svg/nerd.svg';

export const About = () => {
    return (
        <section id='about' className={styles.about}>
            <div className={styles.about__icon}>
                <Nerd />
            </div>

            <div className={styles.about__text}>
                <h2>Who am I ?</h2>
                <p>
                    I am 20 yo Computer Science and Artificial Inteligence student interested in web development, blockchain and AI. 
                    My goal is to learn continuously and share my knowledge in this blog. 
                    In my posts I will cover all curious topics about blockchain technology, algorithms and many more! 
                </p>
            </div>
        </section>
    )
}