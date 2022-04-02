/* eslint-disable */
import Link from 'next/link';
import styles from './Hero.module.scss';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1> Blog-chain</h1>
            <p>The blog about blockchain </p>
            <p>technology</p>
            <h6><Link href="/articles">See all post &#10141;</Link></h6>
        </div>
    )
}