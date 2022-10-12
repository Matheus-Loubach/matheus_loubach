import { useState } from 'react';
import Inicio from './Components/Inicio';
import PassClick from './Components/PassClick';
import { Slide } from "react-awesome-reveal";
import PassProjects from './Components/PassProjects';
import Sobre from './Components/Sobre';

const estagios = [
  {id: 0, name: 'inicio'},
  {id: 1, name: 'projetos'},
  {id: 2, name: 'sobre'},
  {id: 3, name: 1},
];



function App() {

  const [pag, setPag] = useState(estagios[0].name);
  const [escolha, setEscolha] = useState([]);
 
  const handleClick = (item) => {
    setEscolha([item]);
    setPag(item.amount)
  };
  
  const ini = () =>{
    setPag(estagios[0].name);
  }
  const proj = () =>{
    setPag(estagios[1].name);
  }
  const sobre = () =>{
    setPag(estagios[2].name);
  }

 
  return (
    <div>
    {pag === 'inicio' && <Inicio sobre={sobre} projetos={proj}/>}
    <Slide>
    {pag === 'projetos' && <PassProjects inicio={ini} handleClick={handleClick}/>}
    {pag === 'sobre' && <Sobre  inicio={ini}/>}
    {pag === 1 && <PassClick projetos={proj} escolha={escolha}  inicio={ini} handleClick={handleClick}/>}
    </Slide>
    </div>
  );
}

export default App;
