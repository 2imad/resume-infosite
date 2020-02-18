import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Divider } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  banner: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    textAlign: "center",
    backgroundColor: "#F6F6FA",
    position: "relative"
  },
  p: {
    color: "#2e2e38",
    fontWeight: "300",
    paddingBottom: "1rem",
    [theme.breakpoints.down('sm')]:{
      fontSize:'1.7rem'
    }
  },
  sub:{
    color: "#2e2e38",
    fontWeight: "300",
    paddingBottom: "1rem",
    maxWidth:"50%",
    margin:"0 auto"
  },
  icon: {
    fontSize: "4.1875rem",
    color: "#2e2e38"
  },
  divider: {
    marginBottom: "2rem"
  },
  outerGrid: {
    paddingTop: "2rem"
  }
}));
const DividerApp = props => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.outerGrid} container>
        <Grid item xs={12}>
          <div className={classes.banner}>
            <Typography className={classes.p} component="h4" variant="h4">
              {props.title}
            </Typography>
            <Typography className={classes.sub} >
              {props.sub}
            </Typography>
            <KeyboardArrowDown className={classes.icon} fontSize="large" />
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </>
  );
};
export default DividerApp;
