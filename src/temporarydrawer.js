import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" style={{textDecoration: "none", color:"black"}}>
          <ListItem button key="Página Inicial">
            <ListItemIcon><FiberManualRecordIcon/></ListItemIcon>
            <ListItemText primary="Página Inicial" />
          </ListItem>
        </Link>

        <Link to="/PSCIP" style={{textDecoration: "none", color:"black"}}>
          <ListItem button key="Projeto de Segurança Contra Incêndio">
            <ListItemIcon><FiberManualRecordIcon/></ListItemIcon>
            <ListItemText primary="Projeto de Segurança Contra Incêndio" />
          </ListItem>
        </Link>
          
        <Link to="/contato" style={{textDecoration: "none", color:"black"}}>
          <ListItem button key="Contato">
            <ListItemIcon><FiberManualRecordIcon/></ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItem>
        </Link>


      </List>
    </div>
  );
const anchor = "left"
  return (
    <div>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
          <MenuIcon/>
        </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
      
    </div>
  );
}