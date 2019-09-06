import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function NewTransportPage() {
  const classes = useStyles();

  return (
    <div>
    	<AppBar position="static">
    		<Toolbar>
    			<Typography variant="h6" >New vehicle</Typography>
    		</Toolbar>
    	</AppBar>
	    <form >
		    <TextField
		        id="transport-name"
		        label="Name"
		        defaultValue=""
		        margin="normal"
		        className={classes.textField}
		    />
		    <br />
		    <TextField
		        id="transport-engine"
		        label="Engine"
		        defaultValue=""
		        margin="normal"
		        className={classes.textField}
		    />
	    	<br />
	    	<TextField
		        id="mileage"
		        label="Mileage"
		        defaultValue=""
		        margin="normal"
		        className={classes.textField}
		    />
	    	<br />
	    	<Button
			  variant="outlined"
			  component="label"
			  size="small"
			  style={{ margin: "10px" }}
			>
			  Upload image
			  <input
			    type="file"
			    style={{ display: "none" }}
			  />
			</Button>
			<br />
			<Button variant="contained" color="primary" style={{ margin: "10px", marginLeft: "70px" }}>
	          Add
	        </Button>
	        <br />
	    	<Link to="/">Return to Home</Link>
	    </form>    	
    </div>

  );
}

export default NewTransportPage;