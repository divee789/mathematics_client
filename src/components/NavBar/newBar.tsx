import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Logo from '../../assets/images/alp.png'

import Button from '../Button'

import './newBar.scss'
const Navbar = (props: any) => {
    const { isAuth } = useSelector((state: any) => state.auth)
    let link
    let text
    if (isAuth) {
        link = '/dashboard/overview'
        text = 'My Dashboard'
    } else {
        link = '/auth/login'
        text = 'Log In'
    }
    return (
        <>
            <nav className='nav'>
                <div className='logo' onClick={() => {
                    props.history.push('/');
                }} >
                    <img src={Logo} alt='Mathematics_logo' />
                </div>
                <div className='nav_items'>
                    <div className='nav_item'>
                        <NavLink exact to='/'>Home  <span className='circle'></span></NavLink>

                    </div>
                    <div className='nav_item'>
                        <NavLink to='/blog'>Blog<span className='circle'></span></NavLink>
                    </div>
                    <div className='nav_item'>
                        <NavLink to='/careers'>Careers<span className='circle'></span></NavLink>
                    </div>
                    <div className='nav_item'>
                        <NavLink to='/auth/login'>Contact Us<span className='circle'></span></NavLink>
                    </div>
                    {/* <div className='nav_item auth'>
                            <NavLink to='/'>Sign Up</NavLink>
                        </div> */}
                    <div className='auth'>
                        <Button colored>
                            <NavLink to={link}>{text}</NavLink>
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Navbar)