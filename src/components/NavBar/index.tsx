import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';



import './index.scss'
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
            <nav className='main_nav'>
                <div className='logo' onClick={() => {
                    props.history.push('/');
                }} >
                    Mathletes
                    </div>
                <div className='nav_items'>
                    <div className='nav_item'>
                        <Link to='/blog'>Blog</Link>
                    </div>
                    <div className='nav_item'>
                        <Link to='/blog'>Contact Us</Link>
                    </div>
                    {/* <div className='nav_item auth'>
                            <Link to='/'>Sign Up</Link>
                        </div> */}
                    <div className='nav_item auth'>
                        <Link to={link}>{text}</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Navbar)