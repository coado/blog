import styles from './Footer.module.scss';
import Art from '../../../public/svg/art.svg';

export const Footer = () => {
    return (
        <section className={styles.footer}>
            <p>Copyright @2022</p>
            <div className={styles.footer__icons}>

            </div>
        </section>
    )
}