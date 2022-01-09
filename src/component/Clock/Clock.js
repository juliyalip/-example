import React, {useState, useEffect} from 'react';
import s from './clock.module.css';


const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
                  setTime(new Date()) 
   }, 1000) 
        // та функция, которую мы вернем из функции переданной в useEffect
        // будет выполнена перед следующим useEffect  !!!!! (будет очистка и следующий вызов- componentWillUnmaunt)
        return () => {
            clearInterval(intervalId)
        }
     }, [])

    //пустой массив означает аналог componentDidMount

    return (
        <div className={s.container}>
            <p className={s.clockface}>current time {time.toLocaleTimeString()}</p>
        </div>
        
    )
};

export default Clock;





//   export default class Clock extends React.Component{
//   
//       state = {
//           time: new Date()
//       }
//       intervalId = null;
//   
//       componentDidMount() {
//           this.intervalId = setInterval(() =>{
//               this.setState({
//       time: new Date()})
//           })
//       };
//   
//       componentWillUnmount() {
//           clearInterval(this.intervalId)
//       }
//       
//       render() {
//           return (
//               <div className={s.container}>
//                   <p className={s.clockface}>current time {this.state.time.toLocaleTimeString()}</p> 
//                   </div>
//           )    }   }