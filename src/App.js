import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./Banner";
import CardList from "./CardList";
import VideoCard from "./VideoCard";
import { CssBaseline } from "@material-ui/core";
import DividerApp from "./Divider";
const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <MainFeaturedPost />
        <DividerApp title={"Discover The features!"} />
        <CardList />
        <DividerApp title={"View Demo"} />
        <VideoCard />
      </Container>
    </React.Fragment>
  );
};

export default App;
