
import React from "react";
import cnt from './Contacts.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faFacebookF,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelopeOpen,
    faMobileAlt,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

const Contacts=()=>{
    return (
    <div id={"contactsSection"} className="App">
        <section id={cnt.contactsSection}>
        <div className={cnt.inner}>

            <h1 className={cnt.title}>Get in touch</h1>
            <div className={cnt.contacts}>
                <div className={cnt.block}>
                    <i> <FontAwesomeIcon icon={faMobileAlt} color={"#48dbfb"} size={"3x"}/> </i>
                    +380935180595
                </div>
                          <div className={cnt.block}>

                              <i>   <FontAwesomeIcon icon={faEnvelopeOpen} color={"#48dbfb"} size={"3x"}/></i>
                    marianelement@gmail.com
                </div>
                          <div className={cnt.block}>

                              <i> <FontAwesomeIcon icon={faMapMarkerAlt} color={"#48dbfb"} size={"3x"}/></i>
                    Lviv,Ukraine
                </div>
            </div>

            <form className={cnt.form}>
                <input className={cnt.name} placeholder={"Name"}/>
                <input className={cnt.email} placeholder={"Email"}/>
                <input className={cnt.subject} placeholder={ "Subject"}/>
                <textarea placeholder={"Message"} className={cnt.message}></textarea>
                <button className={cnt.formButton}>Send</button>
            </form>

            </div>


            </section>
    </div>)
}
export default Contacts;