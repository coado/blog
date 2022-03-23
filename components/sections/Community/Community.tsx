import styles from './Community.module.scss';
import Discord from '../../../public/svg/discord.svg';

export const Community = () => {
    return (
        <section className={styles.community}>
            <div className={styles.community__text}>
                <h2>Community</h2>
                <p>
                    Join our discord server to find with us new exiting crypto projects,
                     discuss existing ones or to ask questions about web3 programming. 
                    Learning collectively  is always more efficient than learning alone!
                </p>
            </div>
            <div>
                <div className={styles.community__discord}>
                    <p>Join now!</p>
                    <Discord />
                </div>
            </div>
        </section>
    )
}