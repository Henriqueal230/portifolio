import './habilidades.css';
import { SiJavascript,SiHtml5,SiCss3,SiReact } from 'react-icons/si';

function Habilidades(){
    return(
        <section className='skills' id='skills'>
            <div className='sobre-habilidades'>
                <a href='#home'>Inicio</a>
                <h1>Skills</h1>
            </div>
            <div className='skill'>
                <div className='w50 skill_'>
                    <SiHtml5 className='html'/>
                    <p>HTML</p>
                </div>
                <div className='w50 skill_'>
                    <SiCss3 className='css'/>
                    <p>CSS</p>
                </div>
                <div className='w50 skill_'>
                    <SiJavascript className='js'/>
                    <p>Js</p>
                </div>
                <div className='w50 skill_'>
                    <SiReact className='react'/>
                    <p>React</p>
                </div>
            </div>
            <p>...</p>
        </section>
    )
}

export default Habilidades;