/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../ComponentsCSS/Projects.css'
import '../ComponentsCSS/Responsive.css'

const Projects = ({itens, handleClick}) => {

  const {title, img} = itens;


  return (
    <div>

      <div class="grid-item">
      <img width="100%" src={img} />
      <p>{title}</p>
      <div className='butao'>
      <input onClick={() => handleClick(itens)} type="button" value="Saiba Mais"/>
      </div>
      </div>
         
    </div>
  )
}

export default Projects