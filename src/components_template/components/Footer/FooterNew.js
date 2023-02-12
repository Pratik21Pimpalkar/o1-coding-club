import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import logo from "../../../Assets/logo.svg";
import phone from '../../../Assets/phone.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import mail from '../../../Assets/email.png'
import './footer.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const FooterNew = (props) => {
    return (

        <footer className="footer-section" style={{ marginTop: "5rem" }} id="footer">
            <Container maxWidth={'xl'}>
                <div className="footer-cta pt-5 pb-5">
                    <Grid container justifyContent={'center'}>
                        {/* <Grid item xl={4} md={4} >
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
                        </Grid> */}
                        <Grid item xl={6} md={4} sm={12}>
                            <div style={{ padding: "0.9rem 0.6rem", display: 'flex', justifyContent: 'center' }}>
                                <div className="single-cta">
                                    <div className='WidgetIcon'>
                                        <img src={phone} alt="phone" />
                                    </div>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <a style={{
                                            color: '#7e7e7e'
                                        }} href='tel:9850314506' rel="noreferrer">9850314506</a>
                                        <a style={{
                                            color: '#7e7e7e'
                                        }} href='tel:9970780928' rel="noreferrer">, 9970780928</a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl={4} md={4} sm={12}>
                            <div style={{ padding: "0.9rem 0.6rem", display: 'flex', justifyContent: 'center' }}>
                                <div className="single-cta">
                                    <div className='WidgetIcon'>
                                        <img src={mail} alt="" />
                                    </div>
                                    <a href="mailto:o1codingclub@gmail.com" rel="noreferrer">
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>o1codingclub@gmail.com</span>
                                        </div></a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ padding: '3rem' }}>
                    <Grid container spacing={5}>
                        <Grid item xl={6} md={4} >
                            <div className="footer-widget">
                                <div className="footer-logo" style={{ width: "5rem" }}>
                                    <a href="/"><img src={logo} className="img-fluid" alt="logo" style={{ width: "100%", objectFit: "contain" }} /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Not just a coding school, but a complete placement ecosystem with strong emphasis on high quality placement training & support, not only equipping you with relevant job market skills but providing every help to land your dream job.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="https://www.linkedin.com/in/o-1-coding-club/" target="_blank"><LinkedInIcon /></a>
                                    <a href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg" target="_blank"><YouTubeIcon /></a>
                                    <a href="https://www.instagram.com/o1codingclub/" target="_blank"><InstagramIcon /></a>
                                    <a href="https://t.me/+diEKUu4Y-oY3NDFl" target="_blank"><TelegramIcon /></a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl={6} md={4} className="footer-text ">
                            <p className="tandc" style={{ fontSize: "11px" }} > {props.name.footerbottomtext ? props.name.footerbottomtext : ""}</p>
                            {/* <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><HashLink to='/#'>Home</HashLink></li>
                                    <li><a href="https://knowyourprep.o1codingclub.in" target="_blank" >Know Your Prep</a></li>
                                    <li><HashLink to="#footer">Contact Us</HashLink></li>
                                </ul>
                            </div> */}
                        </Grid>

                    </Grid>
                </div>
            </Container>
            <div className="copyright-area">
                <Container maxWidth={'xl'} >

                    <Grid item xl={6} lg={6} >
                        <div className="copyright-text">
                            <p style={{ textAlign: "center" }}>Copyright &copy; 2022, All Right Reserved <a href="/">O(1) Coding Club</a></p>
                        </div>
                    </Grid>
                </Container>
            </div>
        </footer>

    )
}


export default FooterNew