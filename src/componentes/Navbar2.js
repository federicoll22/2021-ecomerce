import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Logo from "../componentes/nombre.png";
import { Badge, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar:{
      backgroundColor: "#424242",
      boxShadow:"none",
    },
    grow:{
      flexGrow: 1,
    },
    button:{
      marginLeft: theme.spacing(2),
      position:"justify",
  },
    image: {
      marginRight: "3px",
      height : "6rem",
    },
}));

export default function Navbar2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={Logo} className={classes.image} alt="LOGO"/>
          </IconButton>
          <div className ={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            Nosotros
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
                <strong>Contactos</strong>
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="outlined">
                <strong>Productos</strong>
            </Button>
          </div>
          <div className={classes.button}>
          <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon fontSize ="large"color="black"/>
                </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
