import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_level_courses } from "../../store/actions"
import { Route, Switch, Redirect, useRouteMatch, NavLink, withRouter } from 'react-router-dom';

import './index.scss'
import Overview from './Routes/Overview';
import Courses from './Routes/Courses'
import Account from './Routes/Account'


const Dashboard = (props: any) => {

    const dispatch = useDispatch()
    const { user } = useSelector((state: any) => state.auth)
    useEffect(() => {
        const check = async () => {
            try {
                await dispatch(get_level_courses(user.level));
            } catch (error) {
                // if refresh token has expired, dispatch LOGOUT THINGS
                console.log('error', error);
                throw error;
            }
        };
        check()
    }, [dispatch]);
    let { path, url } = useRouteMatch();


    return (
        <section className='dashboard_main'>
            <div className='menu'>
                <div className="sidenav">
                    <div className="sidenav_menu">
                        <div className='user_info'>
                            {/* <p>

                                <span className="logo-text" onClick={() => {
                                    props.history.push('/');
                                }}>Mathletes</span>

                            </p> */}
                            <p className="greet_user">
                                Hello {' '}
                                <span className="username">PSC1607742</span>
                            </p>
                            <p className='date'>{new Date().toLocaleString()}</p>

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