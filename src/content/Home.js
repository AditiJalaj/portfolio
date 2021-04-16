import React from 'react'

import ReactTypingEffect from 'react-typing-effect';
import '../App.css';
import Routers from '../Routers'
import Social from '../components/Social'
const Home=()=>{
  return(
    <div>
    <div className="home">
    <h1>Aditi Jalaj</h1>
    <ReactTypingEffect className="typing-effect"
     staticText="A"
     text={["Full-stack Developer.","Software Engineer.","Photography Enthusiast.","Learner.","Spotify-buff."]}
     speed={40}
     eraseSpeed={60}
     
     />
    </div>
    <Social/>
    </div>
  )
}
export default Home