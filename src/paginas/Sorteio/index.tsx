import { useState } from "react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import styles from './Sorteio.module.css';

export default function Sorteio() {
    const participantes = useListaParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const resultado = useResultadoSorteio();

    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (resultado.has(participanteDaVez)) {
            // forçando o TS a aceitar que o retorno não será undefined
            setAmigoSecreto(resultado.get(participanteDaVez)!)
            
            // o nome será mostrado somente por 5 segundos
            setTimeout(() => {
                setAmigoSecreto('');
            }, 5000);
        }
    }

    return (
        <>
            {participantes.length < 3 ? (
                <p className={styles.info}>Ops! Primeiro adicione os participantes.</p>
            ) : (
                <>
                    <h2>Quem vai tirar o papelzinho?</h2>
                    <form onSubmit={sortear} className={styles.form}>
                        <select
                            name="participanteDaVez"
                            id="participanteDaVez"
                            placeholder="Selecione seu nome"
                            className={styles.select}
                            value={participanteDaVez}
                            onChange={e => setParticipanteDaVez(e.target.value)}
                            required
                        >
                            <option value="">Selecione seu nome</option>
                            {participantes.map(participante => (
                                <option key={participante}>{participante}</option>
                            ))}
                        </select>
                        <p className={styles.info}>Clique em em sortear para ver quem é seu amigo secreto!</p>
                        <button className="button--secondary">Sortear!</button>
                    </form>
                </>
            )}
            {amigoSecreto && <p role='alert' className={styles.amigo}>{amigoSecreto}</p>}
            <img src="/images/aviao.png" alt="aviãzinho de papel" />
        </>
    )
}