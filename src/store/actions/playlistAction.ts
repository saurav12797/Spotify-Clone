import { PLAYLIST } from "../definitions/playlistConstant";
import { ActionProps } from "../../shared/types/action.type";

export const setItemList = (itemList: any): ActionProps => ({
  type: PLAYLIST,
  payload: {
    itemList,
  },
});
