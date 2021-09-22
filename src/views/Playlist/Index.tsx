import React, { useState, useEffect } from "react";
import "./playlist.css";
import axiosInstance from "../../interceptor/axiosInstance";
import { useParams } from "react-router-dom";

function Index() {
  const { id } = useParams<any>();

  /* const [currData, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const currData = await axiosInstance.get(
        `https://api.spotify.com/v1/tracks/${id}`
      );

      setData("my track detail", currData);
    };

    fetchData();
  }, []); */
  return (
    <div className="myplaylist">
      <div className="liked_song">
        <h1>Liked Songs</h1>
        <h3>0 Liked Songs</h3>
      </div>
    </div>
  );
}

export default Index;
