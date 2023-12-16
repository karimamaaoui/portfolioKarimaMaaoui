import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>


                    <a href="https://www.facebook.com/kari.ma.102977" >
                        <i className='fa fa-facebook-square'></i>
                    </a>
                   
                    <a href="mailto:maaouika07@gmail.com" >
                        <i className='fa fa-google-plus-square'></i>
                    </a>
               
                    <a href="https://www.instagram.com/karima_maaoui/" >
                        <i className='fa fa-instagram'></i>
                    </a>

                    <a href="https://github.com/karimamaaoui" >
                        <i className='fa fa-github'></i>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/maaoui-karima-37a102209" >
                        <i className='fa fa-linkedin'></i>
                    </a>
               
                    <a href="https://www.goodreads.com/user/show/56751055-karima-maaoui" >
                        <i className='fa fa-book'></i>
                    </a>
               
                </div>


                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        HELLO, I'M  {" "}
                        <span className='highlighted-text'>
                            KARIMA MAAOUI
                        </span>

                    </span>

                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical loop={Infinity}
                            steps={[ 
                                "Fullstack Web Developer 🔴", 1000,
                                "MERN Stack Dev 💻", 1000,
                                "Flutter Dev 📱", 1000,
                                "React Dev 🌐 ", 1000,
                            
                            ]}
                             />
                        </h1>
                        <span className='profile-role-tagline'>
                        Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                <a href="https://www.linkedin.com/in/maaoui-karima-37a102209">

                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me {" "}
                    </button>
                    </a>
                    <a href='karima.pdf' download='karima maaoui cv.pdf'>
                        <button className='btn highlighted-btn'>
                            Get Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div className='profile-picture'>
        <div className='profile-picture-background'>
        </div>
        </div>

    </div>
  )
}
