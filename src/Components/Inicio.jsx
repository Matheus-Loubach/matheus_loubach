import React from 'react'
import '../ComponentsCSS/Inicio.css'

//letras
import Typewriter from 'react-ts-typewriter';

//efeitos
import { Slide } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
//particulas
import { loadFull } from "tsparticles";
import Particulas from './Particulas';

const Inicio = ({projetos}) => {
 
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (

    <div id="particles-container"  className='tela_inicial' >
      <section >

        <div className='containera'>
        <Particulas id="tsparticles" init={particlesInit} options={loadFull}/>
        <header className='titulo'>
        <Typewriter className='h2' text='Desenvolvedor FullStack'/>    
        </header>
        </div>
        
      <div className='container_detalhes'>
        
      <Slide duration={2000} cascade={true}>
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
      </Slide>

      </div>

     <div className='butao'>
     <Bounce>
     <input onClick={projetos} type="button" value="Projetos" />
     
     <input type="button" value="Sobre" />
     </Bounce>
     </div>
     </section>
  
    </div>
  )
}

export default Inicio