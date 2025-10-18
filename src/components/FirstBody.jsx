import React from 'react'
import firstBg from '../assets/firstBg.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText)
const FirstBody = () => {
    useGSAP(() => {
      gsap.from('#first-body', {
        duration: 1.5,
        delay: 2.5,
        opacity: 0,
        y: 500,
        ease: 'power2.out'
      })
      let textSlipt = SplitText.create('.texts', {type: 'lines'});
      gsap.from(textSlipt.lines, {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.3,
        delay: 3
      })

      gsap.from('.buttons', {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: 'power2.out',
        stagger: 0.3,
        delay: 4
      })
      
  }, [])
  return (
    <>
        <div id='first-body' className='m-auto'>
             <img id='bg-first'  src={firstBg} />
             <div id='task-bar' className='flex items-center'>
              <div id='title' className='flex items-center'>
                <img id='logo'/>
                <h1 className='text-2xl text-blue-50 texts'>ICETIC</h1>
              </div>

              <div id='options' className='text-blue-50'>
                <button className='texts'>Product</button>
                <button className='texts'>Plan & pricing</button>
                <button className='texts'>about us</button>
              </div>

              <select id='language' className='bg-transparent text-blue-300 border border-blue-50 rounded-md p-1 ml-4'>
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
             </div>

             <div id='big-text' className='text-blue-50 text-5xl w-1/2 '>
              <p className='texts'>Find Your Dream Snowboard Here</p>
             </div>

              <div id='small-text' className='text-blue-100 w-1/3 text-x'>
                <p className='texts'>A Quality Snowboard For All Levels,
                  Ready To Take You Through The Snow With Style
                  And Maximum Performance.
                </p>
              </div>

              <div id='buttons' className='w-1/3 flex'>
                <button id='explore' className='w-1/3 h-12 border-1 border-cyan-50 text-blue-50 rounded-3xl buttons'>Explore</button>
                <button id='shop-now' className='w-1/3 bg-blue-100 h-12 border-1 border-cyan-50 text-black rounded-3xl buttons'>Shop Now</button>
              </div>

              
        </div>
    </> 
  )
}

export default FirstBody