import React, { useContext } from 'react';
import context from '../../context/context'
// import AuthContext from '../../context/AuthContext';

//  useContext передаем результат вызова createContext()  в переменную прийдет контекст
// так можно затягивать в разные переменные хоть 10 контекстов

export default function UserMenu() {
    // переменна в которую запишем Контекст = то что создало createContext
    const auth = useContext(context)
    console.log(auth)
    return ((
              <div style={{display: 'flex', marginLeft: '800px'}}>
                  {auth.user ? (
                      <>
                          <img src={auth.user.avatar} alt={auth.name} width="32" />
                    <span>Wellcom, { auth.user.name}</span>
                          <button type="button" onClick={auth.onLogOut}>LogOut</button>
  
                      </>
                  ) : <button type="button" style={{width: "90px"}} onClick={auth.onLogin}>logIn</button>}
              </div>

    ))
} 

//   const UserMenu = () => (
//       <AuthContext.Consumer>
//           {context => (
//               <div style={{display: 'flex', marginLeft: '800px'}}>
//                   {context.user ? (
//                       <>
//                           <img src={context.user.avatar} alt={context.name} width="32" />
//                           <span>Wellcom, {context.name}</span>
//                           <button type="button" onClick={context.onLogOut}>LogOut</button>
//   
//                       </>
//                   ) : <button type="button" style={{width: "90px"}} onClick={context.onLogin}>logIn</button>}
//               </div>
//           )}
//       </AuthContext.Consumer>
//   );

// export default UserMenu;