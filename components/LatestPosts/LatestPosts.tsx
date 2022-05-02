import styles from './LatestPosts.module.scss';
import type { Articles } from '../../types/types';
import { Card } from '../Card/Card';
import { ArticlesLink } from '../ArticlesLink/ArticlesLink';

export const LatestPosts = ({ newestPosts }: {newestPosts: Articles}) => {
    
    return (
        <section className={styles.latestPosts}>
            <ArticlesLink />
            <span className={styles.line}></span>
            <h2 className={styles.header}>Latest Posts</h2>
            <div className={styles.wrapper}>
                {
                    newestPosts.map(post => ( 
                    <Card 
                        key={post.slug} 
                        title={post.title}
                        date={post.date}
                        slug={post.slug}
                        categories={post.categories.split(' ')}
                        readTime={post.readTime}
                        difficulty={post.difficulty}
                    />))
                }
            </div>
        </section>
    )
}
