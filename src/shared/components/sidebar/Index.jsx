import React from "react";
import "./Sidebar.css";
import SidebarOption from "../sideBarOption/Index";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../views/DataLayer/Index";
import { Link } from "react-router-dom";

import { useState } from "react";

import SidebarPlaylist from "./SidebarPlaylist";

function Sidebar() {
  const [itemList, UpdateItemList] = useState([]);

  const addItemToList = () => {
    UpdateItemList([
      ...itemList,
      { item: `Playlist ${itemList.length + 1} `, key: Date.now() },
    ]); /* ...item to fetch all previos iteam and also push the currentitam as array */

    console.log(itemList);
  };

  return (
    <div className="sidebar">
      <img
        className="sidelogo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <Link to="/">
        <SidebarOption className="mysidebar" Icon={HomeIcon} title="Home" />
      </Link>

      <Link to="/search">
        <SidebarOption className="mysidebar" Icon={SearchIcon} title="Search" />
      </Link>

      <Link to="/library">
        <SidebarOption
          className="mysidebar"
          Icon={LibraryMusicIcon}
          title=" Your Library"
        />
      </Link>

      <br />

      <button className="addlistBtn" onClick={addItemToList}>
        Create Playlist
      </button>

      <hr />
      <strong className="sidebar_title">PLAYLISTS</strong>

      <SidebarPlaylist itemList={itemList} updateItemList={UpdateItemList} />

      <SidebarOption title="Hip Hop" />
      <SidebarOption title="Jazz" />
      <SidebarOption title="Romantic" />
      <SidebarOption title="Bollywood" />
    </div>
  );
}

export default Sidebar;
