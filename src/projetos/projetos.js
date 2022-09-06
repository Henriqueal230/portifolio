import './projetos.css';

function Projeto(props){
    return(
        <div className='projeto'>
            <img src={process.env.PUBLIC_URL + props.img} alt='Imagem errada ou sem definiçao'></img>
            <h2>{props.nome}</h2>
            <div className='comentarios'>
                <p>{props.comentarios}</p>
            </div>
            <a href={props.repo} target='_blank'><img src={process.env.PUBLIC_URL + '/github.png'}/></a>
            <a href={props.site} target='_blank'><h1>Site</h1></a>
        </div>
    )
}

function Projetos(){
    return(
        <section className='projetos' id='projeto'>
            <div className='projeto-header'>
                <a href='#home'>Inicio</a>
                <h1>Projetos</h1>
            </div>
            <div className='projetosflex'>
                <Projeto 
                repo ='https://github.com/Henriqueal230/pokedex'
                img='/pokeicon.png' 
                nome='Pokedex'
                comentarios='Minha podedex com react consumindo a api do pokeapi'
                site='https://henriqueeal.github.io/pokedex/'
                />
                <Projeto 
                repo ='https://github.com/HenriqueeAl/lista-de-afazeres'
                img='/tarefa.png' 
                nome='Lista de afazeres'
                comentarios='Uma lista de afazeres feita com react'
                site='https://henriqueeal.github.io/lista-de-afazeres/'
                />
            </div>
        </section>
    )
}

export default Projetos;