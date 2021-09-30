import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import moment from "moment";

import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import playerContainer from "../../../store/container/PlayerContainer";

function Footer(props) {
  const { isPlaying, currentTrack, setCurrentTrack, setIsPlaying } = props;

  const [currentTime, setCurrentTime] = useState("0:00");
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;
    console.log("audio", audio);
    console.log("this is is playing", isPlaying);
    isPlaying ? audio.play() : audio.pause();
  }, [currentTrack, isPlaying]);

  return (
    <div className="footer">
      <div className="footer_center">
        <audio ref={audioRef} src={currentTrack?.preview_url}></audio>
        <button
          className="trackbtn footerbtn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div className={isPlaying ? "btn-stop" : "btn-play"}></div>
        </button>
        <div className="progress">
          <div className="currentTime">{currentTime}</div>
          <input type="range" className="progressBar" defaultValue="0" />
          <div className="trackDuration">
            {moment.utc(currentTrack.duration_ms).format("mm:ss")}
          </div>
        </div>

        <ShuffleIcon className="ShuffleIcon" />

        <SkipPreviousIcon className="SkipPreviousIcon" fontSize="large" />
        {/* 
        <PlayCircleOutlineIcon
          onClick={() => setIsPlaying(!isPlaying)}
          fontSize="large"
          className="footer_icon"
        /> */}

        <SkipNextIcon className="SkipNextIcon" fontSize="large" />

        <RepeatIcon className="RepeatIcon" />
      </div>

      <VolumeDownIcon className="VolumeDownIcon" />

      <div className="footer__right">
        <input type="range" className="audiobar" defaultValue="0" />
      </div>
    </div>
  );
}

export default playerContainer(Footer);
