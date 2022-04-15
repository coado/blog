import styles from './NewPost.module.scss';
import { Card } from '../../Card/Card';
import Ball from '../../../public/svg/ball.svg';
import type { Article } from '../../../types/types';

export const NewPost = ({ latestPost }: { latestPost: Article}) => {
    return (
        <section className={styles.newPost}>
            
            <div className={styles.mainContent}>
                <h2> New post has been mined! </h2>
                <Card
                    title={latestPost.title}
                    date={latestPost.date}
                    slug={latestPost.slug}
                    readTime={latestPost.readTime}
                    categories={latestPost.categories.split(' ')}
                />
            </div>
            <Ball className={styles.ball} />
        </section>
    )
}
