import React, {useState} from 'react';

const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    border: '1px solid black',
    padding: '15px',
    marginLeft: '250px',
  
}

export default function FormTodo({add}){
    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        add(text);
        setText('')
    }

    return (
        <form style={style} onSubmit={handleSubmit}>
               <label htmlFor='form'>Enter you text</label>
           <input type="text" value={text} name="text" onChange={handleChange} />
           <button type="submit" style={{marginTop: '10px'}}>add todo</button>
           </form> )
}






//export default class FormTodo extends React.Component{
//
//    state = {
//        text: ''
//    }
//    
//    handleChange = e => {
//        const { name, value } = e.target;
//        this.setState({
//            [name]: value
//        })   }
//
//    handleSubmit = e => {
//        e.preventDefault();
//        this.props.add(this.state.text)
//        this.setState({
//            text: ''
//        })   }
//
//    render() {
//    
//        return ( <form style={style} onSubmit={this.handleSubmit}>
//                <label htmlFor='form'>Enter you text</label>
//            <input type="text" value={this.state.text} name="text" onChange={this.handleChange} />
//            <button type="submit" style={{marginTop: '10px'}}>add todo</button>
//            </form> )
//         }    }
