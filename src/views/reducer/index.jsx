import changeNum from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNum,

  /* various other reducer will come here */
});

export default rootReducer;
