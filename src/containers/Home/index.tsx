import React from 'react';

import Navbar from '../../components/NavBar'
import test from '../../assets/images/profile.jpg'
import image1 from '../../assets/images/anwer.png'
import image2 from '../../assets/images/newpassword.png'
import image3 from '../../assets/images/otp.png'
import './index.scss'


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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid dicta recusandae voluptatibus explicabo, commodi magnam suscipit quia non accusamus esse culpa ut reprehenderit veritatis facilis corrupti voluptates alias sed?</p>
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
            <section className='info'>
                <h3 style={{ fontSize: '1.5rem', textAlign: 'left', margin: 0, marginTop: '2rem', marginLeft: '5%' }}>We Promote</h3>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <p>Integrity</p>
                        </div>
                        <div className="slide">
                            <p>Intellect</p>
                        </div>
                        <div className="slide">
                            <p>Dilligence</p>
                        </div>
                        <div className="slide">
                            <p>Determination</p>
                        </div>
                        <div className="slide">
                            <p>Doggedness</p>
                        </div>
                        <div className="slide">
                            <p>Brilliance</p>
                        </div>
                        <div className="slide">
                            <p>Integrity</p>
                        </div>
                        <div className="slide">
                            <p>Intellect</p>
                        </div>
                        <div className="slide">
                            <p>Dilligence</p>
                        </div>
                        <div className="slide">
                            <p>Determination</p>
                        </div>
                        <div className="slide">
                            <p>Doggedness</p>
                        </div>
                        <div className="slide">
                            <p>Integrity</p>
                        </div>
                        <div className="slide">
                            <p>Intellect</p>
                        </div>
                        <div className="slide">
                            <p>Dilligence</p>
                        </div>
                        <div className="slide">
                            <p>Brilliance</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h3>
                        We've developed innovative techniques to bring utter simplicity to you
                    </h3>
                    <p className="caption" />
                    <div className="list">
                        <div className="list-item">
                            <div className="list-icon">
                                {/* <img src={image1} alt="place" /> */}
                            </div>
                            <div className="list-content">
                                <h4 className="list-content-title">Global Reach</h4>
                                <p className="list-content-caption">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odit
                                    eos nesciunt aliquid tempora optio quibusdam repellendus quos
                                    cupiditate omnis illo voluptas nihil sapiente, sit error vitae ipsa
                                    saepe! Nulla.
                               </p>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="list-icon">
                                {/* <img src={image2} alt="place" /> */}
                            </div>
                            <div className="list-content">
                                <h4 className="list-content-title">One-Time Setup</h4>
                                <p className="list-content-caption">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                                    earum alias consequatur, quidem, placeat facilis ratione modi
                                    doloremque asperiores in amet enim laborum autem est suscipit
                                    exercitationem ipsam! Rem, labore.
                              </p>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="list-icon">
                                {/* <img src={image3} alt="place" /> */}
                            </div>
                            <div className="list-content">
                                <h4 className="list-content-title">Perfect Match</h4>
                                <p className="list-content-caption">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
                                    error illum voluptates eos nulla dolor ad odio soluta eum,
                                    recusandae ullam cumque, veniam culpa. Hic deleniti repellendus enim
                                    ea maiores!
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="item">
                            <a href="/" className="button q">CREATE ACCOUNT</a>
                        </div>
                        <div className="item">
                            <a href="/" className="button w">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home
