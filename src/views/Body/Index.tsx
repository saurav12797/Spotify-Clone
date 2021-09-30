import React, { useEffect } from "react";
import "./Body.css";
import Header from "../../shared/components/header/Index";

import { Switch, Route } from "react-router-dom";
import Library from "../Library/Index";
import Mycard from "./Mycard";
import Prodcast from "../Prodcast";
import LatestReleaseService from "../../services/LatestReleaseService/latestRelease.service";

function Body() {
  const { latestData, LatestReleaseFetchData } = LatestReleaseService();
  useEffect(() => {
    LatestReleaseFetchData();
  }, []);

  console.log("this is my latest Prodcast data", latestData);
  return (
    <div className="body">
      <Header />
      <div className="body_info">
        <h2>Top Release of 2021</h2>
        {/* 
        <Mycard className="prodcastCard" p={`sk`} img={`mk`} /> */}

        {latestData.map((myprodcast: any) => (
          <Mycard
            key={myprodcast?.id}
            className="prodcastCard"
            p={myprodcast?.name}
            img={myprodcast?.images?.length ? myprodcast?.images[0]?.url : ""}
          />
        ))}
        {/* 
        <Mycard p={Prodcast[0].p} img={Prodcast[0].img} />
        <Mycard p={Prodcast[1].p} img={Prodcast[1].img} />
        <Mycard p={Prodcast[2].p} img={Prodcast[2].img} />
        <Mycard p={Prodcast[3].p} img={Prodcast[3].img} /> */}

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
