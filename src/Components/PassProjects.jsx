import React from 'react'
import data from '../Data'
import Projects from './Projects'

const PassProjects = ({inicio,handleClick}) => {
  return (
    <div>
      <div className='container_pass'>
      <input onClick={inicio} type="button" value="Inicio"/>
      </div>
      <div className='container_projetos'>
      {data.map(itens =>  <Projects key={itens.id} handleClick={handleClick} itens={itens}/>)}
      </div>
    </div>
  )
}

export default PassProjects