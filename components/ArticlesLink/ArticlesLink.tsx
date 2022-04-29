import Link from 'next/link';
import styles from './ArticlesLink.module.scss';


export const ArticlesLink = () => <Link href='/articles'><a className={styles.link}> {'<--'} Return to all articles</a></Link>

