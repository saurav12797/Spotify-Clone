import React, { useEffect, useState } from "react";
import "./PlaylistDetails.css";
import { useParams, Link } from "react-router-dom";
import SearchArtistService from "../../services/SearchArtistService/searchArtist.service";
import Mycard from "../Body/Mycard";

function Index() {
  const { SearchArtistData, SearchArtistFetchData } = SearchArtistService();
  const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    SearchArtistFetchData(search);
  };

  console.log("this is my search artist fetched data", SearchArtistData);

  return (
    <>
      <div className="detail">
        <h1>Let's find something for your playlist </h1>

        <input
          value={search}
          onChange={handleChange}
          placeholder="Search for Songs.."
          type="text"
        />

        {SearchArtistData.map((mysearch: any) => (
          <Link to={`/ArtistDetail/${mysearch.id}`}>
            <div className="newplaylistCard">
              <Mycard
                key={mysearch?.id}
                p={mysearch?.name}
                img={mysearch?.images?.length ? mysearch.images[0].url : ""}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Index;
