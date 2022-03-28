import styles from './NewPost.module.scss';
import { Post } from './Post/Post';
import Ball from '../../../public/svg/ball.svg';

export const NewPost = () => {
    return (
        <section className={styles.newPost}>
            
            <div className={styles.mainContent}>
                <h2> New post has been mined! </h2>
                <Post />
            </div>
            <Ball className={styles.ball} />
        </section>
    )
}