import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions";
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  NavLink,
  withRouter,
} from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { GET_STUDENT } from "../../services/queries";

import "./index.scss";

import Overview from "./Routes/Overview";
import Courses from "./Routes/Courses";
import Setting from "./Routes/Setting";
import Loading from "../../components/Loading";

const Dashboard = (props: any) => {
  const dispatch = useDispatch();
  const { error, loading, data } = useQuery(GET_STUDENT);

  let { path, url } = useRouteMatch();

  const logOutHandler = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    props.history.push("/");
  };

  if (loading) return <Loading />;
  if (error) return <p>There has been an error preparing your dashboard</p>;

  if (data)
    return (
      <section className="dashboard_main">
        <div className="menu">
          <div className="sidenav">
            <div className="sidenav_menu">
              <div className="user_info">
                <p className="greet_user">
                  Hello{" "}
                  <span className="username">
                    {data.student.matriculation_number}
                  </span>
                </p>
                <p className="date">{new Date().toLocaleString()}</p>
              </div>
              <div className="sidenav-list">
                <NavLink to={`${url}/overview`}>Overview</NavLink>
                <NavLink to={`${url}/courses`}>Courses</NavLink>
                <NavLink to={`${url}/department`}>Department</NavLink>
                <NavLink to={`${url}/settings`}>Settings</NavLink>
                <a href="#" onClick={logOutHandler}>
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <Switch>
            <Route
              path={`${path}/overview`}
              render={(props) => <Overview {...props} student={data.student} />}
            />
            <Route path={`${path}/courses`} component={Courses} />
            <Route path={`${path}/settings`} component={Setting} />
            <Redirect to="/" />
          </Switch>
        </div>
      </section>
    );
};

export default withRouter(Dashboard);
