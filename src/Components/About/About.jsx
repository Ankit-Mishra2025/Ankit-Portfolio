import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import Frontend from "../../assets/Frontened.png"
import webdevelopment from "../../assets/webdev.png"
import Python from "../../assets/Python.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const About = () => {
useGSAP(()=>{
gsap.from(".circle",{
x:-100,
opacity:0,
duration:1,
ScrollTrigger:{
  trigger:".circle",
}



})



})



  return (
   <>
   
   <div id="about">
<div className="leftabout">
<div className="circleline">
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
  
</div>

<div className="aboutdetails">
  <div className="personalinfo">
    <h1>Personal Info</h1>
<ul>
<li>
  <span>Name</span>: ANKIT MISHRA
</li>

<li>
  <span>AGE</span>: 22 YEARS
</li>
<li>
  <span>GENDER</span>: MALE
</li>


<li>
  <span>LANGUAGE KNOWN</span>: HINDI & ENGLISH
</li>


</ul>

  </div>

  <div className="education">
    <h1>Education</h1>
<ul>
<li>
  <span>COURSE</span>: DIPLOMA
</li>

<li>
  <span>BARNCH</span>: INFORMATION TECHNOLOGY
</li>
<li>
  <span>CGPA</span>: 7.5
</li>


<li>
  <span>OTHER QUALIFICATIONS</span>: GRADUATED IN B.A(Bachelor of Arts)
</li>


</ul>

  </div>

  <div className="skill">
    <h1>Skills</h1>
<ul>
<li>
  HTML5
</li>

<li>
CSS3
</li>
<li>
JAVA SCRIPT
</li>


<li>
  REACT.JS
</li>

<li>
  BASIC PYTHON
</li>


</ul>

  </div>

</div>






</div>
<div className="rightabout">

<Card title="FRONT-END DEVELOPER"  image={Frontend} />
<Card title="WEB DEVELOPMENT" image={webdevelopment} />
<Card title="PYTHON"  image={Python}/>
</div>



   </div>
   
   
   </>
  )
}

export default About
