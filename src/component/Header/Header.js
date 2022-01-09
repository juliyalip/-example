import React from 'react';
import AuthContext from '../../context/AuthContext';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu'

const Header = () => (
    <header style={{ display: "flex", alignItems: 'center'}} >
      
        <Navigation />
        <AuthContext>
            <UserMenu />

        </AuthContext>
     
    </header>
);

export default Header;