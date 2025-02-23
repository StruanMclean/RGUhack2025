import { Center } from '@mantine/core';
import React from 'react';

const Header = () => {
    return (
        <div style={styles.header}>
            <img src='Logo.png' alt='Logo' style={styles.logo} />
        </div>            
    );
};

const styles = {
    header: {
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%',
        padding: '10px',
    },
    logo: {
        position: 'absolute',
        top: '0.5%',
        left: '0.5%',
        height: '150px', // Adjust size as needed
    }
};

export default Header;