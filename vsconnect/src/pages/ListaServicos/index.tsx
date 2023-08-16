import "./style.css";

//components
import CardDev from "../../components/CardServico";

//hooks
import { useState } from "react";
import CardServico from "../../components/CardServico";

function ListaServicos() {
    const [servicos, setServicos] = useState<any[]>([
        {
            titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
            proposta: 1300,
            techs: [
                "HTML",
                "CSS",
                "REACT"
            ]
        },
        {
            titulo: "Bot telegram Pagamento",
            descricao: "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
            proposta: 2400,
            techs: [
                "PYTHON"
            ]
        },
        {
            titulo: "Caixa Rápido",
            descricao: "Preciso fazer um software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
            proposta: 1200,
            techs: [
                "PYTHON"
            ]
        }
    ]);

    const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>(servicos);

    const [tecnologiaDigitada, setTecnologiaDigitada] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoTechs(event: any) {
        if (event.target.value === "") {
            setListaServicosFiltrados(servicos);
        }
        setTecnologiaDigitada(event.target.value);
    }
    function buscarDevPorTechs(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servicosFiltrados = servicos.filter((servico: any) => servico.skills.includes(tecnologiaDigitada.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setListaServicosFiltrados(servicosFiltrados);
        }

    }
    return (
        <>
            <main id="main_listaservicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarDevPorTechs}>
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
                                    listaServicosFiltrados.map((servicos: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServico
                                                titulo={servicos.titulo}
                                                valor={servicos.descricao}
                                                descricao={servicos.proposta}
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