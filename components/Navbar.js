import React from 'react';

const Navbar = () => {
    return (
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
                        <li style={styles.navItemCircle}>
                            <a href="/upload" style={styles.navLink}>+</a>
                        </li>
                        <li style={styles.navItem}>
                            <a href="/settings" style={styles.navLink}>Settings</a>
                        </li>
                        <li style={styles.navItem}>
                            <a href="/settings" style={styles.navLink}>Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

//This is styling for the Navbar component
const styles = {
    navbar: { // Changed from Navbar to navbar
        padding: '10px 0',
        textAlign: 'center',
        position: 'fixed', 
        bottom: '0', 
        width: '100%',
    },
    navList: {
        listStyle: 'none',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Aligns all items (including the circle) vertically
    },
    navItem: {
        margin: '0 15px',
        textAlign: 'center',
    },
    navItemCircle: {
        margin: '0 15px',
        backgroundColor: 'white',
        borderRadius: '50%',
        width: '70px',
        height: '70px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', // Centers content inside the circle
        outline: '2px solid black',
        backgroundColor: 'lightblue',
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '30px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        width: 'fit-content',
        position: 'absolute',
        top: '-100%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Proper centering
        padding: '10px',
        borderRadius: '10px',
        height: '50px' // Fixed height declaration
    }
};

export default Navbar;
