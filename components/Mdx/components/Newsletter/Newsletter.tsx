import styles from './Newsletter.module.scss';

export const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <h2 className={styles.header} >Subscribe for more</h2>
            <div className={styles.wrapper}>
                <input className={styles.input} type='email' placeholder='Email'/>
                <button className={styles.subscribe}>Subscribe</button>
            </div>
        </div>
    )
}