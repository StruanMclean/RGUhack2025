import { Center } from '@mantine/core';
import React from 'react';

const Footer = () => {
    return (
        <div style={styles.container}>
            <Center>
                <div style={styles.Footer}>
                    {/* Top Section: Stay Connected, About Us, Sitemap */}
                    <div style={styles.topRow}>
                        <div style={styles.LinkedinDiv}>
                            <h2>Stay Connected with us</h2>
                            <ul style={styles.LinkedinProfiles}>
                                <li style={styles.profile}><a href="https://www.linkedin.com/in/joshuanewtoncs/" style={styles.navLink}>JN</a></li>
                                <li style={styles.profile}><a href="https://www.linkedin.com/in/struan-mclean-821aa427b/" style={styles.navLink}>SM</a></li>
                                <li style={styles.profile}><a href="https://www.linkedin.com/in/jayden-james-wilson/" style={styles.navLink}>JW</a></li>
                                <li style={styles.profile}><a href="https://www.linkedin.com/in/joshuanewtoncs/" style={styles.navLink}>DT</a></li>
                            </ul>
                        </div>

                        <div style={styles.AboutUs}>
                            <h2>About Us</h2>
                            <p>
                                We are 4 students working on RGU Hack 2025 for its 10-year anniversary. Our goal is to create innovative solutions that address real-world challenges.
                                We are passionate about technology and creating products that will make an impact. Join us on our journey to innovate and inspire!
                            </p>
                        </div>

                        <div style={styles.Sitemap}>
                            <h2>Sitemap</h2>
                            <ul style={styles.navList}>
                                <li><a href="/gallery" style={styles.navLink}>Gallery</a></li>
                                <li><a href="/dashboard" style={styles.navLink}>Dashboard</a></li>
                                <li><a href="/upload" style={styles.navLink}>Upload</a></li>
                                <li><a href="/settings" style={styles.navLink}>Settings</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section: Privacy Policy & Copyright */}
                    <div style={styles.bottomRow}>
                        <div style={styles.privacyPolicy}>
                            <h2>Privacy Policy</h2>
                        </div>
                        <div style={styles.CopyRight}>
                            <h2>© CRTL + Z (2025)</h2>
                        </div>
                    </div>
                </div>
            </Center>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '1vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: '5%',
    },
    Footer: { 
        width: '100%',
        backgroundColor: '#f8f8f8',
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    topRow: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    LinkedinProfiles: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        gap: '15px',
    },
    LinkedinDiv: {
        width: 'fit-content',
        textAlign: 'left',
        maxWidth: '25%',
    },
    profile: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'lightblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navLink: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    AboutUs: {
        width: '40%',          // Adjust width for a more column-like appearance
        textAlign: 'left',
        lineHeight: '1.6',     // Add some space between lines of text for readability
        fontSize: '16px',
        paddingRight: '10px',  // Add some padding to the right
    },
    Sitemap: {
        width: 'fit-content',
        textAlign: 'left',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        colour: 'black',
    },
    bottomRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        paddingTop: '15px',
        paddingBottom: '10px',
    },
    privacyPolicy: {
        textAlign: 'center',
    },
    CopyRight: {
        textAlign: 'center',
    },
};

export default Footer;
