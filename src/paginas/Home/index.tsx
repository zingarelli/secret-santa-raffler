import Formulario from "../../componentes/Formulario/Formulario";
import ListaParticipantes from "../../componentes/ListaParticipantes";
import Rodape from "../../componentes/Rodape";

export default function Home() {
    return (
        <>
            <h2>Vamos começar!</h2>
            <Formulario />
            <ListaParticipantes />
            <Rodape />
        </>
    )
}