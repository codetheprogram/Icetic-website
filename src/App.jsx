import { useState } from 'react'
import './App.css'
import bgImg from './assets/bgImg.jpg'
import Intro from './components/Intro'
import FirstBody from './components/FirstBody'
import SecondBody from './components/SecondBody'

import FourthBody from './components/FourthBody'
import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Best from '../src/assets/Best.png'
import Shield from '../src/assets/Shield.png'
import Safety from '../src/assets/Safety.png'
import Heart from '../src/assets/Heart.png'
import Quality from '../src/assets/Quality.png'
import { useEffect } from 'react'

import { ScrollTrigger } from 'gsap/all'

import FifthBody from './components/FifthBody'
import SixthBody from './components/SixthBody'
import Footer from './components/Footer'


gsap.registerPlugin(ScrollTrigger);
function App() {
  const [count, setCount] = useState(0)
  gsap.registerPlugin(ScrollTrigger);

   const wrapperRef = useRef(null);
   const wrapperARef = useRef(null);
  const colRef = useRef(null);

  // useGSAP automatically handles context and cleanup for us,
  // preventing memory leaks and simplifying the code.
  useGSAP(() => {
   
    // Ensure both elements exist before running the animation
    if (!wrapperRef.current || !colRef.current) {
      console.error('GSAP: Wrapper or races element not found.');
      return;
    }

    // Function to calculate the horizontal scroll amount
    function getScrollAmount() {
      let colWidth = colRef.current.scrollWidth;
      return -(colWidth - window.innerWidth + 300); 
    }
    
    // Set initial width to prevent content wrapping
   
 gsap.to(wrapperARef.current, {
      y: () => `+=${getScrollAmount() * -0.5}`,
      scrollTrigger:{
       trigger: wrapperRef.current,
        scrub: 0.2, // Links the animation to the scroll position
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
      }
    })
    // Create the GSAP animation tween
    const tween = gsap.to(colRef.current, {
      x: getScrollAmount(),
     
      ease: "none",
     
    });

    // Link the animation to the user's scroll with ScrollTrigger
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: wrapperRef.current,
      animation: tween,
      scrub: 0.02,
      invalidateOnRefresh: true,
    });

  }, { scope: wrapperRef });

  return (
    <>
      <div id='bg'>
              <img id='bg-img' src={bgImg} alt="Background" />
          </div>
          <div id='main' ref={wrapperARef}>
      <Intro />
      <FirstBody />
      <SecondBody />
      
 </div>
 <div id='third-body' className='m-auto'  ref={wrapperRef}>
        <div id='third-body-t' className='m-auto' >
        <div id='third-body-heading'>
            <h1 className='text-4xl font-light h-10'>Powder Perfection</h1>
            <p>A Quality Snowboard Collection For All Levels. 
                Ready To Take You Through The Snow With Style And Maximum Performance.
            </p>
        </div>

        {/* horizontal scroll */}
        <div id='horizontal-scroll' >
       <div id='collection' ref={colRef} >
            <div id='hs-1' className='bg-blue-50 hs'>
                <img className='w-24 translate-y-6' src={Quality} />
                <h2 className='font-semibold text-2xl'>High-quality Materials</h2>
                <p className='font-light text-sm text-gray-400 -translate-y-10'>
                    Made from durable and lightweight materials, ensuring longevity.
                </p>
            </div>

            <div id='hs-2' className='bg-blue-50 hs translate-y-16'>
                <img className='w-24 translate-y-6' src={Heart}/>
                <h2 className='font-semibold text-2xl'>Modern And Stylish Designs</h2>
                <p className='font-light text-sm text-gray-400 -translate-y-10'>
                    Made from premium materials, ensuring durability and performance on the slopes.
                </p>
            </div>

            <div id='hs-3' className='bg-blue-50 hs '>
                <img className='w-20 translate-y-6' src={Safety}/>
                <h2 className='font-semibold text-2xl'>Satisfaction Gaurantee</h2>
                <p className='font-light text-sm text-gray-400 -translate-y-10'>
                    Made from premium materials, ensuring durability and performance on the slopes.
                </p>
            </div>
            <div id='hs-4' className='bg-blue-50 hs translate-y-16'>
                <img className='w-20 translate-y-6' src={Shield}/>
                <h2 className='font-semibold text-2xl'>Top Trusted Brand</h2>
                <p className='font-light text-sm text-gray-400 -translate-y-10'>
                    Made from premium materials, ensuring durability and performance on the slopes.
                </p>
            </div>
            <div id='hs-5' className='bg-blue-50 hs'>
                <img className='w-20 translate-y-6' src={Best}/>
                <h2 className='font-semibold text-2xl'>Best You Find</h2>
                <p className='font-light text-sm text-gray-400 -translate-y-10'>
                    Made from premium materials, ensuring durability and performance on the slopes.
                </p>
            </div>
        </div>
        </div>
        </div>
    </div>
    <div id='main' ref={wrapperARef}>
      <FourthBody />
      <FifthBody />
      <SixthBody />
      <Footer />
      </div>
    </>
  )

}

export default App
