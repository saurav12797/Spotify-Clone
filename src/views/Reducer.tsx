export const initialState = {
  user: null,
  playlists: [],

  playing: false,
  item: null,
  /*  token:
    "BQDQdbnXIeBk384N3vVvV9vOH6c_TEdmMewHk-fUauKDGJuqtD6TGKUPmmEzoe_98-MWqkhs6ugOwnTSgJbr7KdJDAanH6WQEwvy8yPp2BYRsIDyHRaQoZkwKkgIeulnruuEUFjjRYRy48u5HdNOF5K_2KyRLgWTqVATUd4frubz2rU9", */
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
