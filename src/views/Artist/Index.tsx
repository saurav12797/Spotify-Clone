import React, { useEffect } from "react";
import "./artist.css";
import Card from "./Card";

import { Link } from "react-router-dom";

import ArtistListService from "../../services/ArtistListService/artistList.service";

function ArtistCard() {
  const { artistList, ArtistListFetchData } = ArtistListService();
  useEffect(() => {
    ArtistListFetchData();
  }, []);

  console.log("here is my artist lists", artistList);
  /* {currData?.images?.length ? currData?.images[0]?.url : ""} */
  return (
    <div>
      {artistList.map((myartist: any) => (
        <Link key={myartist.id} to={`/ArtistDetail/${myartist.id}`}>
          <Card
            p={myartist?.name}
            img={myartist?.images?.length ? myartist?.images[1]?.url : ""}
          ></Card>
        </Link>
      ))}
      {/* 
      <Link to="/ArtistDetail/0oOet2f43PA68X5RxKobEy">
        <Card p={Artist[0].p} img={Artist[0].img} />
      </Link>
      <Link to="/ArtistDetail/3eDT9fwXKuHWFvgZaaYC5v">
        <Card p={Artist[2].p} img={Artist[2].img} />
      </Link>
      <Link to="/ArtistDetail/3OLGltG8UPIea8sA4w0yg0">
        <Card p={Artist[3].p} img={Artist[3].img} />
      </Link> */}
    </div>
  );
}

export default ArtistCard;
