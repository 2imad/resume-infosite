import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import bgImg from "./assets/change_banner.jpg";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: "100px",
      paddingRight: 0
    }
  },
  description: {
    padding: "1em 0em 2em",
    fontWeight: "300",
    [theme.breakpoints.down('sm')]:{
      fontSize:'16px'
    }
  },
  head:{
    [theme.breakpoints.down('sm')]:{
      fontSize:'2rem'
    }
  }
}));
export default function MainFeaturedPost(props) {
  const classes = useStyles();

  const post = {
    image: "./assets/change_banner.jpg",
    imageText: "Lorem",
    title: "EY Change Awards:",
    sub:"The CV Builder",
    description:
      "The CV Builder is a tool to help you build a better resume. Save all your credentials in a database, search for profiles and create a formatted CV in no time!"
  };

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              className={classes.head}
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              className={classes.head} 
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.sub}
            </Typography>
            <Typography
              className={classes.description}
              variant="h5"
              color="inherit"
              paragraph
            >
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
