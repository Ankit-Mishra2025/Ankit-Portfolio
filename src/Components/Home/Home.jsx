import React from 'react'
import "./Home.css"
import ankit from "../../assets/01.png"
import TypingEffect from "react-typing-effect"
import { Button } from 'react-scroll'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Home = () => {
useGSAP(()=>{
let tl1=gsap.timeline();
tl1.from(".line1",{
y:80,
opacity:0,
duration:1,
})


tl1.from(".line2",{
y:80,
opacity:0,
duration:1,


})

tl1.from(".line3",{
  y:80,
  opacity:0,
  duration:1,
  
  
  })

 gsap.from(".righthome img",{
  x:200,
  opacity:0,
  duration:1,

 })



})



  return (
    <>
    <div id='home'>  
<div className="lefthome">
<div className="homedetails">
  <div className="line1">I'M</div>
  <div className="line2">ANKIT MISHRA</div>
  <div className="line3">
<TypingEffect text={["WEB DEVELOPER......","FREELANCER...."]}
speed={100}
eraseSpeed={50}
eraseDelay={1000}
typingDelay={500}
cursor='|'

/>


  </div>
  <button type="button">DOWNLOAD RESUME</button>
</div>



</div>
<div className="righthome">
  <img src={ankit}/>
</div>





    </div>
    
    
    
    
    </>
  )
}

export default Home
