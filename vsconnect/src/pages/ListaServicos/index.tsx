import "./style.css";

//components
import CardServico from "../../components/CardServico";

//hooks
import { useEffect, useState } from "react";

import api from "../../utils/api";

function ListaServicos() {
    const [servicos, setServicos] = useState<any[]>([]);

    const [tecnologiaDigitada, setTecnologiaDigitada] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoTechs(event: any) {
        if (event.target.value === "") {
            listarServicos();
        }
        setTecnologiaDigitada(event.target.value);
    }
    function buscarServicoPorTechs(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servicosFiltrados = servicos.filter((servico: any) => servico.techs.includes(tecnologiaDigitada.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setServicos(servicosFiltrados);
        }

    }

    function listarServicos(){
        api.get("servicos").then((response: any) => {
            console.log(response);

            setServicos(response.data)
        })
        .catch((error: any)=> {
            console.log("Error ao realizar uma requisição: ", error);
        })
    }

    useEffect(() => {
        //executa ação após o componente ser recarregado
        listarServicos();
    }, [])

    return (
        <>
            <main id="main_listaservicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServicoPorTechs}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar serviços por tecnologias..."
                                        onChange={verificarCampoTechs}
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    servicos.map((servicos: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServico
                                                titulo={servicos.nome}
                                                valor={servicos.valor}
                                                descricao={servicos.descricao}
                                                listaTechs={servicos.techs}
                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaServicos;