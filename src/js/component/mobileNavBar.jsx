import React from "react";

const MovileMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
  			<div className="container-fluid">
    			<a className="navbar-brand text-light p-3" href="#">Start Bootstrap</a>
    		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      			    <span className="navbar-toggler-icon fa-solid fa-bars" style={{color: "#fcfcfc"}}></span>
    		    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="1">
          				    <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        			    </li>
                        <li className="nav-item" id="2">
          				    <a className="nav-link text-light disabled" href="#" aria-disabled="true">About</a>
        			    </li>
                        <li className="nav-item" id="3">
          				    <a className="nav-link text-light disabled" href="#" aria-disabled="true">Services</a>
        			    </li>
                        <li className="nav-item" id="4">
          				    <a className="nav-link text-light disabled" aria-disabled="true">Contact</a>
        			    </li>
                    </ul>
    		    </div>
            </div>
        </nav>
    )
}

export default MovileMenu;