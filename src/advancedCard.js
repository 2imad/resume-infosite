import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link, ChevronRight,KeyboardArrowDown } from "@material-ui/icons";
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    
    minWidth:"100%",
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
    marginBottom:"2rem",
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  chevronHolder:{
      display:"flex",
      justifyContent:'center',

  },
  chev:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
 
}));

const AdvancedCard = ({data}) => {
    const matches = useMediaQuery('(min-width:600px)');
  const classes = useDashboardStyles();
  return (
      <Card raised={false} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={5} >
                <div className={classes.iconHolder}>{data.iconLeft}</div>
              <Typography
                gutterBottom
                className={classes.title}
                variant="h5"
                component="h2"
              >
                {data.textLeft}
              </Typography>
            </Grid>
            <Grid className={classes.chev} item xs={12} sm={2}>
                <div className={classes.chevronHolder}>
                    {matches?<ChevronRight style={{fontSize:"4.5rem" ,color: "#ffe600"}} />:<KeyboardArrowDown style={{fontSize:"4.5rem" ,color: "#ffe600"}} />
                    }
                </div>
            </Grid>
            <Grid item xs={12} sm={5}>
                <div className={classes.iconHolder}>{data.iconRight}</div>
              <Typography
                gutterBottom
                className={classes.title}
                variant="h5"
                component="h2"
                >
                {data.textRight}
              </Typography>
                </Grid>
            </Grid>
          </CardContent>
      </Card>
  );
};

export default AdvancedCard;
