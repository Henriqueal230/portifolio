import './projetos.css';

const inicio = ()=>{
    window.scrollTo(0,0)
}

function Projeto(props){
    return(
        <div className='projeto'>
            <img src={process.env.PUBLIC_URL + props.img} alt='Imagem errada ou sem definiçao'></img>
            <h2>{props.nome}</h2>
            <div className='comentarios'>
                <p>{props.comentarios}</p>
            </div>
            <a href={props.repo} target='_blank'><img src={process.env.PUBLIC_URL + '/github.png'}/></a>
        </div>
    )
}

function Projetos(){
    return(
        <section className='projetos' id='projeto'>
            <div className='projeto-header'>
                <h2 onClick={inicio}>Inicio</h2>
                <h1>Projetos</h1>
            </div>
            <div className='projetosflex'>
                <Projeto repo ='https://github.com/Henriqueal230/pokedex' img='/pokeicon.png' nome='Pokedex' comentarios='Minha podedex com react consumindo a api do pokeapi'/>
            </div>
        </section>
    )
}

export default Projetos;