import { Center } from '@mantine/core';
import React from 'react';

const Header = () => {
    return (
        <Center>
            <div style={styles.Header}>
                <img src='Logo.png' alt='Logo'></img>
            </div>            
        </Center>
    );
};

const styles = {
    Header: { // Changed from Navbar to navbar
        padding: '10px 0',
        textAlign: 'center',
        position: 'fixed', 
        bottom: '25px', 
        width: '100%',
    },
}

export default Header;
