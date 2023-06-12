import './MovingBanner.scss'

import React, { useEffect, useRef, useState } from 'react'

//import { gsap } from 'gsap'
import { motion, useAnimation } from 'framer-motion'

function MovingBanner({ list, addBullet = false }) {
  //const listRef = useRef(null)

  //   useEffect(() => {
  //     if (!listRef.current) return

  //     const listItems = listRef.current.querySelectorAll('.graphic-list-item')

  //     let tl = gsap.timeline({ repeat: -1, ease: 'linear' })
  //     tl.fromTo(
  //       listItems,
  //       { x: '0%' },
  //       { x: '-100%', duration: 20, ease: 'linear', repeat: 100 }
  //     )

  //     listRef.current.addEventListener('mouseenter', () => {
  //       tl.pause()
  //       //   tl.to(listRef.current.querySelectorAll('.graphic-list-item'), {
  //       //     duration: 0.5,
  //       //     opacity: 0.5,
  //       //     scale: 0.95,
  //       //     ease: 'power3.inOut',
  //       //   })
  //     })

  //     listRef.current.addEventListener('mouseleave', () => {
  //       tl.play()
  //       //   tl.to(listRef.current.querySelectorAll('.graphic-list-item'), {
  //       //     duration: 0.5,
  //       //     opacity: 1,
  //       //     scale: 1,
  //       //     ease: 'power3.inOut',
  //       //   })
  //     })

  //     return () => {
  //       tl.kill()
  //     }
  //   }, [listRef])

  //   const controls = useAnimation()

  //   function startAnimation() {
  //     controls.start({
  //       x: ['-100%', '0%'],
  //       transition: {
  //         duration: 20,
  //         ease: 'linear',
  //         repeat: Infinity,
  //       },
  //     })
  //   }

  //   function stopAnimation() {
  //     controls.stop()
  //   }
  const listRef = useRef(null)
  const controls = useAnimation()

  function startAnimation() {
    // controls.start({
    //   x: ['0%', '-3300%'], // change x-axis values to cover the entire list before repeating
    //   transition: {
    //     duration: 30, // decrease duration to increase speed
    //     ease: 'linear',
    //     repeat: Infinity,
    //     //repeatDelay: 1, // add a delay before repeating the animation
    //   },
    // })
    controls.start({
      x: [`0%`, `-${100}%`], // calculate percentage based on list length
      transition: {
        duration: 30, // decrease duration based on list length
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }

  //console.log(window.screen.width)

  function stopAnimation() {
    controls.stop()
  }

  useEffect(() => {
    if (!listRef.current) return

    // start the animation on mount
    startAnimation()

    // // pause the animation on mouse enter
    // listRef.current.addEventListener('mouseenter', () => {
    //   stopAnimation()
    // })

    // // resume the animation on mouse leave
    // listRef.current.addEventListener('mouseleave', ({ x: current }) => {
    //   startAnimation()
    // })

    // return () => {
    //   // cleanup: remove the event listeners
    //   listRef.current.removeEventListener('mouseenter', stopAnimation)
    //   listRef.current.removeEventListener('mouseleave', startAnimation)
    // }
  }, [])

  return (
    <div className="banner-wrapper" ref={listRef}>
      <div className="banner-content">
        <motion.ul
          className="graphic-list"
          initial={{ x: '0%' }}
          animate={controls}
          transition={{ duration: 8 / list.length, ease: 'linear' }}
        >
          {list.map((item, index) => (
            <li
              key={index}
              className="graphic-list-item"
              style={addBullet ? { listStyle: 'disc' } : {}}
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
    // <div
    //   className="banner-wrapper"
    //   onMouseEnter={stopAnimation}
    //   onMouseLeave={startAnimation}
    // >
    //   <div className="graphic-list" ref={listRef}>
    //     {items.map((item) => (
    //       <motion.div
    //         key={item.id}
    //         className="graphic-list-item"
    //         initial={{ x: '0%' }}
    //         animate={controls}
    //       >
    //         {/* item content */}
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default MovingBanner
