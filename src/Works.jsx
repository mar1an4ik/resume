
import React from "react";
import works from "./Works.module.css"
import adds from "./images/adds.png"
import dyplom from "./images/dyplom.png"
import work3 from "./images/work3.png"
import calc from "./images/calc.png"
import photos from "./images/photos.png"
const Works=()=>{
    return (
    <div id={"worksSection"}>

            <section id={works.worksSection}>
                <h1 className={works.title}>Works</h1>
                <div className={works.blocks}>


                    <a className={works.block} target={"_blank"} href={"https://mar1an4ik.github.io/adds/"}><img src={adds}/>
                        <div className={works.descr}>
                            <h3> Adds site</h3>
                            <h4>React.js and Redux</h4>
                            <p className={works.date}>July 29 2020</p>
                        </div>
                    </a>


                    <a className={works.block}  target={"_blank"} href={"https://mar1an4ik.github.io/Dyplomna/"} ><img src={dyplom}/>
                        <div className={works.descr}>
                            <h3> Fractal Analysys</h3>
                            <h4>React.js and Chart.js</h4>
                            <p className={works.date}>April 11 2020</p>
                        </div>
                    </a>


                    <a className={works.block} href={"https://mar1an4ik.github.io/movies/"} target={"_blank"}  ><img src={work3} />
                        <div className={works.descr}>
                            <h3>Movies(trying to copy sweet.tv)</h3>
                            <h4>React.js</h4>
                            <p className={works.date}>30.09-Paused </p>
                        </div>
                    </a>

                    <a className={works.block} href={"https://mar1an4ik.github.io/unsplashPhotos/"} target={"_blank"}  ><img src={photos} />
                        <div className={works.descr}>
                            <h3>SimpleTestTask</h3>
                            <h4>React.js</h4>
                            <p className={works.date}>December 04 2020 </p>
                        </div>
                    </a>


                    <a className={works.block} href={"https://mar1an4ik.github.io/calculator/"} target={"_blank"}  ><img src={calc} />
                        <div className={works.descr}>
                            <h3>Calculator</h3>
                            <h4>React.js</h4>
                            <p className={works.date}>December 01 2020 </p>
                        </div>
                    </a>

                </div>

            </section>
    </div>)
}
export default Works;