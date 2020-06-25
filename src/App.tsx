import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Landing from "./containers/Home/newDesign";
import Blog from "./containers/Blog";
import NotFound from "./containers/404";
import Loading from "./components/Loading";
import VerifyEmail from "./components/verifyEmail";
import PasswordReset from "./components/ForgotPassword";
import PasswordConfirmation from "./components/ForgotPassword/PasswordReset";

const Signup = React.lazy(() => {
  return import("./containers/Auth/Signup");
});

const Login = React.lazy(() => {
  return import("./containers/Auth/Login");
});
const Dashboard = React.lazy(() => {
  return import("./containers/Dashboard");
});

const App = (props: any) => {
  const { isAuth } = useSelector((state: any) => state.auth);

  let routes = (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/blog" component={Blog} />
      <Route
        path="/auth/login"
        render={(_props) =>
          isAuth ? <Redirect to="/dashboard/home" /> : <Login />
        }
      />
      <Route
        path="/auth/signup"
        render={(_props) =>
          isAuth ? <Redirect to="/dashboard/home" /> : <Signup />
        }
      />
      <Route path="/verify_email/:token" component={VerifyEmail} />
      <Route path="/password_reset_request" component={PasswordReset} />
      <Route path="/password_reset/:token" component={PasswordConfirmation} />
      <Route
        path={`/dashboard`}
        render={(props) =>
          isAuth ? <Dashboard /> : <Redirect to="/auth/login" />
        }
      />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );

  return (
    <div>
      <Suspense fallback={<Loading />}>{routes}</Suspense>
    </div>
  );
};

export default App;
