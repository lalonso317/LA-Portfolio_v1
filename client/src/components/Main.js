import React, {useState} from 'react'
import Icon from '../lib/Icon'
import NBA from "../Assets/nbamemory.png"
import ETSY from "../Assets/estyclone.png"
import ORDERUP from "../Assets/OrderUp.png"
import GREYSCALE from "../Assets/greyscaleComputer.jpg"


export default function Main(props){
    const [nba, setNBA] = useState(false)
    const [etsy, setETSY] = useState(false)
    const [order, setORDER] = useState(false)

    const handleToggle = () =>{
        setNBA(true)
        setETSY(false)
        setORDER(false)
    }
    const handleToggleTwo = () =>{
        setETSY(true)
        setORDER(false)
        setNBA(false)
        
    }
    const handleToggleThree = () =>{
        setORDER(true)
        setNBA(false)
        setETSY(false)
    }

    return(
        <div className="app">
            <header>
                <div className="headbar">
                    <div className="navbar">
                       <a href="#home"><p className="h">Home</p></a> 
                        <a href="#projects"><p className="h">Projects</p></a>
                         
                        <a href="#contact"><p className="h">Contact</p></a>
                        <div className="icons">
                                <a className="link" href='https://www.linkedin.com/in/luis-alonso-b62a38194/' target="_blank" rel="noreferrer"><Icon icon="linkedin"></Icon></a>
                                <a className="github" href='https://github.com/lalonso317' target="_blank" rel="noreferrer"><Icon icon="github"></Icon></a>
                                <a className="email" href="mailto:if.create702@gmail.com" ><Icon icon="envelope-square"></Icon></a>
                            </div>
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
                   
                        <div className="languages">
                            <ul className="list">
                                <li className="li">React</li>
                                <li className="li">JavaScript</li>
                                <li className="li">HTML5 & CSS</li>
                                <li className="li">Node.js</li>
                                <li className="li">Express</li>
                                <li className="li">MySQL</li>
                                <li className="li">MongoDB</li>
                            </ul>
                        </div>
                        <div className="screenshots">
                            <div className="projectLabels">
                            <p className="project">Projects</p>
                                <div className="nbadiv">
                                    <label 
                                    className="projectLabel"
                                    id ={!nba ? "": "activeLabel"}
                                    onClick={handleToggle}
                                    >NBA Memory Game</label>
                                </div>
                                <div className="nbadiv">
                                    <label 
                                    className="projectLabel"
                                    id={!etsy ? "" : "activeLabel"}
                                    onClick={handleToggleTwo}
                                    >Etsy Clone</label>
                                </div>
                                <div className="nbadiv">
                                    <label 
                                    className="projectLabel"
                                    id={!order ? "":"activeLabel"}
                                    onClick={handleToggleThree}
                                    >OrderUp.</label>
                                </div>
                                </div>
                                <div className="liveProjects">
                                    <div id={!nba ? "notshown" : "show"} className="singleProject">
                                        <a className="projectA" href="https://nbamemorye.surge.sh/" target="_blank"><img className="shot" src={NBA}></img></a>
                                        <div className="projectDescription">
                                            <a className="projectGit" href="https://github.com/lalonso317/MemoryGame" target="_blank" rel="noreferrer"><Icon className="icon" icon="github"></Icon></a>
                                            <p>This is a NBA Memory game built with jQuery and JavaScript. This was a small weekend project, go click the image to play, or check out the code by click on the github icon.</p>
                                        </div>
                                    </div>
                                    <div id={!etsy ? "notshown" : "show"}  className="singleProject">
                                        <a className="projectA" href="https://estyclones.surge.sh/" target="_blank" rel="noreferrer"><img className="shot" src={ETSY}></img></a>
                                        <div className="projectDescription">
                                            <a className="projectGit" href="https://github.com/lalonso317/Create-Etsy-Search-Page" target="_blank" rel="noreferrer"><Icon className="icon"  icon="github"></Icon></a>
                                            <p>
                                                A Esty Clone, which was built with JavaScript, HTML5, and CSS. Has a amount of small functionality, however the styling is what stood out.
                                            </p>
                                        </div>
                                    </div>
                                    <div id={!order ? "notshown" : "show"} className="singleProject">
                                        <a className="projectA" href="https://github.com/lalonso317/RecipeBookMaster"><img className="shot" src={ORDERUP}></img></a>
                                        <div className="projectDescription">
                                            <a className="projectGit" href="https://github.com/lalonso317/RecipeBookMaster" target="_blank" rel="noreferrer"><Icon className="icon"  icon="github"></Icon></a>
                                            <p>
                                                OrderUp was the final project for my coding school. Working on this with 2 other team members, this was a functional recipe website. This included the ability to create, share, and save recipes.
                                                However, this is not a live website, but you can still checkout the github link.
                                            </p>
                                        </div>
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


// Images for differnt coding languages, libraries, and frameworks
{/* <img className="code" src={"/html5.png"} ></img>
<img className="code" src={"/css.png"}></img>
<img className="code" src={"/javascript.png"} ></img>
<img className="code" src={"/jquery.png"}></img>
<img className="code" src={"/react.png"}></img>
<img className="code" src={"/nodejs.png"}></img>
<img className="codes" src={"/mongodb-logo.png"}></img>
<img className="codes" src={"/mysql=logo.png"}></img> */}

// NBA Memory
{/* <div className="singleProject">
<a className="projectA" href="https://nbamemorye.surge.sh/" target="_blank"><img className="shot" src={NBA}></img></a>
<a className="projectGit" href="https://github.com/lalonso317/MemoryGame" target="_blank"><Icon className="icon" icon="github"></Icon></a>
</div> */}

// Etsy Clone
{/* <div className="singleProject">
<a className="projectA" href="https://estyclones.surge.sh/" target="_blank"><img className="shot" src={ETSY}></img></a>
<a className="projectGit" href="https://github.com/lalonso317/Create-Etsy-Search-Page" target="_blank"><Icon className="icon"  icon="github"></Icon></a>
</div> */}

// Order Up.
{/* <div className="singleProject">
<a className="projectA" href="#"><img className="shot" src={ORDERUP}></img></a>
<a className="projectGit" href="https://github.com/lalonso317/RecipeBookMaster" target="_blank"><Icon className="icon"  icon="github"></Icon></a>
</div> */}

