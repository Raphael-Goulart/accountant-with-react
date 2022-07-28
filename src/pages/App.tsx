import React, { useState } from 'react';
import Cronometro from '../components/cronometro'
import Form from '../components/form';
import List from '../components/list';
import ITarefa from '../types/tarefas';
import style from './App.module.scss';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false 
      })));
  }
  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      
        <Form setTarefas={setTarefas}/> 
        <List 
          tarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
        <Cronometro 
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa}
        />
  
      
    </div>
  );
}

export default App;

/*como foi criado um componente nos não iremos repetir código, 
vamos sempre usar esse componente para reaproveitar código

você pode importar tanto assim: <Form/> quanto assim: <Form><Form/>

PROPS 
*/