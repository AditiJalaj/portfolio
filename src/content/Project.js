import React from 'react';
import {Link} from 'react-router-dom'; 

import weather from '../project-icons/weather-app-icon.png'
import todo from '../project-icons/to-dp-app.png'
import firebase from '../project-icons/firebase.png'

const Project=()=>{
    return(
        <div className="project">
        <h1>Projects</h1>
        <div className="project-indi glass">
        <a href="https://ajalaj-weather-application.herokuapp.com/" target="_blank"><img src={weather} className="project-photo"></img></a>
        <p>Weather app that makes API calls to mapbox.com & weatherstack.com for user entered input.</p>
        </div>
        <br></br>
        <div className="project-indi glass">
        <a href="https://frosty-boyd-f33901.netlify.app/" target="_blank"><img src={todo} className="project-photo"></img></a>
        <p>ReactJs app to help you pick what to do.</p>
        </div>
        <br></br>
        <div className="project-indi glass">
        <a href="https://to-do-app-e2e99.web.app/" target="_blank"><img src={firebase} className="project-photo"></img></a>
        <p>A ReactJS To-do App with Firebase Authentication</p>
        </div>

       </div>
        
    )
}

export default Project