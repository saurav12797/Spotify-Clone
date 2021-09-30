import React, { useState, useRef, useEffect } from "react";
import playerContainer from "../../store/container/PlayerContainer";
import moment from "moment";

function TrackList(props) {
  const { trackList, isPlaying, setIsPlaying, currentTrack, setCurrentTrack } =
    props;

  /* play function */
  /* setCurrentTrack(track); */

  const setTrack = (mytrack) => {
    setCurrentTrack(mytrack);

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {trackList.map((mytrack) => (
        <div key={mytrack.key} className="mysongs">
          <div className="firstrow">
            <span>
              <button className="trackbtn" onClick={() => setTrack(mytrack)}>
                <div
                  className={
                    isPlaying && mytrack.id === currentTrack.id
                      ? "btn-stop"
                      : "btn-play"
                  }
                ></div>
              </button>

              <img
                className="imgsong"
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg"
              />
              <p className="songname">{mytrack.name}</p>
            </span>
          </div>

          <div className="secondrow">
            <p className="downloads">{mytrack.popularity}</p>
          </div>
          <div className="thirdrow">
            <p className="duration">
              {moment.utc(mytrack.duration_ms).format("mm:ss")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default playerContainer(TrackList);
