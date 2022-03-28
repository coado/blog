import styles from './Newsletter.module.scss';

export const Newsletter = () => {
    return (
        <section id='newsletter' className={styles.newsletter}>
            <div className={styles.text}>
                <h2>Newsletter</h2>
                <p>
                    Sign up to the newsletter to get early notifications about new post
                    and interesting materials about crypto technology.
                    I will send some special updates for subscribers only as well ;)  
                </p>
            </div>
            <div className={styles.email}>
                <input className={styles.input} type='email' placeholder='Email'/>
                <button className={styles.subscribe}>Subscribe</button>
            </div>
        </section>
    )
}