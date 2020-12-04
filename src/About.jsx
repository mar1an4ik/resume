import "./About.css"
import React from "react";
import aboutLogo from "./images/marian.png"
const About=()=>{
    return (<section id={"about-section"}>
                <div className={"inner-width"}>
                    <h1 className={"about-title"}>About</h1>
                    <div className={"about-content"}>
                        <img className={"about-pic"} src={aboutLogo}></img>
                        <div className={"about-text"}>
                        <h2>Marian Puzdrak</h2>
                        <h3>
                            <span>React.js</span>
                            <span>Redux</span>
                            <span>Javascript</span>
                        </h3>
                        <p>

                            Hello,my name is Marian and I am 21 years old.
                            I live in Lviv.
                            <br/>
                            This year I have finished the  Lviv Polytechnic National University
                            with bachelor's degree. My speciality was "<i>Computer science</i>" : "<i>Artificial Intelligence System</i>".
                            <br/>
                            As for my hobbies, I prefer sport,e-sport,UFC matches.
                        </p>
                    </div>
                    </div>

                    <div className={"skills"}>
                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>React</span>
                            <span>90%</span>
                        </div>
                        <div className={"skill-bar react"}></div>
                        </div>

                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>Javascript</span>
                            <span>80%</span>
                        </div>
                        <div className={"skill-bar js"}></div>
                        </div>

                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className={"skill-bar html"}></div>
                        </div>

                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>CSS</span>
                            <span>85%</span>
                        </div>
                        <div className={"skill-bar css"}></div>
                        </div>

                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>Redux</span>
                            <span>90%</span>
                        </div>
                        <div className={"skill-bar redux"}></div>
                        </div>


                    </div>

                    </div>
            </section>)
}
export default About;