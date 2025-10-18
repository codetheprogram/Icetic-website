import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import videoA from '../assets/videoA.mp4'
import videoB from '../assets/videoB.mp4'
import videoC from '../assets/videoC.mp4'

const Intro = () => {
  useGSAP(() => {
      gsap.from('.vid', {
        duration: 1.5,
        opacity: 0,
        y: 300,
        ease: 'power3.out',
        stagger: 0.5,
      }) 
  }, [])
  return ( 
    <>
        <div id='intro'>
            <video id='videoA' className='vid' src={videoA} autoPlay loop muted />
            <video id='videoB' className='vid' src={videoB} autoPlay loop muted />
            <video id='videoC' className='vid' src={videoC} autoPlay loop muted />
        </div>
    </>
  )
}

export default Intro