 import styles from './Navbar.module.scss';

export const Navbar = () => {
    return  (
        <div className={styles.navbar}>
            <div className={styles.navbar__items}>
                <ul>
                    <li>About</li>
                    <li>Community</li>
                    <li>Newsletter</li>
                </ul>
            </div>
        </div>
    )
}