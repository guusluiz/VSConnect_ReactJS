//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../utils/api";

function VisualizarServico() {

    const { idServico } = useParams();

    const [nome, setNome] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [techs, setTechs] = useState<string[]>([]);

    function buscarServicoPorId() {
        api.get("servicos/" + idServico).then((resposta: any) => {
            setNome(resposta.data.nome);
            setValor(resposta.data.valor);
            setDescricao(resposta.data.descricao);
            setTechs(resposta.data.techs)
        }).catch((error: any) => {
            console.log(error);

        })
    }
    useEffect(() => {
        buscarServicoPorId();
    }, [])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            techs.map((tech: string, indice: number) => {
                                return <span key={indice}>{tech}</span>
                            })
                        }
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;