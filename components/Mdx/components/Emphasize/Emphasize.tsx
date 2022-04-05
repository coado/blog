import styles from './Emphasize.module.scss';

import type { EmphasizeTypes } from '../../../../types/types'; 
import { ReactNode } from 'react';

interface EmphasizeProps {
    type: EmphasizeTypes;
    children: ReactNode;
}


export const Emphasize = ({ type, children }: EmphasizeProps) => {
    return (
        <div className={`${styles.emphasize} ${styles[type]}`}>
            { children }
        </div>
    )
}