import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HomePage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
       	<AppBar position="static">
    		<Toolbar>
    			<Typography variant="h6" className={classes.title}>My vehicles</Typography>
		    	<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} className={classes.menuButton} >
	            	<MoreVertIcon />
	            </IconButton>
		      	<Menu
			        id="simple-menu"
			        anchorEl={anchorEl}
			        keepMounted
			        open={Boolean(anchorEl)}
			        onClose={handleClose}
			      >
			        <MenuItem onClick={handleClose}  component={Link} to="/new-transport">
			        	Add new vehicle
			        	
			        </MenuItem>
			        <MenuItem onClick={handleClose}>Import</MenuItem>
			        <MenuItem onClick={handleClose}>Export</MenuItem>
			        <MenuItem onClick={handleClose}>Settings</MenuItem>
		        </Menu>
	        </Toolbar>
    	</AppBar>
    </div>
  );
}

export default HomePage;