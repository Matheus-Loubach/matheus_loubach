import React from 'react'
import OneProject from './OneProject'

const PassProjects = ({inicio,escolha}) => {
  return (
    <div>
       <div className='container_pass'>
      <input onClick={inicio} type="button" value="Inicio"/>
      </div>
      <div className='container_projetos'>
      {escolha.map(itens =>  <OneProject key={itens.id}  itens={itens}/>)}
      </div>
    </div>
  )
}

export default PassProjects