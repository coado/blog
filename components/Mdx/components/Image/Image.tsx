import NextImage from 'next/image'
import styles from './Image.module.scss';

interface Props {
    src: string;
    alt :string;
    width?: string | number;
    height?: string | number;
}

export const Image = ({ src, alt, width='100%', height }: Props) => {
    return (
        <figure className={styles.figure}>
            <NextImage 
                className={styles.image}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading='lazy'
            />
            {
                alt && <figcaption className={styles.figcaption}>{ alt }</figcaption>
            }
        </figure>
    )
}