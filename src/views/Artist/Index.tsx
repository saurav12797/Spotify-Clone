import React, { useEffect } from "react";
import "./artist.css";
import Card from "./Card";
import Artist from "./Artist";
import Body from "../Body/Index";
import { Link } from "react-router-dom";
import ArtistPage from "../ArtistDetail/Index";
import { Route, Switch } from "react-router-dom";

function ArtistCard() {
  return (
    <div>
      {/*  {Artist.map((myartist) => (
        <Card p={myartist.p} img={myartist.img}>
          <Link to="/ArtistDetail/4YRxDV8wJFPHPTeXepOstw">
            <div className="artist">{myartist}</div>
          </Link>
        </Card>
      ))} */}

      <Link to="/ArtistDetail/0oOet2f43PA68X5RxKobEy">
        <Card p={Artist[0].p} img={Artist[0].img} />
      </Link>
      <Link to="/ArtistDetail/3eDT9fwXKuHWFvgZaaYC5v">
        <Card p={Artist[2].p} img={Artist[2].img} />
      </Link>
      <Link to="/ArtistDetail/3OLGltG8UPIea8sA4w0yg0">
        <Card p={Artist[3].p} img={Artist[3].img} />
      </Link>
    </div>
  );
}

export default ArtistCard;
