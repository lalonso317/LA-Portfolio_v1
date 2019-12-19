import React from 'react'
import ContactUs from "./Email"
import Icon from '../lib/Icon'
// import image from '../../public/blur.jpg'
import NBA from "../Assets/nbamemory.png"
import BAR from "../Assets/pubdog.png"
import ETSY from "../Assets/estyclone.png"
import ORDERUP from "../Assets/OrderUp.png"
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
                    <div className="myname">
                        <h1>Luis Alonso</h1>
                    </div>
                    <div>
                        <p>Full Stack Engineer &  A Student of Code</p>
                    </div>
                </div>
                <div id="projects" className="secondslide">
                    <div className="projects">
                        <p className="project">Projects</p>
                        <div className="languages">
                            <img className="code" src={"/html5.png"} ></img>
                            <img className="code" src={"/css.png"}></img>
                            <img className="code" src={"/javascript.png"} ></img>
                            <img className="code" src={"/jquery.png"}></img>
                            <img className="code" src={"/react.png"}></img>
                            <img className="code" src={"/nodejs.png"}></img>
                            <img className="codes" src={"/mongodb-logo.png"}></img>
                            <img className="codes" src={"/mysql=logo.png"}></img>
                        </div>
                        <div className="screenshots">
                            <div className="nbadiv">
                                <label>NBA Memory Game</label>
                                <a href="https://nbamemorye.surge.sh/" target="_blank"><img className="shot" src={NBA}></img></a>
                            </div>
                            <div className="nbadiv" >
                                <label>Pub Dog Bar</label>
                            <a href="https://pubdogbar.surge.sh/" target="_blank"><img className="barshot" src={BAR}></img></a>
                            </div>
                            <div className="nbadiv">
                                <label>Etsy Clone</label>
                                <a href="https://estyclones.surge.sh/" target="_blank"><img className="shot" src={ETSY}></img></a>
                            </div>
                            <div className="nbadiv">
                                <label>OrderUp.</label>
                                <a href="#"><img className="ordershot" src={ORDERUP}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <span id="about" ></span>
                <div className="thirdslide">
                    <div className="about">
                        <p className="aboutme">About Me</p>
                        <div>
                            <p className="aboutText">Hi, I am only beginning my career as a Full Stack Engineer. With only 3 months of experience, I believe that I am able to perform at a high level. If you want to learn more, feel free to <a href="#contact">contact me.</a></p>
                            <p className="aboutText">If you perfer paper, here is my resume</p>
                            <a href="/resume2.pdf" target="_blank">Click here</a>
                        </div>
                    </div>
                
                </div>
                <div id="contact" className="fourthslide">
                    <div className="contact">
                        <p className="contactme">Contact</p>
                    </div>
                    <div>
                        <div>
                           <a href="mailto:if.create702@gmail.com"><p className="email">if.create702@gmail.com</p></a> 
                           <p className="formtext">Thank you for taking the time to view my resume. If you would like to get in contact with me. You can either send me an email or fill out the form below and I will get back to you as soon as possible!</p>
                            <ContactUs />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}