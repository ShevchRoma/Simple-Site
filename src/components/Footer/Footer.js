import React from 'react'
import twitter from './../../assets/footer/Twitter.png'
import facebook from './../../assets/footer/Facebook.png'
import linkedin from './../../assets/footer/LinkedIn.svg'
import './Footer.scss'

const Footer = () => {
  return (
        <div className="footer__body">
            <div className="footer__column">
                <div className="footer__title">
                     Contacts
                </div>
             <div className="footer__description">
                2019 Rootz Foundation.
                All rights reserved
             </div>
            </div>
            <div className="footer__mobile">
             <div className="footer__column">
                <div className="footer__header">
                    Headquarters
                </div>
            <div className="footer__address">
                <p>1234 Taliban</p>
                <p>Los Angeles, La 1234567</p>
                <a href="tel:(123) 456-7890">(123) 456-7890</a> 
            </div>
            </div>
            <div className="footer__column">
                <div className="footer__header">
                   Social media
                </div>
                <div className="footer__icons">
                    <a href="*"><img src={twitter} alt="twitter" /></a>
                    <a href="*"><img src={facebook} alt="facebook" /></a>
                    <a href="*"><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
             </div>
                <div className="footer__column">
                  <div className="footer__header">
                     Headquarters
                  </div>
                <div className="footer__address">
                        <p>1234 Taliban</p>
                        <p>Los Angeles, La 1234567</p>
                        <a href="tel:(123) 456-7890">(123) 456-7890</a> 
                </div>
                </div>
                <div className="footer__column">
                     <div className="footer__header">
                        Social media
                     </div>
                <div className="footer__icons">
                        <a href="*"><img src={twitter} alt="twitter" /></a>
                        <a href="*"><img src={facebook} alt="facebook" /></a>
                        <a href="*"><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
        </div>
  )
}

export default Footer