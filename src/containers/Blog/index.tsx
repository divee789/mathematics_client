import React from 'react';

import Navbar from '../../components/NavBar'
import './index.scss'

import blogpic from '../../assets/images/code.jpg'
import overlay from "../../assets/images/download.jpg";

const Home: React.FC = () => {

    return (
        <>
            <header className='blog_header'>
                <div className="overlay">
               <Navbar/>
                <div className='header_blog_title'>
                   <h1>Information is Power</h1>
                    </div>
                </div>
            </header>
            <section className='blog_body'>
                <div className='blog_body_content'>
                    <div className='blog_image'>
                        <img src={blogpic}/>
                    </div>
                    <div className='blog_body_details'>
                        <p className='blog_date'>{new Date().toLocaleString()}</p>
                        <h2 className='blog_title'>Coders Wanted</h2>
                        <p className='blog_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae eos reiciendis aperiam quis est sit nulla magnam modi eligendi molestiae error asperiores ut minus recusandae voluptatum, alias nemo. Illum...<i>Read more</i></p>
                    </div>
                    <div>
                        
                    </div>
              </div>
            </section>
        </>
    )

}

export default Home
