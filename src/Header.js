import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EYLogo from "./assets/logo.png";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#2e2e38"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  img: {
    width: "46px",
    margin: theme.spacing(1)
  },
  tool: {
    display: "flex"
  },
  header: {
    alignSelf: "flex-end",
    marginBottom: "7px",
    flex: 1
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.tool}>
          <Avatar
            variant="square"
            alt="EY Logo"
            src={EYLogo}
            className={classes.square}
          />
          <div className={classes.header}>
            <Typography variant="subtitle1" className={classes.title}>
              Build a better resume
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
