import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer(props) {
    const location = useLocation();

    return (
        <div style={location.pathname === '/login' || location.pathname === '/register'
            ? { display: 'none' }
            : {
                height: '100px',
                backgroundColor: 'rgba(0,0,0,0.9)'
            }}
            className='Footer'>
            <h1 style={{ color: '#fff', textAlign: 'center', lineHeight: '100px' }}>&copy; Hiepxuan2006</h1>
        </div>
    );
}

export default Footer;