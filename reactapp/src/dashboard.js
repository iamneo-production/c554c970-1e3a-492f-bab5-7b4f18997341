import React from 'react'
import './dash.css';
import './Login';
import './home';
import './accman';
import './claim';
import './postdetails';
import {Link} from 'react-router-dom';
function dashboard() {
  return (
    <div>
        <header>
    
            <div class="logosec">
                <div class="logo">Safewheels</div>
      
            </div>
            <div class="message">
            <Link to="/profile"><img src=
    "https://cdn-icons-png.flaticon.com/512/6915/6915987.png"
                    class="icn"
                    alt=""></img></Link>
            </div>
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            
                            <h3> Dashboard</h3>
                        </div>
                        <Link to="/postdetails"><div class="nav-option option5">
                            <h3>Your Details</h3></div></Link>
                        <Link to="/policy"><div class="nav-option option5">
                            <h3> Policy </h3>
                        </div></Link>
                        <Link to="/policycomp"><div class="nav-option option5">
                            <h3> Compare And Buy</h3>
                        </div></Link>
                        <Link to="/claim1"><div class="nav-option option4">
                            <h3> Claims</h3>
                        </div></Link>
                        <Link to="/renewal"><div class="nav-option logout">
                            <h3>Renewal</h3>
                        </div></Link>
                        <Link to="/accman"><div class="nav-option option6">
                            <h3>Account Management</h3>
                            </div></Link>
                            <Link to="/"> <div class="nav-option logout">
                            <h3>Logout</h3>
                        </div></Link>
                        </div>
                </nav>
            </div>
            <div class="main">
    
                <div class="searchbar2">
                    <input type="text"
                        name=""
                        id=""
                        placeholder="Search"></input>
                    <div class="searchbtn">
                    <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                            class="icn srchicn"
                            alt="search-button"></img>
                    </div>
                </div>
                <div class="report-body">
                    <div class="box-container">
                    <div class="box box1">
                        <div class="text">
                        <h6 class="topic-heading">5.89 crore</h6>
                            <h2 class="topic">Registerd Customer</h2>
                        </div>
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                       <br></br>
                        <h2 class="topic-heading">50+ </h2>
                            <h2 class="topic">Insurance Partners</h2>
                        </div>
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                        <br></br>
                   <h2 class="topic-heading">2.42+</h2>
                            <h2 class="topic">Policies Sold</h2>
                        </div>
                    </div>
                    <div class="box box4">
                        <div class="text">
                        <br></br>
                        <h2 class="topic-heading">Highly</h2>
                            <h2 class="topic">Trusted Members</h2>
                        </div>
                        </div>
                        <div class="report-header">
                        
                     <center><p>We are one of India's largest digital insurance marketplace</p></center>
                    </div>
                        
                    
                </div>
                
    
                        </div>
                    </div>
                </div>
            </div>
        
)
}

export default dashboard