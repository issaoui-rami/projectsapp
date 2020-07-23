
import React from 'react';
import './navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import CollectionsIcon from '@material-ui/icons/Collections';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },

});

export default function Navigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const menuItems = [
    {
      listIcon: <DashboardIcon />,
      listText: "Dashboard"
    },
    {
      listIcon: <CollectionsIcon />,
      listText: "Projects"
    },
    {
      listIcon: <GroupIcon />,
      listText: "Members"
    }
  ];
  const sideList = side => (

    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <Divider />
    <List>
      {menuItems.map((listItem, key) => (
        <ListItem button key={key}>
          <ListItemIcon>{listItem.listIcon}</ListItemIcon>
          <ListItemText primary={listItem.listText} />
        </ListItem>
      ))}
    </List>

    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          <Button onClick={toggleDrawer('left', true)}><MenuIcon className="menuColor"/></Button>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Projects App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>


  );
}
