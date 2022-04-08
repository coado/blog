import { ReactNode, useEffect, useState, useRef } from "react"
import Copy  from '../../../../public/svg/copy.svg';
import styles from './Pre.module.scss';



export const Pre = ({ children, ...props}: {children: ReactNode}) => {
    const preRef = useRef<HTMLPreElement | null>(null)
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        let timerFunc

        if (isCopied) {
            timerFunc = setTimeout(() => setIsCopied(false), 2000)
        }

        return clearTimeout(timerFunc) 
    }, [isCopied])

    const handleCopy = async () => {
        if(preRef.current) {
            if (navigator) {
                await navigator.clipboard.writeText(preRef.current.innerText)
            }
            console.log('COPIED');
            
            setIsCopied(true)
        }
    }
    
    return (
        <pre {...props} ref={preRef} className={styles.pre}>
            <div className={styles.copied}>
                <button onClick={handleCopy} className={styles.copiedButton}>
                    <div className={styles.iconWrapper}><Copy className={styles.icon} /></div>
                </button>
            </div>
            { children }
        </pre>
    )
}