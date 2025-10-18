import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import tsSmallIconA from '../assets/tsSmallIconA.png'
import tsSmallIconB from '../assets/tsSmallIconB.png'
import tsSmallIconC from '../assets/tsSmallIconC.png'
import snowboard from '../assets/snowboard.png'
import rocker from '../assets/rocker.png'
import loadBar from '../assets/loadBar.png'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const FourthBody = () => {
   const refFrost = useRef(null);
   
  useGSAP(() => {
    
       let textSliptFr = SplitText.create('.frost', {type: 'chars'});
        gsap.from(textSliptFr.chars,  {
        scrollTrigger: {
        trigger: '#fourth-body',
        scrub: 1, // Links the animation to the scroll position
        start: "top top",
        end: "bottom center",
      },
      duration: 1,
      autoSplit: true,
      stagger: 1,
        opacity: 0 
    })
    gsap.from('.rate',  {
        scrollTrigger: {
        trigger: '#fourth-body',
        
         // Links the animation to the scroll position
        start: "center top",
        end: "bottom center",
      },
      duration: 1,
      width: 0,
        opacity: 0,
       
    })
     gsap.from('.sec',  {
        scrollTrigger: {
        trigger: '#fourth-body',
        
         // Links the animation to the scroll position
        start: "top top",
        end: "bottom center",
      },
      duration: 2,
      y: 40,
     
      stagger: 1,
        opacity: 0,
       
    })
  }, [])
  return (
    <> 
        <div id='fourth-body'>
          <div id='first-section' className='sec'>
            <div id='fourth-head'>
            <div><h1 className='frost'>Frostflex Cruiser</h1></div>
           <div> <p className='frost'>Design For Every Skill Level.
              Ideal For Beginners. Featuring A Soft Flex
               And Rocker Profile.
            </p></div>
        </div>
        <div id='stats'>
          <div id='stat-boxes'>
          <p className='translate-y-6'>Level</p><p className='float-right'>7/10</p>
          
          <div id='rating-level' className='rate'></div>
          
          </div>
          <div id='stat-boxes'>
          <p className='translate-y-6'>Flex</p><p className='float-right'>3/10</p>
          <div id='rating-flex' className='rate'></div>
          
          </div>
          <div id='stat-boxes'>
          <p className='translate-y-6'>Terrain</p><p className='float-right'>8/10</p>
          <div id='rating-terrain' className='rate'></div>
          
          </div>
          <div id='stat-boxes'>
          <p className='translate-y-6'>Rigidity</p><p className='float-right'>6/10</p>
          <div id='rating-rigidity' className='rate'></div>
          
          </div>
        </div>
        <div id='rocker'>
          <p>Rocker</p><p className='float-right'>8/10</p>
          <img src={rocker}></img>
        </div>
          </div>
          <div id='second-section' className='sec'>
            <img src={snowboard} />
          </div>
          <div id='third-section' className='sec'>
            <p id='ts-head'>The Fish Design For A Groveler </p>
          <div id='ts-a'>
            <div><img src={tsSmallIconA}/><p>2-6</p></div>
            <div><img src={tsSmallIconB}/><p>7" 6"</p></div>
            <div><img src={tsSmallIconC}/><p>52.</p></div>
          </div>
              
              <div id='ts-b'>
                <p>Lightweight Fiberglass With Carbon Reinforcements
                  For Optimal Durability And Perfomance For Optimal For
                  Optimal Durability And Perfomance.
                </p>
              </div>
          <div id='ts-c'>
              <img src={rocker}/>
          </div>
            
          </div>
        </div>
    </>
  )
}

export default FourthBody