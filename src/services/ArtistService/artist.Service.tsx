import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";

import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
/* import apiRoutes from "../../routes/" */

const ArtistService = () => {
  const [currData, setData] = useState({});

  const ArtistFetchData = (id: string) => {
    axiosInstance.get(ApiRoutes.ARTIST + `/${id}`).then((value) => {
      setData(value.data);
    });
  };

  return {
    currData,
    ArtistFetchData,
  };
};

export default ArtistService;
