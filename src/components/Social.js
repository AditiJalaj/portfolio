import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faGithub,
    faSpotify
  } from "@fortawesome/free-brands-svg-icons";
  
const Social=()=>{
    return(
        <div class="social-container glass">
        <a href="https://github.com/AditiJalaj/"
        target="_blank"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/aditi-jalaj-5b921612a/"
        target="_blank"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
         </a>
        <a href="https://twitter.com/AditiJalaj" 
        target="_blank"
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
         <a href="https://open.spotify.com/user/dlxulvzagv4hmf2ar6babaede?si=ZLHVws-FQaiCpDeUBKkdmA&nd=1"
         target="_blank"
             className="spotify social">
          <FontAwesomeIcon icon={faSpotify} size="2x" />
        </a>

        </div>
    )

}


export default Social