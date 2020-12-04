
import React from "react";
import exp from "./Experience.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faUniversity,faBriefcase,faAddressCard,faTv} from '@fortawesome/free-solid-svg-icons'
const Experience=()=>{
    return (
    <div id={"experienceSection"}>
            <section id={exp.experienceSection}>

                <div className={exp.innerWidth}>
                    <div className={exp.content}>
                        <h1 className={exp.expTitle}>Education & Experiences</h1>
                        <div className={exp.blocks}>
                            <div className={exp.block}>
                                <FontAwesomeIcon icon={faUniversity} size={`3x`} color={"#48dbfb"}/>
                                <i className="fab fa-facebook-square"></i>
                                <h3>Lviv Polytechnic</h3>
                                <p>From 2016 of September to 2020 of June I used to study in
                                    Lviv Polytechnic. My speciality was Computer Science</p>
                            </div>

                            <div className={exp.block}>
                                <FontAwesomeIcon icon={faBriefcase} size={`3x`} color={"#48dbfb"}/>
                                <h3>Bachelor's Thesis Project</h3>
                                <p>From 2020 of March to 2020 of June i used to create my
                                    bachelor's thesis project using React.JS. It was an software which is making fractal analysis of time series
                                    which created using React.js and Chart.js.It gave
                                    me a lot of practicing in react.js  ,I studied new library ' Chart.js ' .</p>
                            </div>

                            <div className={exp.block}>
                                <FontAwesomeIcon icon={faTv} size={`3x`} color={"#48dbfb"}/>
                                <h3>IT-Kamasutra React-Redux</h3>
                                <p>I have completed the famous online course of 100 lessons on the channel "IT-Kamasutra".From there I learned React.js and Redux
                                </p>
                            </div>

                             <div className={exp.block}>
                                <FontAwesomeIcon icon={faAddressCard} size={`3x`} color={"#48dbfb"}/>
                                <h3>Portfolio Page</h3>

                                <p>Now I am creating this page :)</p>
                           </div>


                        </div>


                    </div>



                </div>

            </section>
    </div>)
}
export default Experience;