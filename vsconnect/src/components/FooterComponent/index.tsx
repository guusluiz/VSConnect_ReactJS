import "./style.css";

import imgLogo from "../../assets/images/logo.svg";
import imgFace from "../../assets/images/facebook.svg";
import imgInsta from "../../assets/images/instagram.svg";
import imgLink from "../../assets/images/linkedin.svg";


import { Link } from "react-router-dom";

function FooterComponent() {
    return (
        <div className="rodape_conteudo">
            <div className="rodape_conteudo_paginas">
                <h2>Páginas</h2>
                <ul>
                    <li>
                        <Link to={"#"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/lista/servicos"}>Listar Serviços</Link>
                    </li>
                    <li>
                        <Link to={"/cadastrar/servico"}>Cadastrar Serviço</Link>
                    </li>
                    <li>
                        <Link to={"/cadastrar/usuario"}>Cadastrar Desenvolvedor</Link>
                    </li>
                    <li>
                        <Link to={"/lista/devs"}>Listar Desenvolvedores</Link>
                    </li>
                </ul>
            </div>
            <img src={imgLogo} alt="" />
            <div className="rodape_conteudo_contatos">
                <h2>Contatos</h2>
                <div>
                    <Link to={"#"}><img src={imgFace} alt="" /></Link>
                    <Link to={"#"}><img src={imgInsta} alt="" /></Link>
                    <Link to={"#"}><img src={imgLink} alt="" /></Link>
                </div>
                <Link to={"mailto:contato@vsconnect.com"}>contato@vsconnect.com</Link>
            </div>
        </div>
    )
}

export default FooterComponent;