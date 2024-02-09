import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import imagine1 from "../images/screenshot (3).png";
import last from"../images/last.png";
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css"; 
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
import "../css/bootstrap.min.css";
   
const Navbar=()=>{  
    return(    
      <nav class="navbar navbar-expand-sm">
      <div class="container">
        <a class="navbar-brand" href="javascript:void(0)">
        <img src={imagine1} alt="imagine" className="imagine1"></img>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">THISMONTH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SKIN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">HAIR</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">BATH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">SALE</a>
            </li>
            <li className="nav-item">
              <button className="vat">LogIn </button>
           </li>
          </ul>
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default Navbar;
