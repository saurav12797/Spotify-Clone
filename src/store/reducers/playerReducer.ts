import { ISPLAYING, PLAY } from "../definitions/playerConstants";

export interface playerState {
  currentTrack: any;
  isPlaying: boolean;
}

/* (state,action) */
const initState = {
  currentTrack: {} /* ccurrenttrack =key */,
  isPlaying: false,
};

export const playerReducer = (state = initState, action: any) => {
  switch (action.type) {
    case PLAY:
      return { ...state, currentTrack: action?.payload?.track };
    case ISPLAYING:
      return { ...state, isPlaying: action?.payload?.isPlaying };
    default:
      return state;
  }
};
