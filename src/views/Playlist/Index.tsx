import React from "react";
import "./playlist.css";
import Mycard from "../Body/Mycard";
import SidebarPlaylist from "../../shared/components/sidebar/SidebarPlaylist";

function Index() {
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
    <>
      <div className="myplaylist">
        <div className="liked_song">
          <h1>Liked Songs</h1>
          <h3>0 Liked Songs</h3>
        </div>
        <div className="libraryPlaylist">
          <Mycard
            p={`My Playlist 1`}
            img={`https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png`}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
