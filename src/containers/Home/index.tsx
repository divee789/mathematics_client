import React from 'react';

import Navbar from '../../components/NavBar'
import test from '../../assets/images/profile.jpg'
import './Home.scss'
const Home: React.FC = () => {

    return (
        <>
            <header className='header_landing'>
                <div className="pic"><div className='pic_overlay'></div></div>
                {/* <div className="test-overlay">
                    <div className="overlay"></div>
                    <img src={test} />
                </div> */}
                <Navbar />
                <div className='header_content'>
                    <h1>Utilizing mathematics for the full development of the individual and his world.</h1>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid dicta recusandae voluptatibus explicabo, commodi magnam suscipit quia non accusamus esse culpa ut reprehenderit veritatis facilis corrupti voluptates alias sed?</p> */}
                    <div className="get-started">
                        <form>
                            <div className="form-group" >
                                <input type="text" placeholder="Enter your matriculation number" />
                            </div>
                            <button>Get Started</button>
                        </form>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Home
