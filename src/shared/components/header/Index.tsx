import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import { useDataLayerValue } from "../../../views/DataLayer/Index";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />

        <input placeholder="Search for Artists, Songs" />
      </div>
      <div className="header_right">
        <Avatar src="" alt="sk" />

        <h4>Saurav Kumar</h4>
      </div>
    </div>
  );
}

export default Header;
