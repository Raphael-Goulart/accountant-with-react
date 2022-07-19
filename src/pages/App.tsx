import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';



function App() {
  return (
    <div className={style.AppStyle}>
      
        <Form/> 
        <List/>
  
      
    </div>
  );
}

export default App;

/*como foi criado um componente nos não iremos repetir código, 
vamos sempre usar esse componente para reaproveitar código

você pode importar tanto assim: <Form/> quanto assim: <Form><Form/>
*/