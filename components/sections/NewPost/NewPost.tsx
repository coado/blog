import styles from './NewPost.module.scss';
import { Post } from './Post/Post';
import Ball from '../../../public/svg/ball.svg';
import Line from '../../../public/svg/line.svg';

export const NewPost = () => {
    return (
        <section className={styles.newPost}>
            
            <div className={styles.newPost__mainContent}>
                <h2> New post has been mined! </h2>
                <Post />
            </div>
            <Ball className={styles.newPost__ball} />
        </section>
    )
}