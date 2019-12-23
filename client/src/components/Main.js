import React from 'react'
import ContactUs from "./Email"
import Icon from '../lib/Icon'
// import image from '../../public/blur.jpg'
import NBA from "../Assets/nbamemory.png"
// import BAR from "../Assets/pubdog.png"
import ETSY from "../Assets/estyclone.png"
import ORDERUP from "../Assets/OrderUp.png"
import GREYSCALE from "../Assets/greyscaleComputer.jpg"
export default function Main(props){
    return(
        <div className="app">
            <header>
                <div className="headbar">
                    <div className="navbar">
                       <a href="#home"><p className="h">Home</p></a> 
                        <a href="#projects"><p className="h">Projects</p></a>
                            <div className="icons">
                                <a className="link" href='https://www.linkedin.com/in/luis-alonso-b62a38194/' target="_blank"><Icon icon="linkedin"></Icon></a>
                                <a className="github" href='https://github.com/lalonso317' target="_blank"><Icon icon="github"></Icon></a>
                                <a className="twitter" href="https://twitter.com/Code007Luis" target="_blank"><Icon icon="twitter"></Icon></a>
                                <a className="email" href="mailto:if.create702@gmail.com" ><Icon icon="envelope-square"></Icon></a>
                            </div>
                        <a href="#about"><p className="h">About Me</p></a>
                        <a href="#contact"><p className="h">Contact</p></a>
                    </div>
                </div>
            </header>
            <main>
                <div id="home" className="firstslide">
                    <div className="greyBack">
                    <img className="greyscale" src={GREYSCALE}></img>
                    </div>
                    <div className="nameandtag">
                        <div className="myname">
                            <h1 className="fullname">Luis Alonso</h1>
                        </div>
                        <div>
                            <p className="tagline">Full Stack Engineer &  A Student of Code</p>
                        </div>
                    </div>
                </div>
                <div id="projects" className="secondslide">
                    <div className="projects">
                        <p className="project">Projects</p>
                        <div className="languages">
                            {/* <img className="code" src={"/html5.png"} ></img>
                            <img className="code" src={"/css.png"}></img>
                            <img className="code" src={"/javascript.png"} ></img>
                            <img className="code" src={"/jquery.png"}></img>
                            <img className="code" src={"/react.png"}></img>
                            <img className="code" src={"/nodejs.png"}></img>
                            <img className="codes" src={"/mongodb-logo.png"}></img>
                            <img className="codes" src={"/mysql=logo.png"}></img> */}
                        </div>
                        <div className="screenshots">
                            <div className="nbadiv">
                                <label>NBA Memory Game</label>
                                <div className="singleProject">
                                    <a className="projectA" href="https://nbamemorye.surge.sh/" target="_blank"><img className="shot" src={NBA}></img></a>
                                    <a className="projectGit" href="https://github.com/lalonso317/MemoryGame" target="_blank"><Icon className="icon" icon="github"></Icon></a>
                                </div>
                            </div>
                            <div className="nbadiv">
                                <label>Etsy Clone</label>
                                <div className="singleProject">
                                    <a className="projectA" href="https://estyclones.surge.sh/" target="_blank"><img className="shot" src={ETSY}></img></a>
                                    <a className="projectGit" href="https://github.com/lalonso317/Create-Etsy-Search-Page" target="_blank"><Icon className="icon"  icon="github"></Icon></a>
                                </div>
                            </div>
                            <div className="nbadiv">
                                <label>OrderUp.</label>
                                <div className="singleProject">
                                    <a className="projectA" href="#"><img className="shot" src={ORDERUP}></img></a>
                                    <a className="projectGit" href="https://github.com/lalonso317/RecipeBookMaster" target="_blank"><Icon className="icon"  icon="github"></Icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span id="about" ></span>
                <div id="contact" className="fourthslide">
                    <div className="contact">
                        <p className="contactme">Contact</p>
                        <div>
                            <p className="aboutText">Hi, I am only beginning my career as a Full Stack Engineer. With only 3 months of experience, I believe that I am able do some solid work. If you want to learn more, feel free to contact me down below.</p>
                            <p className="aboutText">If you perfer paper, here is my resume</p>
                            <a className="resume" href="/resume2.pdf" target="_blank">Click here</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <br></br>
                           <a href="mailto:if.create702@gmail.com"><p className="email">if.create702@gmail.com</p></a> 
                           <p className="formtext">Thank you again for taking the time to view my portfilo. If you would like to get in contact with me. You can send me an email and I will get back to you as soon as possible!</p>
                        <br></br>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}