import React from 'react'


const style = {
    width: '1200px',
    marginLeft: 'auto',
    marginRigth: 'auto'
}

const Container = ({ children }) => (
    <div style={style}>
        {children}
    </div>
);

export default Container;