import React from 'react'
import '../ComponentsCSS/Sobre.css'
//letras
import Typewriter from 'react-ts-typewriter';
import react from '../Icons_Linguas/structure.png'
import js from '../Icons_Linguas/js.png'
import css from '../Icons_Linguas/css-3.png'
import html from '../Icons_Linguas/html-5.png'
import figma from '../Icons_Linguas/Figma-logo.svg'
import boot from '../Icons_Linguas/bootstrap.png'
import tailwind from '../Icons_Linguas/Tailwind_CSS_Logo.svg.png'

import Mysql from '../Icons_Linguas/919836.png'
import nodejs from '../Icons_Linguas/919825.png'
import py from '../Icons_Linguas/5968350.png'
import mongo from '../Icons_Linguas/mongodb-icon.png'
import Fire from '../Icons_Linguas/FireBase.png'
import git from '../Icons_Linguas/git.png'


const Sobre = ({inicio}) => {
  return (
    <>
      <div className='container_s'>

      <header>
      <h1 className='titulo_sobre'>Olá, Me chamo Matheus</h1>
        <p>Sou Desenvolvedor Fullstack e estudante de Engenharia da computação.Sempre gostei da área de tecnologia, desenvolvimento web, automação.Por possibilitar a criação de novas tecnologias para o nosso desenvolvimento.</p>
      <Typewriter className='p' text='Gosto de desenvolver aplicações que resolvam problemas, melhore o processo e tenha uma interface/interação agradável ao usuário.'/> 
      <div className='container_pass'>
      <input onClick={inicio} type="button" value="Inicio"/>
      </div>
      </header>
      
      <section  class="icones">
        <div className='grid-icones'>
          <h2>Front-end</h2>
          <img src={react} alt="react" />
          <img src={js} alt="js" />
          <img src={css} alt="css" />
          <img src={html} alt="html" />
          <img src={figma} alt="figma" />
          <img src={boot} alt="figma" />
          <img src={tailwind} alt="figma" />
          <h3>Back-End</h3>
          <img src={Mysql} alt="react" />
          <img src={nodejs} alt="css" />
          <img src={py} alt="html" />
          <img src={mongo} alt="figma" />
          <img src={Fire} alt="figma" />
          <img src={git} alt="figma" />
        </div>

      </section>
        </div>
    </>
  )
}

export default Sobre