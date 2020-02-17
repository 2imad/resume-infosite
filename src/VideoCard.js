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
    justifyContent: "center"
  },
  container: {
    paddingBottom: "2rem"
  }
}));

const VideoCard = () => {
  const classes = useDashboardStyles();
  return (
    <Grid className={classes.container} container>
      <Grid item xs={12} sm={12} md={12}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <CardMedia justifyContent="center">
              <ReactPlayer url="https://youtu.be/YdyhaE6ltWw " />
            </CardMedia>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VideoCard;
