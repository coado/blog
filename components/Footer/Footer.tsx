import styles from './Footer.module.scss';
import Waves from '../../public/svg/waves.svg';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Waves className={styles.svg} />
        </div>
    )
}