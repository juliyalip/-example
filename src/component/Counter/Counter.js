import React, { useState, useEffect } from 'react';
// используй состояние -принимает аргументом начальное состояние
//возвращает !! массив из 2-ч значений - стейт и функцию которая его обновляет - 
// поэтому мы этот массив можем сразу деструктуризировать

import s from './counter.module.css';


const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('document.title.useEffect')
        document.title = `you cliked ${count} times`
    }, [count]);

     // в функции нет методов, поэтому объявляем обычную функцию так:
 const handleIIncrement = () => {
        setCount(count + 1)
    }

    const handleReset = () => {
        setCount(0)
       
    }

    /// В таком порядке правильно - друг за другом

    const [textValue, setValue] = useState('');

    return (
        <div className={s.container}>
            <input type="text" value={textValue} onChange={(e)=> setValue(e.target.value) } />
            <p>You cliked { count} times</p>
            <button type="button" onClick={
                handleIIncrement}>Increment counter</button>
                  <button type="button" onClick={handleReset}>reset </button>
              </div>
        
    )
}
export default Counter


//   export default class Counter extends Component{
//   
//       state = {
//       count: 0
//       }
//       
//       handleIIncrement = () => {
//           this.setState(prevState => ({
//           value: prevState.value + 1
//       }))     }
//       
//       handleReset = () => {
//           this.setState({
//               value: 0
//           })     }
//   
//       render() {
//           return (
//               <div className={s.container}>
//                   <p>You clicked {this.state.count} times</p>
//                   <button type="button" onClick={this.handleIIncrement}>Increment counter</button>
//                   <button type="button" onClick={this.handleReset}>reset </button>
//               </div>  ) }  }