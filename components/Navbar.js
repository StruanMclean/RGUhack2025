import { Center } from '@mantine/core';
import React from 'react';

const Navbar = () => {
    return (
        <Center>
            <div style={styles.navbar}>
                <nav>
                    <div style={styles.container}>
                        <ul style={styles.navList}>
                            <li style={styles.navItem}>
                                <a href="/gallery" style={styles.navLink}>Gallery</a>
                            </li>
                            <li style={styles.navItem}>
                                <a href="/dashboard" style={styles.navLink}>Dashboard</a>
                            </li>
                            <a href="/upload">
                                <li style={styles.navItemCircle}>
                                    <span>+</span>
                                </li>                                
                            </a>
                            <li style={styles.navItem}>
                                <a href="/settings" style={styles.navLink}>Settings</a>
                            </li>
                            <li style={styles.navItem}>
                                <a href="/map" style={styles.navLink}>Map</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>            
        </Center>
    );
};

//This is styling for the Navbar component
const styles = {
    navbar: { // Changed from Navbar to navbar
        padding: '10px 0',
        textAlign: 'center',
        position: 'fixed', 
        bottom: '25px', 
        width: '100%',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // Aligns all items (including the circle) vertically
        width: 500
    },
    navItem: {
        textAlign: 'center',
    },
    navItemCircle: {
        backgroundColor: 'white',
        borderRadius: '50%',
        width: '70px',
        height: '70px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', // Centers content inside the circle
        outline: '10px solid white',
        backgroundColor: '#238ce7',
        color: 'white',
        textDecoration: 'none',
        fontSize: '19px',
        marginLeft: -10,
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '19px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        width: 'fit-content',
        position: 'absolute',
        top: '-100%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '25px',
        borderRadius: '10px',
        height: '50px'
    }
};

export default Navbar;
