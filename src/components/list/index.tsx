import React from "react";
import style from './List.module.scss'

function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa:'JavaScript',
        tempo: '01:00:00'
    },{
        tarefa:'TypeScript',
        tempo: '03:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
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