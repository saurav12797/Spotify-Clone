import { PLAYLIST } from "../definitions/playlistConstant";

export interface playListState {
  currentItem: any;
}

/* (state,action) */
const initState = {
  currentItem: {} /* ccurrenttrack =key */,
};

export const playlistReducer = (state = initState, action: any) => {
  switch (action.type) {
    case PLAYLIST:
      return { ...state, currentItem: action?.payload?.itemList };

    default:
      return state;
  }
};
