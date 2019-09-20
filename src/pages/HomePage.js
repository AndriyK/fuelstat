import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
  	<nav className="navbar navbar-dark bg-primary">
	  <span className="navbar-brand">My vehicles</span>
	  <div className="dropdown">
	  	<a className="btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    		<i className="material-icons">more_vert</i>
  		</a>
		<div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuButton">
			<Link className="dropdown-item" to="/new-transport">Add new vehicle</Link>
			<Link className="dropdown-item" to="/">Import</Link>
			<Link className="dropdown-item" to="/">Export</Link>
			<Link className="dropdown-item" to="/">Settings</Link>
		</div>
      </div>
	</nav>
  );
}

export default HomePage;