import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
/* import apiRoutes from "../../routes/" */

const SearchArtistService = () => {
  const [SearchArtistData, setData] = useState([]);

  const SearchArtistFetchData = (search:string) => {
    axiosInstance
      .get(ApiRoutes.SEARCH_ARTIST+`q=${search}`+ApiRoutes.SEARCH_TYPE )
      .then((value) => {
        setData(value.data.artists.items);
      });
  };

  return {
    SearchArtistData,
    SearchArtistFetchData,
  };
};

export default SearchArtistService;
