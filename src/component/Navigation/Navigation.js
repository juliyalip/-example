import { NavLink } from "react-router-dom";
import React from 'react';
import s from './navigation.module.css';

const Navigation = () => (
    <nav>
        <ul className={s.navList}>
            <li className={s.navItem }>
                <NavLink to="/">Home</NavLink>
            </li>
            <li  className={s.navItem }>
                <NavLink to="/counter">Counter</NavLink>
            </li>
            <li  className={s.navItem }>
                <NavLink to="/sing-up">Sing-up</NavLink>
            </li>
            <li  className={s.navItem }>
                <NavLink to="/clock">Clock</NavLink>
            </li>
            <li  className={s.navItem }>
                <NavLink to="/news">News</NavLink>
            </li>
                        <li  className={s.navItem }>
                <NavLink to="/todos">Todos</NavLink>
            </li>
         
            
        </ul>
        
    </nav>
);

export default Navigation;


