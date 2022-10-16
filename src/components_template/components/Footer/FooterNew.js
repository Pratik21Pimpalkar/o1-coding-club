import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import logo from "../../../Assets/logo.svg";
import phone from '../../../Assets/phone.png'
import locIcon from '../../../Assets/fu.png'
import Iframe from 'react-iframe'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import mail from '../../../Assets/email.png'
import './footer.css'
import { Link } from 'react-router-dom';
const FooterNew = () => {
    return (

        <footer className="footer-section" style={{ marginTop: "15rem" }}>
            <Container maxWidth={'xl'}>
                <div className="footer-cta pt-5 pb-5">
                    <Grid container justifyContent={'center'}>
                        <Grid item xl={4} md={4} >
                            <div style={{ padding: "0.9rem 0.6rem" }}>
                                <div className="single-cta">
                                    <div className='WidgetIcon'>
                                        <img src={locIcon} alt="" />
                                    </div>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, Nagpur</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl={4} md={4} >
                            <div style={{ padding: "0.9rem 0.6rem" }}>
                                <div className="single-cta">
                                    <div className='WidgetIcon'>
                                        <img src={phone} alt="" />
                                    </div>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl={4} md={4} >
                            <div style={{ padding: "0.9rem 0.6rem" }}>
                                <div className="single-cta">
                                    <div className='WidgetIcon'>
                                        <img src={mail} alt="" />
                                    </div>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ padding: '3rem' }}>
                    <Grid container >
                        <Grid item xl={4} md={4} >
                            <div className="footer-widget">
                                <div className="footer-logo" style={{ width: "5rem" }}>
                                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo" style={{ width: "100%", objectFit: "contain" }} /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Not just a coding school, but a complete placement ecosystem with strong emphasis on high quality placement training & support, not only equipping you with relevant job market skills but providing every help to land your dream job.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <Link to='/'><YouTubeIcon/></Link>
                                    <Link to='/'><InstagramIcon/></Link>
                                    <Link to='/'><TelegramIcon/></Link>
                                    <Link to='/'><LinkedInIcon/></Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl={4} md={4} >
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link >Home</Link></li>
                                    <li><Link >Know Your Prep</Link></li>
                                    <li><Link >Our Events</Link></li>
                                    <li><Link >Contact Us</Link></li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xl={4} md={4} >
                            <div className="footer-widget1">
                                <div className="footer-widget-heading">
                                    <h3>Explore Us</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Find us here</p>
                                </div>
                                <div className="subscribe-form">
                                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3909907251495!2d79.05943361473419!3d21.176621385918473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a8970c08e9%3A0xfe4a9c97e7e671cb!2sShri%20Ramdeobaba%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1665673346821!5m2!1sen!2sin"
                                        id=""
                                        width='100%'
                                        height='100%'
                                        className=""
                                        display="block"
                                        position="relative" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <div className="copyright-area">
                <Container maxWidth={'xl'} >

                    <Grid item xl={6} lg={6} >
                        <div className="copyright-text">
                            <p style={{ textAlign: "center" }}>Copyright &copy; 2018, All Right Reserved <a href="https://o1codingclub.in">O(1) Coding Club</a></p>
                        </div>
                    </Grid>
                </Container>
            </div>
        </footer>

    )
}


export default FooterNew