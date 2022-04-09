import styles from './Card.module.scss';
import Link from 'next/link';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const Card = ({ title, date, slug, categories, readTime}: {
    title: string,
    date: string,
    slug: string,
    readTime: number,
    categories: string[]
}) => {
    return (
        <Link href={`/articles/${slug}`} passHref>
        <div className={styles.card}>
            <div className={styles.iconContainer}>
                <SvgIcon name={categories ? categories[0] : null} />
            </div>

            <div className={styles.content}>

                <div className={styles.wrapper}>
                    <div className={styles.postData}>
                        <p> {Math.ceil(readTime)} minutes </p>
                        <p> { date } </p>
                    </div>
                    <div className={styles.titleContainer}>
                        <p className={styles.title}>
                            { title }
                        </p>
                    </div>

                    <div className={styles.categories}>
                        {
                            categories?.map((category, i) => (
                                <div key={i} className={styles.category}>
                                    <SvgIcon name={category} />
                                    <p>{category}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Link href={`/articles/${slug}`}>
                    <a className={styles.link}> -- Read -- </a>
                </Link>
            </div>
        </div>
        </Link>
    )
}