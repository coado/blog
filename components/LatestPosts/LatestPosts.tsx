import styles from './LatestPosts.module.scss';
import { getThreeLatestPostsWithoutOne } from '../../lib/mdx';

export const LatestPosts = ({slug}: {slug: string}) => {

    const posts = getThreeLatestPostsWithoutOne(slug);
    console.log(posts);
    

    return (
        <>
        </>
    )
}
