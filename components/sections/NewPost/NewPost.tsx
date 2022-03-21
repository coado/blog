import styles from './NewPost.module.scss';
import { Post } from './Post/Post';

export const NewPost = () => {
    return (
        <section className={styles.newPost}>
            <div className={styles.newPost__mainContent}>
                <h2> New post has been mined! </h2>
                <Post />
            </div>
        </section>
    )
}