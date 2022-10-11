import { useState } from 'react';
import Inicio from './Components/Inicio';
import Projects from './Components/Projects';
import Sobre from './Components/Sobre';
import { Slide } from "react-awesome-reveal";


function App() {

 
  const estagios = [
    {id: 0, name: 'inicio'},
    {id: 1, name: 'projetos'},
    {id: 2, name: 'carrinho'},
    {id: 3, name: 'sobremesas'},
  ];

  const [pag, setPag] = useState(estagios[0].name);

  const proj = () =>{
    setPag(estagios[1].name);
  }


  return (
    <div>
    {pag === 'inicio' && <Inicio projetos={proj}/>}
    <Slide>
    {pag === 'projetos' && <Projects projetos={proj}/>}
    </Slide>
    </div>
  );
}

export default App;
