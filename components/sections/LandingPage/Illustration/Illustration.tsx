import styles from './Illustration.module.scss';
import Eth from "../../../../public/images/Eth.svg";

export const Illustration = () => {
    return (
        <div className={styles.illustration}>
            {/* <img src='../../images/eth.svg'/> */}
            <Eth />
            <Eth className={styles.eth2} />
        </div>
    )
}