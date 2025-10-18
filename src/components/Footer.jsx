import React from 'react'
import instagram from '../assets/instagram.png'
import pintrest from '../assets/pintrest.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

const Footer = () => {
  return (
    <>
        <div id='footer'>
        <div id='first-footer'>
            <div id='first-footerA'>
            <div id='footer-head'><p>Icetic</p></div>
            <div id='footer-text'>
            <p>Snowboarding is the best peice of art
                you can wear and enjoy at the same time.
                Snowboards are not just a means of transportation;
                they are a way to express your personality and style on the slopes.
            </p>
            </div>
            <div id='logos'>
                <img src={pintrest}/>
                <img src={twitter}/>
                <img src={instagram}/>
                <img src={youtube}/>
            </div>
            </div>
            <div id='first-footerB'>
            <h1>Address</h1>
            <p>123 Snowy Lane, Winterville, CO 80439</p>
            </div>
            <div id='first-footerC'>
                <h1>Email Address</h1>
                <p>hello@daway.com</p>
                <h1>Phone Number</h1>
                <p>+1 (555) 123-4567</p>
            </div>
            <div id='first-footerD'>
                <h1>Phone Number</h1>
                <p>+1 (555) 123-4567</p>
                </div>
        </div>
        <div id='second-footer'>
            <p>© 2024 Icetic. All rights reserved.</p>
        </div>
        </div>
    </>
  )
}

export default Footer