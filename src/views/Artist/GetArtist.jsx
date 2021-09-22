import React, { useEffect, useState } from "react";
import axios from "axios";

const ARTIST = "https://api.spotify.com/v1/artists";

const GetArtist = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const HandlePlaylist = () => {
    axios
      .get(ARTIST, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  HandlePlaylist();

  return <>{HandlePlaylist}</>;
};

export default GetArtist;
