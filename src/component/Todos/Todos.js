import React, {useState, useReducer, useMemo} from 'react';
import shortid from 'shortid';
import FormTodo from './FormTodo';


const style = {
    width: '350px',
    display: 'flex',
    border: '1px solid black',
    padding: '10px',
    marginBottom: '7px',
    alingItems: 'center',
    justifyContent: 'space-between'
} 


//      !!!!!!! -  action.payload.todoId
const todoReducer = (state, action) => {
    switch(action.type) {
        case 'addTodo':
            return [...state, action.payload.todo];
        
        case 'removeTodo':
            return state.filter(todo => todo.id !== action.payload.todoId);
        
        case 'complited':
            return state.map(todo => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        complited: !todo.complited
                    }
                }return todo
            })
        
        default: 
            return state
    }
    
   
}

// Для работы с колекцией лучший вариант- использовать reducer реактовский
// это концепция обновления состояния от предыдущего (ждет акшен и обновляем редюсер)
export default function Todos() {
// useReduser - возвращает state и dispatch
  //  const [state, dispatch]= useReducer(reducer, initionState, init)

const [todos, dispatch] = useReducer(todoReducer, []);

const [filter, setFilter] = useState('')

    const filterChange = e => {
        setFilter(e.target.value)
    }

    const handleAdd = text => {
        const todo = {
            text,
            complited: false,
            id: shortid.generate()
        };
        // вместо setTodo просто dispatch;
        dispatch({ type: 'addTodo', payload: {todo}})
        }

    const handleDelete = todoId => {
      dispatch({type: 'removeTodo', payload: {todoId}})  // !! {todoId }
    }

    const handleComplited = todoId => {
        dispatch({type: 'complited', payload: {todoId}})
    }
    
    const visibleTodo = useMemo(() => {
        console.log("filtered todos");
        return todos.filter(todo=> todo.text.toLowerCase().includes(filter.toLowerCase()))
    }, [todos, filter])

    // useMemo - принимает функцию внутри которой идут вычисления
 
    
    return (
        <div>
            
            <FormTodo add={handleAdd} />
            <hr />

            <input type="text" onChange={filterChange} value={ filter} name="filter"/>
                 
            {todos.length > 0 && (
                       <ul>
                       { visibleTodo.map(({ id, text, complited}) => (
                           <li key={id} style={style}>
                               <p>{text}</p>
                                <input type="checkbox" checked={complited} onChange={()=> {handleComplited(id)}}/>
                           <button type="button" onClick={() => {handleDelete(id)}}>delete</button>
                           </li>   ))}
                       </ul>)}
                </div> )}


/////////////////////////////////////////////////////////////////////////////////////////

// Пример на Хуках - не самый хороший для такой задачи но полностью рабочий
//   export default function Todos() {
//       const [todos, setTodos] = useState([]);
//   
//       const handleAdd = text => {
//           const todo = {
//               text, 
//               complited: false,
//               id: shortid.generate()
//           }
//           // для асинхронных операций нужно от предыдущего состояния
//           setTodos(prevTodos => [...prevTodos, todo])
//       }
//   
//       const handleDelete = todoId => {
//           setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
//       }
//       const handleComplited = todoId => {
//           setTodos( prevTodos => prevTodos.map(todo => {
//               if (todo.id === todoId) {
//                   return {
//                       ...todo,
//                   complited: !todo.complited}
//               } return todo}))  }
//   
//       return (
//            <div>
//                      <FormTodo add={handleAdd } />
//                      {todos.length > 0 && (
//                          <ul>
//                          {todos.map(({ id, text, complited}) => (
//                              <li key={id} style={style}>
//                                  <p>{text}</p>
//                                   <input type="checkbox" checked={complited} onChange={()=> {handleComplited(id)}}/>
//                              <button type="button" onClick={() => {handleDelete(id)}}>delete</button>
//                              </li>   ))}
//                          </ul>)}
//                   </div> )}
//   
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////////    

//   export default class Todos extends React.Component{
//       state = {
//           todos: [],
//           filter: ''}
//   
//       hadleDelete = todoId => {
//           this.setState(prevState =>({
//               todos: prevState.todos.filter(todo => todo.id !==todoId)
//           }))  }
//   
//       handleAddTodo = text => {
//           const todo = {
//               id: shortid.generate(),
//               text, 
//               complited: false
//           }
//           this.setState(prevState => ({
//               todos: [...prevState.todos, todo]
//           }))   }
//   
//       handleComplited = todoId => {
//           this.setState(prevState => ({
//               todos: prevState.todos.map(todo => {
//                   if (todo.id === todoId) {
//                       return {
//                           ...todo,
//                           complited: !todo.complited
//                       }
//                   } return todo  }) })) }
//   
//       // вызов функции handleAddTodo будет в файле формы при нажатии на сабмит через проп add
//       render() {
//           return (
//               <div>
//                   <FormTodo add={this.handleAddTodo} />
//                   {this.state.todos.length > 0 && (
//                       <ul>
//                       {this.state.todos.map(({ id, text, complited}) => (
//                           <li key={id} style={style}>
//                               <p>{text}</p>
//                                <input type="checkbox" checked={complited} onChange={()=> {this.handleComplited(id)}}/>
//                           <button type="button" onClick={() => {this.hadleDelete(id)}}>delete</button>
//                           </li>   ))}
//                       </ul>)}
//                </div> )   }  }