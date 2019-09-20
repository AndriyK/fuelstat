import React from 'react';
import { Link } from 'react-router-dom';

function NewTransportPage() {

  return (
    <div>
    	<nav className="navbar navbar-dark bg-primary">
		  <span className="navbar-brand">New vehicle</span>
		</nav>
		<form className="ml-2">
		  <div className="form-group">
		    <label for="name">Name</label>
		    <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter vehicle name" />
		  </div>
		  <div className="form-group">
		    <label for="engine">Engine</label>
		    <input type="text" className="form-control" id="engine" aria-describedby="name" placeholder="Enter engine" />
		  </div>
		  <div className="form-group">
		    <label for="miliage">Miliage</label>
		    <input type="text" className="form-control" id="miliage" aria-describedby="name" placeholder="Enter current miliage" />
		  </div>
		  <div className="custom-file">
		    <input type="file" className="custom-file-input" id="image" />
		    <label className="custom-file-label" for="image">Choose vehicle picture</label>
		  </div>
		  <button type="submit" class="btn btn-primary">Add</button>
		</form>
	   	<Link to="/">Return to Home</Link>
    </div>

  );
}

export default NewTransportPage;