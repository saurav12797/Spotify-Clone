import React, { useEffect, useState } from "react";
import "./ArtistDetail.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import Artist from "../Artist/Artist";
import axiosInstance from "../../interceptor/axiosInstance";
import Fetch from "../../services/ArtistService/artist.Service";
import { useParams } from "react-router-dom";
import ArtistService from "../../services/ArtistService/artist.Service";
import TrackService from "../../services/TrackService/track.Service";
function ArtistDetail() {
  const { id } = useParams();
  console.log("here is my id", id);
  const { ArtistFetchData, currData } = ArtistService();
  const { TrackFetchData, trackData } = TrackService();

  useEffect(() => {
    ArtistFetchData(id);
    TrackFetchData(id);
  }, []);

  useEffect(() => {
    TrackFetchData(id);
  }, []);

  console.log("this is my Artist object", currData);
  console.log("this is my Track object", trackData);

  return (
    <>
      <div className="artistpage">
        <h1>{currData.name}</h1>
        <img
          className="imgbanner"
          src={currData?.images?.length ? currData?.images[0]?.url : ""}
        />

        <div className="songs">
          <PlayCircleFilledIcon fontSize="large" className="icon" />
          <button className="btn">Following</button>
          <h2>Popular</h2>

          <div className="songlist">
            <ul>
              <li>
                <img
                  className="imgsong"
                  src="https://i.scdn.co/image/ab67616d00001e02eaa6b4bfb5954ee5a5a8ce9e"
                />
              </li>

              <p className="songName">
                {/*  {trackData?.tracks?.length ? tractData?.tracks[0]?.name : ""} */}
              </p>
              <li>
                {" "}
                <p className="downloads">{currData?.followers?.total}</p>
              </li>
              <li>
                {" "}
                <p className="duration">4:54</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistDetail;
