/* authentication using spotify API */

/* whenever i click login with spotify it redirects to authendpoint link */

/* 1.clicking login button
2.redirect to spotify login page

3. Redirect to home page once authorize */
//import {useLocation} from "react-router-dom";
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "e5fb50203631411cae1d0b3f04db8f00";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-follow-modify",
];
/* getting the accesss token from link */

export const getTokenFromUrl = () => {
  /*  const search = useLocation().search;
  const initial = new URLSearchParams(search).get('access_token');
  return initial; */

  return window.location.hash /* location =url hash=# */
    .substring(1) /* get the 1st substring */
    .split("&") /* split 1st substring after &  */
    .reduce((initial: any, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

/* %20 is an asci code for space */
/* &response_type=token..means after authentcation give me token`;
 */
