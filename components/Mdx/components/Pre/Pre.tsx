import { ReactNode, useEffect, useState, useRef } from "react"
import Copy  from '../../../../public/svg/copy.svg';
import Checkmark from '../../../../public/svg/checkmark.svg';
import styles from './Pre.module.scss';



export const Pre = ({ children, ...props}: {children: ReactNode}) => {
    const preRef = useRef<HTMLPreElement | null>(null)
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        let timerFunc
            
        if (isCopied)
            timerFunc = setTimeout(() => setIsCopied(false), 2000)
        
        return () => clearTimeout(timerFunc) 
    }, [isCopied])

    const handleCopy = async () => {
        if(preRef.current) {
            if (navigator) {
                await navigator.clipboard.writeText(preRef.current.innerText)
            }
            setIsCopied(true)
        }
    }
    
    return (
        <pre {...props} ref={preRef} className={styles.pre}>
            <div className={`${styles.copied} ${isCopied && styles.active}`}>
                <button onClick={handleCopy} className={styles.copiedButton}>
                    {
                        isCopied ?
                        <Checkmark className={styles.checkmark} />
                        :
                        <Copy className={styles.icon} />
                    }
                </button>
            </div>
            { children }
        </pre>
    )
}