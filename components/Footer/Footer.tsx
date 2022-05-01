import styles from './Footer.module.scss';
import Waves from '../../public/svg/waves.svg';
import Discord from '../../public/svg/discord.svg';
import Twitter from '../../public/svg/twitter.svg';
import Telegram from '../../public/svg/telegram.svg';


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <p className={styles.text}>@2022</p>
                <div className={styles.iconsWrapper}>
                    <Discord className={styles.icon} />
                    <Telegram className={styles.icon} />
                    <Twitter className={styles.icon} />
                </div>
            </div>
            <Waves className={styles.waves} />
        </footer>
    )
}