import React from 'react'
import '../ComponentsCSS/OneProject.css'
//particulas
import ParticulasOne from './ParticulasOne';
import { loadFull } from "tsparticles";


const OneProject = ({itens, particlesInit}) => {


  const {title,desc, git, img, site} = itens;

  return (
    
    <div className='container_oneProject'>
       <ParticulasOne id="tsparticles" init={particlesInit} options={loadFull}/>
      <header>
      <h1>{title}</h1> 
      <img src={img} alt="Projeto"/>
      <button><a href={git}>Repositório</a></button>
      <button><a href={site}>Site</a></button>
      </header>
      <section>
      <p>{desc}</p>  
      </section>

    </div>
  )
}

export default OneProject