import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import styles from './ListaParticipantes.module.css';

const ListaParticipantes = () => {
    const participantes: string[] = useListaParticipantes();

    return (
        <>
            {participantes.length > 0 && <h3 className={styles.titulo}>Participantes:</h3>}
            <ul>
                {participantes.map(item => <li key={item} className={styles.item}>{item}</li>)}
            </ul>
        </>
    )
}

export default ListaParticipantes