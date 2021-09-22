import React from "react";
import "./Login.css";

import { loginUrl } from "../../../views/spotify/Index";

function login() {
  return (
    <div className="login">
      {/* spotify logo */}

      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg "
        alt="spotify logo"
      />

      {/* spotify with login button */}
      <a href={loginUrl}>LOGIN WTH SPOTIFY</a>
    </div>
  );
}

export default login;
