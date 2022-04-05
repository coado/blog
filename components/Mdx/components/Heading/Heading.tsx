import type { HeadingTags } from '../../../../types/types'; 
import styles from './Heading.module.scss';


interface HeadingProps {
    tag: HeadingTags;
    children: string;
}

export const Heading = ({tag: Tag, children}: HeadingProps) => {
    
    return (
        <Tag className={`${styles.heading} ${styles[Tag]}`}>
            {children}
        </Tag>
    )
}