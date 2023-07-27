import React from 'react'
import './renewal.css';
import {Link} from 'react-router-dom';
function renewal() {
  return (
    <div>
        <center><div class="head">
       <h1>Select from the below listed options:</h1></div></center>
       <Link to="/payment"><center><div class="radio1">
      <input type="radio" id="dewey" name="drone" value="dewey"></input>
      <label for="dewey">Renew your policy</label>
    </div></center></Link>

    <Link to="/policycomp"><center><div class="radio2">
      <input type="radio" id="louie" name="drone" value="louie"></input>
      <label for="louie">Buy new policy</label>
    </div></center></Link>
    <div class="mine5">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>

  )
}

export default renewal
