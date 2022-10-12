import React from 'react'
import OneProject from './OneProject'

//Passando o projeto escolhido para carregar no OneProject

const PassProjects = ({inicio,escolha,projetos}) => {
  return (
    <div>
  <div className='container_pass'>
      <input onClick={inicio} type="button" value="Inicio"/>
      <input onClick={projetos} type="button" value="Projetos"/>
      </div>
      {escolha.map(itens =>  <OneProject key={itens.id}  itens={itens}/>)}

    </div>
  )
}

export default PassProjects