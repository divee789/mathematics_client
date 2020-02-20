import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLecturers } from '../../store/actions';

import Navbar from '../../components/NavBar';
// import test from '../../assets/images/profile.jpg'
// import image1 from '../../assets/images/anwer.png'
// import image2 from '../../assets/images/newpassword.png'
// import image3 from '../../assets/images/otp.png'
import './index.scss'


const Home: React.FC = () => {


    const dispatch = useDispatch()
    const { ltr_pageItems, ltr_pager, ltr_error } = useSelector((state: any) => state.course)

    let team
    let pagination

    let loadPage = (page: number, e) => {
        e.preventDefault()
        dispatch(getLecturers(page))
        return
    }

    if (ltr_pageItems !== null || ltr_pager !== null) {
        team = <> {
            ltr_pageItems.map((lecturer: any) =>
                <div className='team_card' key={lecturer.id}>
                    <img src='https://res.cloudinary.com/donalpha/image/upload/v1578874197/f0wi08kf7lj3lywtev5q.jpg' />
                    <p className='lecturer_name'>{lecturer.title + ' ' + lecturer.first_name + ' '}{lecturer.last_name}</p>
                    <p>{lecturer.position}</p>
                    <p>{lecturer.department}</p>
                </div>
            )
        }
        </>
        pagination = <>
            <div className="card-footer pb-0 pt-3">
                {ltr_pager.pages && ltr_pager.pages.length &&
                    <ul className="pagination">
                        <li className={`page-item first-item ${ltr_pager.currentPage === 1 ? 'disabled' : ''}`}>
                            <a href='#' onClick={(e) => loadPage(1, e)} className="page-span">First</a>
                        </li>
                        <li className={`page-item previous-item ${ltr_pager.currentPage === 1 ? 'disabled' : ''}`}>
                            <a href='#' onClick={(e) => loadPage(ltr_pager.currentPage - 1, e)} className="page-span">&laquo;</a>
                        </li>
                        {/* {ltr_pager.pages.map(page =>
                            <li key={page} className={`page-item number-item ${ltr_pager.currentPage === page ? 'active' : ''}`}>
                                <span onClick={() => loadPage(page)} className="page-span">{page}</span>
                            </li>
                        )} */}
                        <li className={`page-item next-item ${ltr_pager.currentPage === ltr_pager.totalPages ? 'disabled' : ''}`}>
                            <a href='#' onClick={(e) => { loadPage(ltr_pager.currentPage + 1, e) }} className="page-span">&raquo;</a>
                        </li>
                        <li className={`page-item last-item ${ltr_pager.currentPage === ltr_pager.totalPages ? 'disabled' : ''}`}>
                            <a href='#' onClick={(e) => loadPage(ltr_pager.totalPages, e)} className="page-span">Last</a>
                        </li>
                    </ul>
                }
            </div>

        </>
    } else {
        console.log(ltr_error)
        team = <p>Failed to get lecturers</p>
    }

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

                <section>
                    <h3>Our Team</h3>
                    <div className='team_card_container'>
                        {team}
                    </div>
                    {pagination}
                </section>
            </section>
        </>
    )

}

export default Home
