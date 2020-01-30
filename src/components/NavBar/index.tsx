import React from 'react';
import { Link,withRouter } from 'react-router-dom'


import './index.scss'
const Navbar = (props:any) => {
    
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
                        <Link to='/auth/login'>Log In</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Navbar)