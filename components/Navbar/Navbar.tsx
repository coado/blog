 import styles from './Navbar.module.scss';

export const Navbar = () => {
    return  (
        <div className={styles.navbar}>
            <div className={styles.navbar__items}>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#community'>Community</a></li>
                    <li><a href='#newsletter'>Newsletter</a></li>
                </ul>
            </div>
        </div>
    )
}