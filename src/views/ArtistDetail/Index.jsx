import React, { useEffect, useState, useRef } from "react";
import "./ArtistDetail.css";

import { useParams } from "react-router-dom";
import ArtistService from "../../services/ArtistService/artist.Service";
import TrackService from "../../services/TrackService/track.Service";
import FollowService from "../../services/FollowArtist/followArtist.service";
import PlayerService from "../../services/PlayerService/player.Service";
import IconButton from "@material-ui/core/IconButton";
import TrackList from "../TrackList/Index";

import { useSelector, useDispatch } from "react-redux";

function ArtistDetail() {
  const { id } = useParams();

  const { ArtistFetchData, currData } = ArtistService();
  const { TrackFetchData, trackList } = TrackService();
  const {
    FollowFetchData,
    UnfollowFetchData,
    ShowFollowedFetchData,
    btnValue,
    followedData,
  } = FollowService();
  const { playerData, PlayerFetchData, Play_PauseFetchData, playPauseData } =
    PlayerService();
  useEffect(() => {
    ArtistFetchData(id);
    TrackFetchData(id);
    /*  ShowFollowedFetchData(); */
  }, []);

  /*   console.log("this is my followed artits", followedData); */
  /*  console.log("this is my Artist object", currData); */
  /*   console.log("this is my Track object", trackData); 
  
  console.log("this is my Player object", playerData); */
  /*  console.log("this is My current available device", playPauseData);  */
  /* console.log("this is my Follow object verification", followData); */
  /*   const [currBtn, setCurrBtn] = useState("Follow"); */
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTrack, setCurrTrack] = useState();

  const followUnfollow = () => {
    if (btnValue == "Follow") {
      FollowFetchData(id);
    } else UnfollowFetchData(id);
  };

  return (
    <>
      <div className="artistpage">
        <h1>{currData.name}</h1>
        <img
          className="imgbanner"
          src={currData?.images?.length ? currData?.images[2]?.url : ""}
        />

        <div className="songs">
          <IconButton color="primary"></IconButton>
          <button type="button" className="btn" onClick={followUnfollow}>
            {btnValue}
          </button>

          <h2>
            Tracks <span className="popularity_text">Popularity</span>{" "}
            <span className="duration_text">Duration</span>
          </h2>
          <br />
          <TrackList trackList={trackList} />
        </div>
      </div>
    </>
  );
}

export default ArtistDetail;
