import proj1 from './Imgs/Projetos/batalha.png'
import ProjetoMusicsFlix from './Imgs/Projetos/ProjetoMusicsFlix.png'
import Perfom from './Imgs/Projetos/PerfomTask.gif'
import conversorMoeda from './Imgs/Projetos/conversorMoeda.png'
import JogoDaMemoria from './Imgs/Projetos/JogoDaMemoria.png'
import Projetott from './Imgs/Projetos/Projetott.png'
import SecretWord from './Imgs/Projetos/SecretWord.png'
import epic from './Imgs/Projetos/epic.png'
import ReactBurguer from './Imgs/Projetos/ReactBurguer.png'
const list = [
  {
    id: 1,
    title: "Batalha de operações",
    desc: "Operações matematicas com o modo para cada operação.Resolva o maior número de calculos em 60 segundos.A cada calculo certo será somado 10 pontos ao placar e caso perca descontará 10 pontos.GameOver ser a pontuação chegar abaixo de 0. Com isso ampliei melhor a utilização de Hooks e props. Grande uso do UseEffect. Totalmente responsivo para qualquer dispositivo.",
    git: "https://github.com/Matheus-Loubach/Batalha-De-Operacoes",
    site: "https://batalha-de-operacoes.vercel.app",
    img: proj1,
    amount: 1,
  },
  {
    id: 2,
    title: "Perform Task",
    desc: "O Perfom Task é uma aplicação no qual o usuário pode criar tarefas e deleta-las. Neste projeto foi utilizado ReactJS que conta com a funcionalidade de LocalStorage para o armazenamento das tarefas no navegador. Utilizado React JS,Props,Hooks,Armazenamento Local,Modulos CSS, Hooks",
    git: "https://github.com/Matheus-Loubach/Perform_Task",
    site: "https://perform-task.vercel.app",
    img: Perfom,
    amount: 1,
  },
  {
    id: 3,
    title: "Jogo da Memoria Stranger Things",
    desc: "Jogo com o tema da série Stranger Things, Feito com JavaScript Puro para ampliar o conhecimento sobre DOM.  e completando com HTML5 e CSS3 para efeitos e responsividade.",
    git: "https://github.com/Matheus-Loubach/JogoDaMemoria",
    site: "jogo-da-memoria-gamma.vercel.app",
    img: JogoDaMemoria,
    amount: 1,
  },
  {
    id: 4,
    title: "MusicsFlix",
    desc: "Projeto interface MusicsFlix:Um clone da interface da NETFLIX, com mudanças em meio à criatividade, para aprendizado de novos comandos e responsividade sem frameworks. Uso das ferramentas do jQuery como o plugin Owl Carousel. Código de JavaScript extraído apenas para uso de função para o plugin Owl Carousel e a busca de conteudo. Site responsivo a todos os tamanhos de aparelhos.HTML,CSS,jQuery,JavaScript.",
    git: "https://github.com/Matheus-Loubach/MusicsFlix",
    site: "https://matheus-loubach.github.io/MusicsFlix/",
    img: ProjetoMusicsFlix,
    amount: 1,
  },
  {
    id: 5,
    title: "React Burger",
    desc: "Um menu de lanches online com opções de escolher o pedido.Ao fazer o pedido é adicionado ao carrinho, utilizado um array de objetos para guardar os pedidos no carrinho. Tudo que foi utilizado: useState,useEffect,styled-components, functional component, responsividade.",
    git: "https://github.com/Matheus-Loubach/ReactBurger",
    site: "https://react-burger-fs3u.vercel.app",
    img: ReactBurguer,
    amount: 1,
  },
  {
    id: 6,
    title: "Small twitter",
    desc: "Um clone do Twitter funcional com Banco de dados,autentificação de usúario,Cadastro completo,Pode publicar seus tweets e apaga-los. Foi utilizado JavaScript,HTML, CSS3 ,Axios,Sql, ReactJS, Tailwind, KoaJS, NodeJS.",
    git: "https://github.com/Matheus-Loubach/Small_Tweet",
    site: "https://small-tweet-web.vercel.app",
    img: Projetott,
    amount: 1,
  },
  {
    id: 7,
    title: "Secret Word",
    desc: "Um jogo onde tem que tentar adivinhar a palavra correta. Possui 5 chances ao acertar a palavra recebe pontos que vão acumulando e vai para o próximo nível. Feito com Javascript, ReactJS, CSS3, HTML5",
    git: "https://github.com/Matheus-Loubach/Secret-Word",
    site: "https://secret-word-blond.vercel.app",
    img: SecretWord,
    amount: 1,
  },
  {
    id: 8,
    title: "Epic Games",
    desc: "Uma LandingPage com um Redesign da EpicGames feito com ReactJS,CSS, HTML,Efeitos de CSS e Javascript, dropdown menu com CSS, Utilizado uma biblioteca para a criação do carrosel: Carrossel React",
    git: "https://github.com/Matheus-Loubach/landing_page_EpicGames",
    site: "https://landing-page-epic-games.vercel.app",
    img: epic,
    amount: 1,
  },
  {
    id: 9,
    title: "Conversor De Moedas",
    desc: "Cotação do câmbio em tempo real utilizado uma api para buscar os preços. utilizado Fetch,ReactJs",
    git: "https://github.com/Matheus-Loubach/ConversorMoedas",
    site: "https://conversor-moedas-nine.vercel.app",
    img: conversorMoeda,
    amount: 1,
  },
];

export default list;
