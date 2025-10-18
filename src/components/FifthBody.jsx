import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {SplitText, ScrollTrigger}  from 'gsap/all'
import board1 from '../assets/board1.png'
import board2 from '../assets/board2.png'
import board3 from '../assets/board3.png'
import board4 from '../assets/board4.png'
import board5 from '../assets/board5.png'
import board6 from '../assets/board6.png'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const FifthBody = () => {
      useGSAP(() => {

       let textSliptFI = SplitText.create('.fi-text', {type: 'lines'});
        gsap.from(textSliptFI.lines,  {
        scrollTrigger: {
        trigger: '#fifth-body',
        scrub: 1, // Links the animation to the scroll position
        start: "top center",
        end: "bottom bottom",
      },
      duration: 1,
      y: 50,
      marker: true,
      stagger: 0.5,
        opacity: 0 
    })

    gsap.from('.select',{
      scrollTrigger: {
        trigger: '#fifth-body',
        scrub: 1, // Links the animation to the scroll position
        start: "top 20%",
        end: "bottom bottom",
      },
      marginTop: 150,
      marker: true,
      stagger: 1,
      duration: 1,
      opacity: 0
    })
  }, [])

  return (
    <>
        <div id='fifth-body'>
          <div id='fifth-head'>
            <h1 className='fi-text'>Product Hightlights</h1>
            <p className='fi-text'>A Quality Snowboard Collection For Levels. Ready To 
              You Through The Snow With Style And Maximum Perfomance.
            </p>
          </div>
          <div id="selection">
            <div id='select' className='select'>
              <div id='sel-img'>
                <img src={board1}></img>
              </div>
              <h1>SnB Defender</h1>
              <p>Awesome Snowboard 2025</p>
              <p id="sel-price">$549.00</p>
            </div>

            <div id='select' className='select'>
              <div id='sel-img'>
                <img src={board2}></img>
              </div>
              <h1>SnB Defender tilt</h1>
              <p>Awesome Snowboard 2024</p>
              <p id='sel-price'>$349.00</p>
            </div>

            <div id='select' className='select'>
              <div id='sel-img'>
                <img src={board3}></img>
              </div>
              <h1>Hate Lane</h1>
              <p>Awesome Snowboard 2025</p>
              <p id='sel-price'>$439.00</p>
            </div>

            <div id='select' className='select'>
              <div id='sel-img'>
                <img src={board4}></img>
              </div>
              <h1>T-Zane</h1>
              <p>Awesome Snowboard 2025</p>
              <p id='sel-price'>$419.00</p>
            </div>

            <div id='select' className='select'>
              <div id='sel-img'>
                <img src={board5}></img>
              </div>
              <h1>HRealm</h1>
              <p>Awesome Snowboard 2023</p>
              <p id='sel-price'>$239.00</p>
            </div>
 
            <div id='select' className='select'>
              <div id='sel-img'>
                <img src={board6}></img>
              </div>
              <h1>Hage4</h1>
              <p>Awesome Snowboard 2025</p>
              <p id='sel-price'>$525.00</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default FifthBody