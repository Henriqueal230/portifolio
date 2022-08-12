import './sobre.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const inicio = ()=>{
    window.scrollTo(0,0)
}

function Sobre(props){
    return(
        <section className='sobre' id='sobre'>
            <div className='sobre-header'>
                <h2 onClick={inicio}>Inicio</h2>
                <h1>Sobre</h1>
            </div>
            <div className='img-text'>
                <img src={window.location.origin + props.img}></img>
                <div className='sobre-perguntas'>
                    <h4>Meu nome é henrique tenho 20 anos.</h4>
                    <h5>Por que  deve me contratar?</h5>
                    <p>Disponibilidade e esforço em aprender.</p>
                    <h5>Qual o meu objetivo?</h5>
                    <p>Evoluir profissionalmente.</p>
                    <h5>Qual foi seu primeiro emprego na area?</h5>
                    <p>Estou em busca da minha primeira experiencia.</p>
                    <h5>Alguma duvida? Mande um email.</h5>
                    <p>henrique.almeida231@hotmail.com</p>
                </div>
            </div>
            <div className='contato'>
                <a href='https://github.com/Henriqueal230' target='_blank'><AiFillGithub className='git'/></a>
                <a href='https://www.linkedin.com/in/henrique-almeida-de-oliveira-6031ba248/' target='_blank'><AiFillLinkedin className='linkedin'/></a>
            </div>
        </section>
    )
}

export default Sobre;