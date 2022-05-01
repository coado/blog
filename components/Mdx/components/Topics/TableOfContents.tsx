import styles from './TableOfContents.module.scss';

export const TableOfContents = ({ topics }: { topics: string[] | string[][] }) => {
    
    return (
        <div className={styles.wrapper}>  
            <h1 className={styles.header}> Table of contents: </h1>
            <ul>
                {
                    topics?.map((topic: string | string[], i: number) => {
                        if (typeof topic === 'string') return <li key={i}> { topic } </li>
                        else {
                            return <ul> 
                                {
                                    topic.map((el, i) => <li key={i}>{ el }</li>)
                                }
                            </ul>
                        }
                    })
                }
            </ul>
        </div>
    )
}