import styles from './Post.module.scss';
import Skull from '../../../../public/svg/skull.svg';
import SmartContract from '../../../../public/svg/smart_contract.svg';

export const Post = () => {
    return (
        <div className={styles.post}>
            <div>
                <h3 className={styles.header} >Deep dive into smart contract hacks</h3>
                <div className={styles.types}>
                 <Skull /> Hacks | <SmartContract /> Smart Contract
                </div>    
            </div>
            <h4 className={styles.readMore}> Read more &#10141; </h4>
        </div>
    )
}

