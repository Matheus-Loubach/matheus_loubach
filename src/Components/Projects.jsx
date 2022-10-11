/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'better-react-carousel'
import '../ComponentsCSS/Projects.css'
import ProjetoMusicsFlix from '../Imgs/Projetos/ProjetoMusicsFlix.png'
import ProjetoRelogio from '../Imgs/Projetos/ProjetoRelogio.png'
import proj1 from '../Imgs/Projetos/batalha.png'
import conversorMoeda from '../Imgs/Projetos/conversorMoeda.png'
import JogoDaMemoria from '../Imgs/Projetos/JogoDaMemoria.png'
import Projetott from '../Imgs/Projetos/Projetott.png'
import '../ComponentsCSS/Responsive.css'

const Projects = () => {

  return (
    <div className='container_carrosel'>
      <article >
      <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
      <img width="100%" src={proj1} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={conversorMoeda} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={JogoDaMemoria} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={ProjetoMusicsFlix} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={ProjetoRelogio} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={Projetott} />
      </Carousel.Item>
    </Carousel>
      </article>
    </div>
  )
}

export default Projects