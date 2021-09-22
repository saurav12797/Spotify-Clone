import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers/index";
import * as AuthFunctions from "../actions/auth";

const mapStateToProps = (state: RootReducerProps) => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user,
  login: state.auth.login,
  signup: state.auth.signup,
  otp: state.auth.otp,
  forgotPassword: state.auth.forgotPassword,
  changePassword: state.auth.changePassword,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthFunctions, dispatch);

const AuthContainer = (component: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default AuthContainer;
