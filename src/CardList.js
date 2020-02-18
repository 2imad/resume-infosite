import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "@material-ui/icons";
import SingleCard from "./Card";
import AdvancedCard from './advancedCard'
import { CardsData } from "./cardsData";

const CardList = () => {
  return (
    <Grid style={{paddingBottom:"3rem"}} container spacing={2}>
      {CardsData.map((card, index) => {
        return <AdvancedCard key={index} data={card} />;
      })}
    </Grid>
  );
};

export default CardList;
