import type { NextPage } from "next";
import { Category } from '../../components/Category/Category';
import Loop from '../../public/svg/loop.svg';

import styles from './styles.module.scss';


const Posts: NextPage = () => {
  return (
        <div className={styles.posts}>
            <div className={styles.articles}>
                <h1 className={styles.header}>Articles</h1>
            </div>

            <div className={styles.searchContainer}>
              <div className={styles.search}>
                <input className={styles.inputSearch} type="text" placeholder="Search..." autoComplete="off" autoCorrect="off"/>
                <Loop className={styles.loop} />
              </div>
            </div>

            <div className={styles.categoriesContainer}>
              <h2 className={styles.categoriesHeader}>Categories</h2>
            </div>

            <div className={styles.categories}>
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />
              <Category text='Smart Contract' />

            </div>
        </div>
  )
}

export default Posts
