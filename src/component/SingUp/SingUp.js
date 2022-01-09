import React,  {useState, useEffect } from 'react';

import s from './Sinup.module.css'




const SingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const  upDateEmail = e => {
    setEmail(e.target.value)
}

    const upDatePassword = e => {
        setPassword(e.target.value)
    }
    
useEffect(()=> console.log('upDate'))


    const hadleSubmit = e => {
        e.preventDefault();
        alert(`email: ${email} , password: ${password}`)
        setPassword('');
       setEmail('')
    }

    return (
        <form className={s.container} onSubmit={hadleSubmit }>
            <div className={s.label}>
                <label htmlFor='email'>email</label>
                <input type="email" name="email" id="email" value={email} onChange={upDateEmail} />
            </div>

            <div className={s.label}>
                <label htmlFor='password'>password</label>
                <input type="password" name="password" value={password} id="password"  onChange={upDatePassword }/>

            </div>
            <button className={s.btnSubmit} type="submit" >sing-up</button>
        </form>
    )
};

export default SingUp


//   export default class SigUp extends React.Component{
//       state = {
//           email: '',
//           password: ''
//       }
//       handleChange = e => {
//           const { name, value } = e.target;
//           this.setState({
//               [name]: value
//           })
//   }
//   
//       handleSubmit = e => {
//           e.preventDefault();
//   
//       }
//        
//       render() {
//           return (
//       <form className={s.container} onSubmit={this.handleSubmit}>
//           <div className={s.label}>
//                   <label htmlFor='email'>email</label>
//                       <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="email" />
//           </div>
//   
//            <div className={s.label}>
//                        <label htmlFor='password'>password</label>
//                       <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" />
//   
//           </div>
//                   <button className={s.btnSubmit} type="submit" >sing-up</button>
//       </form>
//       )}
//   }