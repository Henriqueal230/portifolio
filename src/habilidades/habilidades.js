import './habilidades.css';
import { SiJavascript,SiHtml5,SiCss3,SiReact } from 'react-icons/si';

const inicio = ()=>{
    window.scrollTo(0,0)
}

function Habilidades(){
    return(
        <section className='skills' id='skill'>
            <div className='sobre-habilidades'>
                <h2 onClick={inicio}>Inicio</h2>
                <h1>Skills</h1>
            </div>
            <div className='skill'>
                <div>
                <SiHtml5 className='html'/>
                <p>HTML</p>
                </div>
                <div>
                <SiCss3 className='css'/>
                <p>CSS</p>
                </div>
                <div>
                <SiJavascript className='js'/>
                <p>Js</p>
                </div>
                <div>
                <SiReact className='react'/>
                <p>React</p>
                </div>
            </div>
            <p>...</p>
        </section>
    )
}

export default Habilidades;