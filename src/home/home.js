import './home.css'


window.onload = function (){
    const nome = document.getElementById('nome');
    const array = nome.innerHTML.split('');
    nome.innerHTML = ' ';
    array.forEach((letra, i) => {
        setTimeout(function(){
            nome.innerHTML += letra
        }, 200 * i)
    });
    
}

function Home(props){
    return(
        <div className='home' id='home'>
            <header>
                <nav>
                    <ul>
                        <li><a href='#home'>Inicio</a></li>
                        <li><a href='#sobre'>Sobre</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projeto'>Projetos</a></li>
                    </ul>
                </nav>
            </header>
            <div className="clear"></div>
            <h1 id='nome'>{props.name}</h1>
            <img src={process.env.PUBLIC_URL + props.img}></img>
        </div>
    )
}

export default Home;