import { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';
import { useMensagemErro } from '../../state/hooks/useMensagemErro';
import styles from './Formulario.module.css';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const mensagemErro = useMensagemErro();

    const adicionaNaLista = useAdicionarParticipante();

    // após adicionar um participante, limpar o input e dar foco no input
    const adicionaParticipante = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        adicionaNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }

    return (
        <>
            <form onSubmit={adicionaParticipante} className={styles.form}>
                <input
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    ref={inputRef}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                    className={styles.input}
                    required
                />
                <button disabled={!nome} className={styles.button}>Adicionar</button>
            </form>
            {mensagemErro && <p role='alert' className={styles.erro}>{mensagemErro}</p>}
        </>
    )
}

export default Formulario;