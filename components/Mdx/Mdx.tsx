import { ReactNode } from 'react';
import styles from './Mdx.module.scss';
import { Frontmatter } from '../../types/types';
import { Category } from '../Category/Category';

interface MdxProps {
    frontmatter: Frontmatter;
    children: ReactNode;
}

export const Mdx = ({ frontmatter, children }: MdxProps) => {
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
                    <p>5 minute read</p>
                    <p>14.11.2022</p>
                </div>
            </header>       
            
            <main className={styles.main}>
                {children}                  
            </main>
                
        </article>
    )
}
