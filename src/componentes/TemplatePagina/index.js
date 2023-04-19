import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Cabecalho from "../Cabecalho";
import Card from "../Card";

export default function TemplatePagina() {
    return (
        <RecoilRoot>
            <Cabecalho />
            <Card>
                <Outlet />
            </Card>
        </RecoilRoot>
    )
}