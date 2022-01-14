import React from 'react';
import context from './context'
import avatar from './avatar.png'

const user = {
    name: 'Mango',
    avatar
}

   export default class AuthContext extends React.Component{
   
          handleLogin = () => {
           this.setState({
               user: user
       })
       }
       
       handleLogOuth = () => {
           this.setState({
               user: null
           })
       }
   
       state = {
           user: null,
           onLogin: this.handleLogin,
           onLogOut: this.handleLogOuth
   }
   
       render() {
           return (
               <context.Provider value={this.state}>
                   {this.props.children}
               </context.Provider>
           )
       }
}
   
// const context = createContext()

//     export default class AuthContext extends React.Component{
//     
//         static Consumer = context.Consumer;
//     
//         handleLogin = () => {
//             this.setState({
//                 user: user
//         })
//         }
//         
//         handleLogOuth = () => {
//             this.setState({
//                 user: null
//             })
//         }
//     
//         state = {
//             user: null,
//             onLogin: this.handleLogin,
//             onLogOut: this.handleLogOuth
//     }
//     
//         render() {
//             return (
//                 <context.Provider value={this.state}>
//                     {this.props.children}
//                 </context.Provider>
//             )
//         }
//     }