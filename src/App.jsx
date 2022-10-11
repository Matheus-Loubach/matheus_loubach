import { useState } from 'react';
import Inicio from './Components/Inicio';
import PassClick from './Components/PassClick';
import { Slide } from "react-awesome-reveal";
import PassProjects from './Components/PassProjects';

const estagios = [
  {id: 0, name: 'inicio'},
  {id: 1, name: 'projetos'},
  {id: 2, name: 1},
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

 

  return (
    <div>
    {pag === 'inicio' && <Inicio projetos={proj}/>}
    <Slide>
    {pag === 'projetos' && <PassProjects inicio={ini} handleClick={handleClick}/>}
    {pag === 1 && <PassClick escolha={escolha}  inicio={ini} handleClick={handleClick}/>}
    </Slide>
    </div>
  );
}

export default App;
