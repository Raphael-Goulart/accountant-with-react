import ITarefa from '../../../types/tarefas';
import style from '../List.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefasSelecionada: ITarefa) => void
}

export default function Item({
   tarefa, 
   tempo, 
   selecionado, 
   completado, 
   id, 
   selecionaTarefa }: Props) {

  return (
    <li className={style.item} onClick={() => selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}