import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";

function hasJWT() {
  let flag = false;
  localStorage.getItem("token") ? (flag = true) : (flag = false);
  return flag;
}

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <HashRouter>
        <Switch>
          {hasJWT() ? (
            <Route path={`/admin`} component={AdminLayout} />
          ) : (
            <Route path={`/auth`} component={AuthLayout} />
          )}
          <Redirect from="/" to={hasJWT() ? "/admin" : "/auth"} />
        </Switch>
      </HashRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
