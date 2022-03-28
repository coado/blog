import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)


    const toggleNavbar = () => {
        if (typeof window === 'undefined') return;

        if (window.scrollY > lastScrollY) {
            // scrolling down
            setShow(false)
        } else {
            // scrolling up
            setShow(true)
        }

        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('scroll', toggleNavbar)

        return () => window.removeEventListener('scroll', toggleNavbar)
    })


    return  (
        <nav className={`${styles.navbar} ${show || styles.toggleNavbar}`}>
            <div className={styles.items}>
                <input id='navi-toggle' type='checkbox' value='true' className={styles.checkbox}/>
                <label htmlFor='navi-toggle' className={styles.toggle}>
                    <span className={styles.icon}> &nbsp; </span>
                </label>
                
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#community'>Community</a></li>
                    <li><a href='#newsletter'>Newsletter</a></li>
                </ul>
            </div>
        </nav>
    )
}