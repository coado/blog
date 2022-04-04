import Link from 'next/link';
import styles from './ArticleNavigation.module.scss';


export const ArticleNavigation = () => {
    return (
        <nav className={styles.navigation} >
            <h2 className={styles.logo}>LOGO</h2>
            <Link href='/articles'><a className={styles.return}> {'<--'} Return to all articles</a></Link>
        </nav>
    )
}