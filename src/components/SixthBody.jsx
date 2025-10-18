import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import revPic from '../assets/revPic.jpg'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const SixthBody = () => {
    useGSAP(() => {
        gsap.from('#p2Img', {
            scrollTrigger: {
            trigger: '#p2Img',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
            },
            scale: 1.5,
        })

        gsap.from('.p1Text', {
            scrollTrigger: {
            trigger: '#p2Img',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
            },
            opacity: 0,
            duration: 1,
            stagger: 1,
            y: 50
        })


    }, [])
  return (
    <>
    <div id='sixth-body'>
        <div id='part1'>
            <div id='stars'>
            <img className='p1Text' src={star1}/>
            <img className='p1Text' src={star1}/>
            <img className='p1Text' src={star1}/>
            <img className='p1Text' src={star1}/>
            <img className='p1Text' src={star2}/>
            </div>
            <div id='part1-text'>
                <p className='p1Text'>"The Snowboard I Purchased Exceeded My Expectations! 
                    It Handles Perfectly On Water And Design Is
                    Top-notch
                </p>
            </div>
            <div id="name">
               <p className='p1Text'>Perthvi L. -21 Years</p> 
            </div>
        </div>
        <div id='part2'>
            <img id='p2Img'  src={revPic}/>
        </div>
        </div>
    </>
  )
}

export default SixthBody