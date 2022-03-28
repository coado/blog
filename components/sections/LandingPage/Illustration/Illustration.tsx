import styles from './Illustration.module.scss';
import Elipse from "../../../../public/svg/elipse.svg";
import Eth from '../../../../public/svg/eth.svg';

export const Illustration = () => {
    return (
        <div className={styles.illustration}>
            <Eth className={styles.eth} />
            <Elipse/>
        </div>
    )
}