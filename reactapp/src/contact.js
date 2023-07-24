import React from 'react'
import './contact.css';
import './home';
import {Link} from 'react-router-dom';
function contact() {
  return (
    <div>
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center><div class="contact">
      <br></br>
        <br></br>
        <br></br>
      <p>For more details contact:<br></br><br></br>
        Customer care:1930-890-672<br></br><br></br>
        Email:safewheels@gmail.com</p>
      </div></center>
      <div class="mine011">
      <Link to="/">
      <button>Back</button>
      </Link></div>
      </div>
      </div>
  )   
}

export default contact
