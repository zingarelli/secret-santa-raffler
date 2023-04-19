import styles from './Cabecalho.module.css';

export default function Cabecalho() {
    return(
        <header className={styles.container}>
            <div aria-label="logo do sorteador de amigo secreto" role='img' className={styles.logo} />
            <img src="/images/participante.png" alt="pessoa chacoalhando uma caixinha para sortear um amigo secreto" className={styles.participante} />
        </header>
    )
}