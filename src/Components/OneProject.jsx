import React from 'react'
import '../ComponentsCSS/OneProject.css'

const OneProject = ({itens}) => {


  const {title,desc, git, img, site} = itens;

  return (
    
    <div className='container_oneProject'>
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