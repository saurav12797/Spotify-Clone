import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { Service } from "../../models/Service/service.model";
import { Category } from "../../models/Category/Category.model";
import { deserialize } from "serializr";
import ArtistDetail from "../../views/ArtistDetail/Index";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
/* import apiRoutes from "../../routes/" */

const TrackService = () => {
  const [trackData, setData] = useState({});

  const TrackFetchData = (id: string) => {
    axiosInstance
      .get(ApiRoutes.ARTIST_LIST + `/${id}` + ApiRoutes.TRACK_LIST)
      .then((value) => {
        setData(value.data);
      });
  };

  return {
    trackData,
    TrackFetchData,
  };
};

export default TrackService;
