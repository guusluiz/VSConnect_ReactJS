import "./style.css";

import Footer2 from "../../components/Footer2";
import CardServico from "../../components/CardServico";

import { useEffect, useState } from "react";

import api from "../../utils/api";

function ListaServicos() {

    const [listaServicos, setListaServicos] = useState<any[]>([]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    function listarServicos() {
        api.get("servicos")
            .then((response: any) => {
                setListaServicos(response.data);
                
            })
            .catch((error: any) => {
                console.log("Error", error)
            })
    }

    function verificarCampoFiltro(event: any) {
        if (event.target.value == "") {
            listarServicos();
        }
        setSkillDigitada(event.target.value);
    }

    function buscarServicoPorSkill(event: any) {
        event.preventDefault();

        const servicosFiltrados = listaServicos.filter((servico: any) => servico.techs.includes(skillDigitada.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum serviço com essa skill :(")
        } else {
            setListaServicos(servicosFiltrados);
        }
    }

    useEffect(() => {
        listarServicos();
    }, [])

    return (
        <div>
            <main id="ls_main">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServicoPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Filtrar serviços por tecnologia</label>
                                <div className="campo-label">
                                    <input
                                        type="search" 
                                        name="campo-busca" id="busca" 
                                        placeholder="Buscar serviços por tecnologias..." 
                                        onChange={verificarCampoFiltro}
                                        />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    listaServicos.map((servico: any, indice: number) => {
                                        return (
                                            <li key={indice}>
                                                <CardServico
                                                    id = {servico.id}
                                                    titulo = {servico.nome}
                                                    proposta = {servico.valor}
                                                    listaTechs = {servico.techs}
                                                    descricao = {servico.descricao}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer2 />
        </div>
    );
}
export default ListaServicos;