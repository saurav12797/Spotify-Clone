import React from "react";
import "./Library.css";
import Nav from "../Library/Nav/Index";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Library from "../Library/Nav/Index";
import Artist from "../Artist/Index";

function Index() {
  return (
    <div className="library">
      <Nav />

      <Switch>
        <Route exact={false} path="/library/artist" component={Artist} />
      </Switch>
    </div>
  );
}

export default Index;
