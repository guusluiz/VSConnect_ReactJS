//Estilização
import "./style.css";

//Bibliotecas
import { Link } from "react-router-dom";

function CardServico(props: any) {
    function verificaValor() {
        if (typeof props.proposta === "string"){
            return parseFloat(props.proposta);
        } else {
            return props.proposta;
        }
    }

    return (
        <div className="card_servico">
            <div className="topo_servico">
                <Link to={"/servico/" + props.id}>
                    <h2>{props.titulo}</h2>
                </Link>
                <span>{verificaValor().toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.listaTechs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    })
                }
            </div>
        </div>
    )
}

export default CardServico;