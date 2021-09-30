import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";

const LatestReleaseService = () => {
  const [latestData, setData] = useState([]);

  const LatestReleaseFetchData = () => {
    axiosInstance
      .get(ApiRoutes.LATEST_RELEASE )
      .then((value) => {
        setData(value.data.albums.items)
      });
  };

  return {
    latestData,
    LatestReleaseFetchData,
  };
};

export default LatestReleaseService;
