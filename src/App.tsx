import React, { Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/actions';
import Request from './services/api-services';

import Landing from './containers/Home'
import Blog from './containers/Blog'
import NotFound from './containers/404'

const api = new Request(process.env.BASE_URL);




const Login = React.lazy(() => {
  return import('./containers/Auth/Login');
});
const Dashboard = React.lazy(() => {
  return import('./containers/Dashboard');
});



const App = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isLoggedIn = api.isloggedIn()
    console.log(isLoggedIn)
    if (!isLoggedIn) {
      dispatch(logout())
    }
  }, [dispatch])
  const { isAuth } = useSelector((state: any) => state.auth);
  let routes = (
    <Switch>
      <Route path={`/dashboard`} render={props => (isAuth ? <Dashboard /> : <Redirect to="/auth/login" />)} />
      <Route path="/auth/login" render={props => (isAuth ? <Redirect to="/dashboard/home" /> : <Login />)} />
      <Route path='/blog' component={Blog} />
      <Route path="/" exact component={Landing} />
      <Route path="/404" component={NotFound} />
      <Redirect to='/404' />
    </Switch>
  );

  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>{routes}</Suspense>
    </div>
  );
};

export default App;

