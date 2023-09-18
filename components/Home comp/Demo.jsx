'use client'

import { isMobile } from '@/lib/motions'
import {motion ,  cubicBezier,  useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Demo({content}) {

    let imgStyle = (width , height)=>{
        return {
            width: `${width}vw`,
            height: `${height}vw`
        }
    }

    const scrollRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ['start end' , 'end end']
    })
    const xUp = useTransform(scrollYProgress, [0,1], ['100%', '0%'], {ease: cubicBezier(.53,0,.69,.82)})
    const xDown = useTransform(scrollYProgress, [0,1], ['-100%', '0%'], {ease: cubicBezier(.53,0,.69,.82)})
    const gap = useTransform(scrollYProgress, [0,1] , [ '10vw' , '0.5vw'], {ease: cubicBezier(.53,0,.69,.82)})


    return (
        <section className='demoSection' ref={scrollRef}>
            <motion.div 
                className='subDemo demoUp'
                key={'demoUp'}
                style={{x:isMobile ? 0 :  xUp , gap: isMobile ? '0.5vw' : gap}}
            >
                <div className='demoContainer' style={imgStyle(25 , 16)}>
                    <img className='demoImg'  src={content[0].sourceUrl}/>
                </div>
                <div className='demoContainer' style={imgStyle(10 , 10)} >
                    <img className='demoImg'  src={content[1].sourceUrl}/>
                </div>
                <div className='demoContainer' style={imgStyle(16 , 16)} >
                    <img className='demoImg'  src={content[2].sourceUrl}/>
                </div>
                <div className='demoContainer' style={imgStyle(20 , 12)} >
                    <img className='demoImg'  src={content[3].sourceUrl}/>
                </div>
            </motion.div>

            <motion.div 
                className='subDemo demoDown'
                key={'demoDown'}
                style={{x:isMobile ? 0 :  xDown , gap: isMobile ? '0.5vw' : gap}}
            >
            <div className='demoContainer' style={imgStyle(20 , 12)} >
                <img className='demoImg'  src={content[4].sourceUrl}/>
            </div>
            <div className='demoContainer' style={imgStyle(25 , 16)} >
                <img className='demoImg'  src={content[5].sourceUrl}/>
            </div>
            <div className='demoContainer' style={imgStyle(10 , 10)} >
                <img className='demoImg'  src={content[6].sourceUrl}/>
            </div>
            <div className='demoContainer' style={imgStyle(20 , 16)} >
                <img className='demoImg'  src={content[7].sourceUrl}/>
            </div>
            </motion.div>
        </section>
    )
}