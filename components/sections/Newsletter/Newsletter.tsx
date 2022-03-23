import styles from './Newsletter.module.scss';

export const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <div className={styles.newsletter__text}>
                <h2>Newsletter</h2>
                <p>
                    Sign up to the newsletter to get early notifications about new post
                    and interesting materials about crypto technology.
                    I will send some special updates for subscribers only as well ;)  
                </p>
            </div>
            <div className={styles.newsletter__email}>
                <input className={styles.newsletter__input} type='email' placeholder='Email'/>
                <button className={styles.newsletter__subscribe}>Subscribe</button>
            </div>
        </section>
    )
}