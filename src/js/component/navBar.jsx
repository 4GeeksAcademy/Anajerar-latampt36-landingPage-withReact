import React from "react";

const Menu = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body" >
  			<div className="container-fluid">
    			<span className="navbar-brand text-light p-3" href="#">Start Bootstrap</span>
    			<div className="d-flex nav justify-content-end" id="navbarNav">
      				<a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        			<a className="nav-link text-light disabled" href="#">About</a>
        			<a className="nav-link text-light disabled" href="#">Services</a>
        			<a className="nav-link text-light disabled" aria-disabled="true">Contact</a>
        		</div>
  			</div>
		</nav>
    )
}

export default Menu


