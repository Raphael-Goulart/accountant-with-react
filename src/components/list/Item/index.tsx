import ITarefa from '../../../types/tarefas';
import style from '../Item/Item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefasSelecionada: ITarefa) => void
}

export default function Item({
   tarefa, 
   tempo, 
   selecionado, 
   completado, 
   id, 
   selecionaTarefa
   }: Props) {

  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionado :''} ${completado ? style.itemCompletado : ''}`}
     onClick={() => !completado && selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido}
      arial-label="tarefa completada"></span>}
    </li>
  )
}