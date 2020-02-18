import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

export const useDashboardStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#C4C4CD",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]:{
      padding:'0px'
    }
  },
  container: {
    paddingBottom: "2rem"
  },
  reactPlayer:{
    [theme.breakpoints.down('sm')]:{
      width:"100%",
      height:"100%",
      maxWidth:"100%"
      
    }
  },
  playerWrapper:{
    position:"relative",
    paddingTop:"56,25%",
    [theme.breakpoints.down('sm')]:{
      maxWidth:"100%"

    }
  }
}));

const VideoCard = () => {
  const classes = useDashboardStyles();
  return (
    <Grid className={classes.container} container>
      <Grid item xs={12} sm={12} md={12}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <CardMedia  className={classes.playerWrapper}>
              <ReactPlayer className={classes.reactPlayer} url="https://youtu.be/YdyhaE6ltWw" controls/>
            </CardMedia>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VideoCard;
