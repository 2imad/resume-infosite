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
        <DividerApp sub={"The demo gives you a view on some of the features that have already been implemented. The current FSO template is used but multiple templates can be implemented"} title={"Check out the Demo !"} />
        <VideoCard />
        <DividerApp sub={"Below you find the different features of the tool and the great benefits they are to you!"} title={"Discover The features!"} />
        <CardList />
      </Container>
    </React.Fragment>
  );
};

export default App;
