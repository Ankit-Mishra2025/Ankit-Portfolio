import React from 'react'
import "./Contact.css"
import image from "../../assets/Contact.png"
const Contact = () => {
  return (
    <>
    <div id="contact">
<div className="leftcontact">
<img src={image}/>
  <h2>Let"s Work and Collaborate Together...</h2>



</div>
<div className="rightcontact">
<form action='https://formspree.io/f/mwpkaeob' method='POST'>
<input type="text" name="Username" placeholder='Name'/>
<input type="email" Email="Email I'D" placeholder='Email'/>

<textarea name="message" id="textarea" placeholder='Message Me'/>

<input type="submit" id="btn" value="Submit"/>


</form>




</div>


    </div>
    
    
    
    </>
  )
}

export default Contact
