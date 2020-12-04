
import React from "react";
import ftr from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faFacebookF,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'


const Footer=()=>{
    return (
    <div className="App">
        <section id={ftr.footerSection}>
            <div className={ftr.footer}>
                <div className={ftr.copyright}>
                    &copy; Created & Designed By <i>Marian</i>

                </div>
                <div className={ftr.smm}>
                    <a href={"https://www.instagram.com/marian_immortal/"} target={"_blank"}> <FontAwesomeIcon  icon={faInstagram} size = '2x' color={"white"}/> </a>
                    <a href={"https://www.facebook.com/m.puzdrack/"} target={"_blank"}> <FontAwesomeIcon   icon={faFacebookF} size = '2x' color={"white"}/></a>
                    <a href={"https://twitter.com/mpuzdrack"}  target={"_blank"}> <FontAwesomeIcon  icon={faTwitter} size = '2x' color={"white"}/> </a>
                    <a href={"https://www.linkedin.com/in/marian-puzdrak-ba4b351b7/"}  target={"_blank"}> <FontAwesomeIcon  icon={faLinkedinIn} size = '2x' color={"white"}/> </a>

                </div>


            </div>

            </section>
    </div>)
}
export default Footer;