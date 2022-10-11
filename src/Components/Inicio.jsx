import React from 'react'
import '../ComponentsCSS/Inicio.css'

//letras
import Typewriter from 'react-ts-typewriter';

//efeitos
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
//particulas
import { loadFull } from "tsparticles";
import Particulas from './Particulas';

const Inicio = ({projetos}) => {
 
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    
    <div id="particles-container"  className='tela_inicial' >
    <Particulas id="tsparticles" init={particlesInit} options={loadFull}/>
      <section >

        <div className='containera'>
        <header className='titulo'>
        <Typewriter className='h2' text='Desenvolvedor FullStack'/>    
        </header>
        </div>

      <div className='container_detalhes'>
        
  <Zoom direction= "down" duration={2000} cascade={false}>
      <div className='sobre' >
              <p>sobre = <span>&#123;</span></p>
              <br></br>
              <p>Nome: 'Matheus'</p>
              <p>Sobrenome: 'Loubach'</p>
              <p>Cidade: 'Rio De Janeiro'</p>
              <br></br>
              <p>&#125;</p>
      </div>
      <div className='detalhes'>
      
              <p>detalhes = <span>&#123;</span></p>
              <br></br>
              <p>Função: 'FullStack'</p>
              <p>Tecnologias: 'ReactJS','Tailwind','MySql'</p>
              <br></br>
              <p>&#125;</p>
      </div>
      </Zoom>

      </div>

     <div className='butao'>
     <Slide>
     <input onClick={projetos} type="button" value="Projetos" />
     
     <input type="button" value="Sobre" />
     </Slide>
     </div>
     </section>
  
    </div>
  )
}

export default Inicio