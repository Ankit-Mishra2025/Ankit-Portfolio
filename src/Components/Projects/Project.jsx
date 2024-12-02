import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import digital from "../../assets/Digitalwatch.png"
import calc from "../../assets/Scientfic.png"
import movie from "../../assets/Movie.png"
import form from "../../assets/Form.png"
import resta from "../../assets/Resta.png"
import Contact from '../Contact/Contact'


const Project = ({title,image}) => {
  return (
  <>
  <div id="projects">
<h1>HERE IS MY LATEST WORK......|</h1>
  </div>
  <div className='slider'>
  <h1>{title}</h1>
  <img src={image}/>

  <Card title="SCIENTIFIC CALCULATOR" image={calc}/>
  <Card title="MOVIE WEBSITE"image={movie}/>
  <Card title="DIGITAL WATCH" image={digital}/>
  <Card title="LOGIN FORM" image={form}/>
  <Card title="MEAL WEBSITE" image={resta}/>
  

  </div>
 
 
  </>
  )
}

export default Project
