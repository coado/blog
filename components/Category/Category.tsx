import styles from './Category.module.scss';


export const Category = ({ text }: {text: string}) => {
    return (
        <div className={styles.category}>
            <p className={styles.text}> { text } </p>
        </div>
    )
}