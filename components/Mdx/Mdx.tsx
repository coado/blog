import { ReactNode } from 'react';
import styles from './Mdx.module.scss';
import { Frontmatter } from '../../types/types';
import { Category } from '../Category/Category';
import { Newsletter } from '../Mdx/components/Newsletter/Newsletter';

interface MdxProps {
    frontmatter: Frontmatter;
    children: ReactNode;
    readTime: number;
}

export const Mdx = ({ frontmatter, children, readTime }: MdxProps) => {
    return (
        <article className={styles.article}>
            <header className={styles.header} >
                <div className={styles.categories}>
                    {
                        frontmatter.categories.split(' ').map((el, i) => <Category text={`${el}`} key={i} />)
                    }
                </div>

                <h1 className={styles.heading}>
                    { frontmatter.title }
                </h1>

                <div className={styles.articleData}>
                    <p>{Math.ceil(readTime)} minute read</p>
                    <p>{ frontmatter.date }</p>
                </div>
            </header>       
            
            <main className={styles.main}>
                {children}                  
            </main>
            <Newsletter />
        </article>
    )
}
