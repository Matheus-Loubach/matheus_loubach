import React from 'react'
import '../ComponentsCSS/Sobre.css'
import Carousel from 'better-react-carousel'

//letras
import Typewriter from 'react-ts-typewriter';
//icones front
import react from '../Icons_Linguas/structure.png'
import js from '../Icons_Linguas/js.png'
import css from '../Icons_Linguas/css-3.png'
import html from '../Icons_Linguas/html-5.png'
import figma from '../Icons_Linguas/Figma-logo.svg'
import boot from '../Icons_Linguas/bootstrap.png'
import tailwind from '../Icons_Linguas/Tailwind_CSS_Logo.svg.png'
//back
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
  
      <input onClick={inicio} type="button" value="Inicio"/>
   
      <h1 className='titulo_sobre'>Olá, Me chamo Matheus</h1>
        <p>Sou Desenvolvedor Fullstack e estudante de Engenharia da computação.Sempre gostei da área de tecnologia, desenvolvimento web, automação.Por possibilitar a criação de novas tecnologias para o nosso desenvolvimento.</p>
      <Typewriter className='p' text='Gosto de desenvolver aplicações que resolvam problemas, melhore o processo e tenha uma interface/interação agradável ao usuário.'/> 
      </header>
      
      <section  class="icones">
        <div className='grid-icones'>
          <h2>Front-end</h2>
          <Carousel cols={2} rows={1} gap={10} loop>
          <Carousel.Item>
          <img src={react} alt="react"/>
          <p>ReactJS</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={js} alt="js"/>
          <p>JavaScript</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={css} alt="css"/>
          <p>CSS3</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={html} alt="html"/>
          <p>HTML5</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={boot} alt="boot"/>
          <p>Bootstrap</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={tailwind} alt="tailwind"/>
          <p>Tailwind</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={figma} alt="figma"/>
          <p>Figma</p>
          </Carousel.Item>
          </Carousel>         
          <h3>Back-End</h3>
          <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
          <img src={Mysql} alt="Mysql"/>
          <p>MySQL</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={nodejs} alt="nodejs"/>
          <p>NodeJS</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={py} alt="py"/>
          <p>Python</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={mongo} alt="mongodb"/>
          <p>MongoDB</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Fire} alt="Fire"/>
          <p>FireBase</p>
          </Carousel.Item>
          <Carousel.Item>
          <img src={git} alt="git"/>
          <p>Git</p>
          </Carousel.Item>
          </Carousel> 
        </div>

      </section>
        </div>
    </>
  )
}

export default Sobre