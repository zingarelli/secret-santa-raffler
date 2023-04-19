import { ReactNode } from 'react';
import styles from './Card.module.css';

interface Props {
    children: ReactNode;
}

// container onde a brincadeira será exibida
export default function Card({ children }: Props) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}