import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers/index";

import * as PlaylistFunctions from "../actions/playlistAction";

const mapStateToProps = (state: RootReducerProps) => ({
  /*  RootReducerProps ->props  state- parameter */
  currentItem:
    state.playlist
      .currentItem /* mapping the reducer state to compnent props */,
});

const mapDispatchToProps = (
  dispatch: Dispatch /* action+state here binding */
) =>
  bindActionCreators(
    PlaylistFunctions,
    dispatch
  ); /* mapping the actions  to compnent props */

const playlistContainer = (component: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default playlistContainer;
