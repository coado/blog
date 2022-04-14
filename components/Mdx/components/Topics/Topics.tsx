import styles from './Topics.module.scss';

export const Topics = ({ topics }: { topics: string[] }) => {
    
    return (
        <div className={styles.topics}>  
            <h1 className={styles.header}> Topics: </h1>
            <ul>
                {
                    topics.map(topic => <li key={topic}> { topic } </li>)
                }
            </ul>
        </div>
    )
}