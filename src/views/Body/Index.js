import React from "react";
import "./Body.css";
import Header from "../../shared/components/header/Index";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Switch, Route } from "react-router-dom";
import Library from "./Library/Index";
import Mycard from "./Mycard";
import Prodcast from "../Prodcast";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <h2>Top Prodcast of 2020</h2>
        <Mycard p={Prodcast[0].p} img={Prodcast[0].img} />
        <Mycard p={Prodcast[1].p} img={Prodcast[1].img} />
        <Mycard p={Prodcast[2].p} img={Prodcast[2].img} />
        <Mycard p={Prodcast[3].p} img={Prodcast[3].img} />
        <Switch>
          <Route path="/"></Route>
          <Route path="/Search"></Route>
          <Route path="/Library" component={Library}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default Body;
