import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { Service } from "../../models/Service/service.model";
import { Category } from "../../models/Category/Category.model";
import { deserialize } from "serializr";
import ArtistDetail from "../../views/ArtistDetail/Index";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
/* import apiRoutes from "../../routes/" */

const ArtistService = () => {
  const [currData, setData] = useState({});

  const ArtistFetchData = (id: string) => {
    axiosInstance.get(ApiRoutes.ARTIST_LIST + `/${id}`).then((value) => {
      setData(value.data);
    });
  };

  return {
    currData,
    ArtistFetchData,
  };
};

export default ArtistService;
