import Link from 'next/link';
import styles from './ArticleNavigation.module.scss';
import { ArticlesLink } from '../ArticlesLink/ArticlesLink';

export const ArticleNavigation = () => {
    return (
        <nav className={styles.navigation} >
            <h2 className={styles.logo}>LOGO</h2>
            <ArticlesLink />
        </nav>
    )
}

