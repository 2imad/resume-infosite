import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "@material-ui/icons";

export const useDashboardStyles = makeStyles(theme => ({
  icon: {
    fontSize: 94
  },
  title: {
    textAlign: "center",
    fontWeight: 300
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    backgroundColor: "#2E2E38",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1,

    color: "#fff"
  },
  iconHolder: {
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const SingleCard = ({ data }) => {
  const classes = useDashboardStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <div className={classes.iconHolder}>{data.icon}</div>
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            className={classes.title}
            variant="h5"
            component="h2"
          >
            {data.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleCard;
