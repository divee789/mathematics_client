import React from 'react';
import { Route, Switch, Redirect, useRouteMatch, NavLink,withRouter } from 'react-router-dom';

import './index.scss'
import Overview from './Routes/Overview';
import Courses from './Routes/Courses'
import Account from './Routes/Account'


const Dashboard = (props:any) => {
    let { path, url } = useRouteMatch();
    return (
        <section className='dashboard_main'>
            <div className='menu'>
                <div className="sidenav">
                    <div className="sidenav_menu">
                        <div className='user_info'>
                            <p>

                                <span className="logo-text" onClick={() => {
                                    props.history.push('/');
                                }}>Mathletes</span>

                            </p>
                            <p className='date'>{new Date().toLocaleString()}</p>
                            <p className="greet_user">
                                Hello {' '}
                                <span className="username">PSC1607742</span>
                            </p>
                        </div>
                        <div className="sidenav-list">
                            <NavLink to={`${url}/overview`}>
                                Overview
                         </NavLink>
                            <NavLink to={`${url}/courses`}>
                                Courses
                         </NavLink>
                            <NavLink to={`${url}/levels`}>
                                Register courses
                         </NavLink>
                            <NavLink to={`${url}/account`}>
                                My Account
                         </NavLink>
                            <NavLink to={`${url}/department`}>
                                Department
                         </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <Switch>
                    <Route path={`${path}/overview`} component={Overview} />
                    <Route path={`${path}/courses`} component={Courses} />
                    <Route path={`${path}/account`} component={Account} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </section>
    )

}

export default withRouter(Dashboard)