import styles from './Category.module.scss';


export const Category = ({ text, filter }: {text: string, filter?: (category: string) => void}) => {

    const handleClick = () => {
        if (filter)
            filter(text)
    }

    return (
        <div onClick={handleClick} className={styles.category}>
            <p className={styles.text}> { text } </p>
        </div>
    )
}