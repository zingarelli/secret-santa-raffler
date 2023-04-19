import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import styles from './Rodape.module.css';
import { useSorteador } from "../../state/hooks/useSorteador";

export default function Rodape() {
    const participantes = useListaParticipantes();
    const navigate = useNavigate();
    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navigate('/sorteio');
    }

    return (
        <footer className={styles.footer}>
            <button
                disabled={participantes.length < 3}
                onClick={iniciar}
                className='button--secondary'
            >
                Iniciar brincadeira!
            </button>
            <img src="/images/sacolas.png" alt="arte mostrando sacolas de presente" className={styles.image} />
        </footer>
    )
}