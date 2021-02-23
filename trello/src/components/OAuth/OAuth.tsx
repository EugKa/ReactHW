import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { RouteChildrenProps, Redirect } from "react-router";
import { setToken } from "../../store/auth";
import { ROUTES_URLS } from "../App/routes";

interface OAuthProps extends RouteChildrenProps {
  onSetToken?: (token: string) => void;
}

const OAuth: FunctionComponent<OAuthProps> = ({ location: { hash }, onSetToken }: OAuthProps) => {
  const token = hash.split('=')[1];
  onSetToken && onSetToken(token);
  return <Redirect to={ROUTES_URLS.DASHBOARD} />
}

const mapDispathToProps = (dispatch: any) => {
  return {
    onSetToken: (token: string) => dispatch(setToken(token))
  }
}

const ConnectedOAuth = connect(undefined, mapDispathToProps)(OAuth)

export {ConnectedOAuth as OAuth}

