
import Item  from "./Item";
import ITarefa from "../../types/tarefas";
import style from './List.module.scss'


function List({ tarefas}: { tarefas: Array<ITarefa>}) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                <Item
                    key={index}
                    {...item}
                />
                ))}
                
            </ul>
        </aside>
    )
}

export default List;

/*está é uma estrutura padrão de function components

Ao invés de fazer listas na "unha" podemos criar uma constante que será uma array e dentro da 
array um objeto ou seja com
vários itens, no caso fica const tarefas = [{}]
O map sempre percorre os itens de um array e retorna 
Sempre que temos um map temos que ter uma key
Você pode instalar o sass para usar a biblioteca disponivel e estilizar com css de forma produtiva
npm install --save-dev sass 


*/