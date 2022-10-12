import React from 'react'
import '../ComponentsCSS/OneProject.css'
import { loadFull } from "tsparticles";
import Particulas from './Particulas';

const OneProject = ({itens}) => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const {title,desc, git, img, site} = itens;

  return (
    
    <div className='container_oneProject'>
    {/* <Particulas id="tsparticles" init={particlesInit} options={loadFull}/> */}
      <header>
      <h1>{title}</h1> 
      <img src={img} alt="Projeto"/>
      <button><a href={git}>Repositorio</a></button>
      <button><a href={site}>Site</a></button>
      </header>
      <section>
      <p>{desc}</p>  
      </section>

    </div>
  )
}

export default OneProject