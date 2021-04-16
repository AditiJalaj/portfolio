import Social from '../components/Social'
import React from 'react'
import Home from './Home'
const About=(props)=>{
    return(
        <div>
        <div class="about">
        
        <div >
        <br></br>
        
        <p class="about-para glass">
        Currently a software engineer, I completed my Bachelors in Engineering in 2020.
        I'm a self-taught MERN stack Developer and would love to contribute to a fast-paced environment in Full stack development.
        
        </p>
        <div className="education glass">
            <br></br>
            <h4 className="p1">B.E Telecommunication Engineering</h4>
            <p className="p1">BMS College of Engineering</p>
            <p className="p1">August 2016-2020</p>
            <h4 className="p1">Schooling</h4>
            <p className="p1">Notre Dame Academy, Patna</p>
            <p className="p1">2002-2016</p>

            </div>
            
            <div class="sk s glass">ReactJs</div>
            <div class="sk s0 glass">Oracle Database</div>
            <div class="sk s1 glass">REST API</div>
            <div class="sk s2 glass">Bash Scripting</div>
            <div class="sk s3 glass">MongoDB</div>
            <div class="sk s4 glass">HTML/CSS</div>
            <div class="sk s5 glass">Python</div>
            <div class="sk s6 glass">Testing</div>
        </div>
        
        </div>
        <div>
        <Social/>
        </div>
        </div>
    )
}

export default About