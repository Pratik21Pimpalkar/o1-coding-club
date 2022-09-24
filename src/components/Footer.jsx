import React from "react";
// import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

import logo from "../Assets/logo.svg" ;
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <Footerwrap>
      <div id="footer-wrap">
        <footer className="footer">
          <div className="top-footer">
            <div className="row">
              <div className="company-detail">
                <div className="footer-logo">
                  <a href="#" title="O1 Analysis">
                    <img
                      src={logo}
                      width="72"
                      alt="O(1)-logo"
                      className="img-fluid"
                    />
                    Official website of O1 Coding Club
                  </a>
                  {/* <p className="tagline">A product of O1 Coding Club.</p> */}
                </div>
              </div>
            
              <div className="col-md-3">
                <h4>Contact</h4>
                <ul className="footer-link">
                  <li>
                    <a href="mailto:o1codingclub@gmail.com" title="Contact">
                      o1codingclub@gmail.com
                    </a>
                  </li>
                  <li>
                    <div className="icons">
                      <div className="social-icons">
                        Socials
                        <br></br>
                        <a
                          href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
                          target="_blank"
                        >
                          <LinkedInIcon />
                        </a>
                        <a
                          href="https://t.me/+diEKUu4Y-oY3NDFl"
                          target="_blank"
                        >
                          <TelegramIcon />
                        </a>
                        <a
                          href="https://www.instagram.com/o1codingclub/?hl=en"
                          target="_blank"
                        >
                          <InstagramIcon />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg"
                          target="_blank"
                        >
                          <YouTubeIcon />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="row">
              <div className="col-md-5">
                <p className="copyright pt-3">
                  O(1) Know Your Prep &reg; {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Footerwrap>
  );
};
const Footerwrap = styled.div`
  .footer {
    padding: 90px 105px 25px 105px;
    color: #d6d9db;
    min-height: max-content;
  }
  .company-detail {
    margin-right: 13rem;
  }

  .img-fluid {
    margin-right: 1rem;
  }

  .footer .top-footer {
    padding: 0 0 50px;
    border-bottom: 1px solid #979797;
    /* border-top: 1px solid #979797; */
  }
  .footer .footer-logo {
    width: 100%;
    margin: 0 auto;
  }
  .footer .footer-logo a {
    font-size: 1.5rem;
    color: #ffffff;
    opacity: 0.75;
  }

  .footer .tagline {
    font-size: 0.875rem;
    margin: 1rem 0;

    color: #fff;
    opacity: 0.5;
  }

  .footer h4 {
    font-size: 1.125rem;
    font-weight: bold;
    color: #d6d9db;
    line-height: 22px;
    margin: 14px 0 0;
    padding: 0 0 25px;
  }

  .footer .footer-link {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 16px;
    font-weight: normal;
  }

  .footer .footer-link a {
    text-decoration: none;
    color: #fff;
    opacity: 0.75;
    display: block;
    padding-bottom: 20px;
    cursor: pointer;
  }

  .footer .footer-link a:hover {
    transform: scale(1.01);
    transition: all 0.3s;
  }

  .footer .social-icons a {
    display: inline-block !important;
    padding-bottom: 8px !important;
    margin-right: 15px;
  }

  .footer .social-icons a :hover {
    text-decoration: underline;
    transform: translateY(-1px);
  }

  .footer .bottom-footer {
    padding: 30px 0 0;
  }

  .bottom-footer .copyright {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: #fff;
    opacity: 0.75;
  }

  .bottom-footer .scc-footer-logo a {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 15px;
    display: block;
  }

  @media only screen and (max-width: 1199px) {
    .company-detail {
      min-width: 100%;
    }
  }

  @media only screen and (max-width: 991px) {
    .footer {
      padding: 20px 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .footer {
      text-align: center;
      padding: 25px;
    }
  }
`;

export default Footer;
