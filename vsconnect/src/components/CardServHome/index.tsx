//Estilização
import "./style.css";

//Imagens
import imgAlfinete from "../../assets/images/alfinete.png";


function CardServHome(props: any) {
    function verificaValor() {
        let propostaFormatada: number = props.proposta;

        if (typeof props.proposta === "string") {
            propostaFormatada = parseFloat(props.proposta);
        }
        
        return propostaFormatada.toLocaleString('pt-BR', { style: "currency", currency: "BRL" });
    }

    function limitadorCaracteres(texto: string, quantidadeCaracter: number) {
        let novoTexto = texto;
        let arrayChar: string[] = texto.split("");

        if (texto.length >= quantidadeCaracter) {
            novoTexto = "";
            for (let i = 0; i < quantidadeCaracter; i++) {
                novoTexto += arrayChar[i];
            }
            novoTexto += " ...";
        }

        return novoTexto;
    }

    return (
        <>
            <img src={imgAlfinete} alt="" />
            <h3>{limitadorCaracteres(props.titulo, 45)}</h3>
            <p>{limitadorCaracteres(props.descricao, 182)}</p>
            <p>{verificaValor()}</p>
        </>
    )
}

export default CardServHome;