import React from "react";
import Sidebar from "../../shared/components/sidebar/Index";
import Body from "../Body/Index";
import "./Player.css";
import Footer from "../../shared/components/footer/Index";
import { Route, Switch } from "react-router-dom";
import Library from "../Library/Index";
import ArtistPage from "../ArtistDetail/Index";
import PlaylistDetails from "../PlaylistDetails/Index";

function Player() {
  const mytoken = localStorage.getItem("accessToken");

  return (
    <>
      <div className="player">
        <div className="player_body">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/search" component={Body} />
            <Route exact={false} path="/library" component={Library} />
            <Route exact path="/ArtistDetail/:id" component={ArtistPage} />
            <Route
              exact={false}
              path="/PlaylistDetails/:id"
              component={PlaylistDetails}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Player;

/* data layer Compnents of App */

/*      __APP____
       |         |
      Player     Login
      |    |   
 Sideblar  Header
 |     |     |   
 
 if we need to get header then the user has to request to APP hen player then header. Directly we cant access . This problem solution is the (CONTEXT API or can use REDUX or FLUX) where we can fetch directly.

 In this data we push things and retrieve one by one as requirement
*/
