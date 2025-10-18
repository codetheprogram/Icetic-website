import React from 'react'
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import secondBgA from '../assets/secondBgA.jpg'
import secondBgB from '../assets/secondBgB.jpg'
import secondBgC from '../assets/secondBgC.jpg'
import vidBg from '../assets/vidBg.mp4'
import vidBgA from '../assets/vidBgA.mp4'


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const SecondBody = () => {
    const refA = useRef(null);
    useGSAP(()=>{
        let textSliptA = SplitText.create('.sbh', {type: 'lines'});
        gsap.from(textSliptA.lines,  {
        scrollTrigger: {
        trigger: textSliptA.lines,
        scrub: 1, // Links the animation to the scroll position
        start: "top bottom",
        end: "top top",
      },
      duration: 1,
      stagger: 0.3,
        opacity: 0 
    })
    gsap.to('#vidBg',  {
        scrollTrigger: {
        trigger: '#vidBg',
         // Links the animation to the scroll position
        start: "buttom bottom",
        end: "bottom buttom",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      scrub: 1,
        width: '100%',
        height: 'auto' 
    })

    gsap.from('.s-con',  {
        scrollTrigger: {
        trigger: '.s-con',
        scrub: 1, // Links the animation to the scroll position
        start: "top bottom",
        end: "top top",
      },
      duration: 1,
      stagger: 0.3,
       y: 150,
    })

    gsap.from('.s-img',  {
        scrollTrigger: {
        trigger: '.s-img',
        scrub: 1, // Links the animation to the scroll position
        start: "top bottom",
        end: "top top",
      },
      duration: 1,
      stagger: 0.3,
       scale: 1.5
    })
    },[])

     const [videoSrc, setVideoSrc] = useState(''); // Initial empty source

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth < 768) { // Example breakpoint for smaller screens
        setVideoSrc(vidBgA);
      } else {
        setVideoSrc(vidBg);
      }
    };

    // Set initial video source on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <div id='second-body' ref={refA} className='m-auto'>
            <div id='second-body-head-texts' className='w-1/4 h-52'>
                <h1 className='text-4xl sbh'>Snowboard In Action</h1>
                <p className='font-normal sbh' >Experience The Thrill Of Snowboarding Through These Stunning Moments</p>
            </div>

            <div id='second-body-image-containterA' className='w-1/3 s-con'>
            <div className='overflow-hidden'>
                <img className='w-full s-img' src={secondBgA} />
                </div>
                <h2 id='second-small-heading' className='text-xl font-medium h-10 s-head'>
                    Beginner's First Ride
                </h2>
                <p id='second-small-text' className='s-p'>
                    start your journey with confidence and style, mastering the basics on our beginner-friendly snowboard.
                </p>
            </div>
            <div id='second-body-image-containterB' className='w-1/5 s-con'>
            <div className='overflow-hidden'>
                <img className='w-full s-img' src={secondBgB} />
                </div>
                <h2 id='second-small-heading' className='text-xl font-medium h-10 s-head'>
                    Gravity Defying Tricks
                </h2>
                <p id='second-small-text s-p' className='s-p'>
                    Elevate your snowboarding skills with our high-performance board, designed for executing jaw-dropping tricks and stunts.
                </p>
            </div>
            <div id='second-body-image-containterC' className='w-1/4 s-con'>
            <div className='overflow-hidden'>
                <img className='w-full s-img' src={secondBgC} />
                </div>
                <h2 id='second-small-heading' className='text-xl font-medium h-10 s-head'>
                    Friend On Slopes
                </h2>
                <p id='second-small-text' className='s-p'>
                    Share the excitement of snowboarding with friends, creating unforgettable memories on the slopes together.
                </p>
            </div>

        <div id='second-body-image-containterD' className=' s-con'>
            <div id='vidBg'>
            {videoSrc && ( // Only render video if a source is available
        <video  autoPlay muted loop key={videoSrc} >
          <source  src={videoSrc} type="video/mp4" />
</video>
      )}</div>
            </div>
            
        </div>
    </>
  )
}

export default SecondBody