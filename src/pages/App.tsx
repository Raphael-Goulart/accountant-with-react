import React, { useState } from 'react';
import Cronometro from '../components/cronometro'
import Form from '../components/form';
import List from '../components/list';
import ITarefa from '../types/tarefas';
import style from './App.module.scss';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      
        <Form setTarefas={setTarefas}/> 
        <List tarefas={tarefas}/>
        <Cronometro/>
  
      
    </div>
  );
}

export default App;

/*como foi criado um componente nos não iremos repetir código, 
vamos sempre usar esse componente para reaproveitar código

você pode importar tanto assim: <Form/> quanto assim: <Form><Form/>

PROPS 
*/