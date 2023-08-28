import "./style.css";

//rotas
import { Link } from "react-router-dom";

function CardServico(props: any) {
    return (
        <div className="servico">
            <div className="topo_servico">
                <Link to={"/servico/" + props.id}><h3>{props.titulo}</h3></Link>
                <span>{props.valor}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.techs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    })
                }   
            </div>
        </div>
    );
}

export default CardServico;

