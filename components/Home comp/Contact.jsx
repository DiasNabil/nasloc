'use client'

import { contactSubVariants, contactTextVariants, contactTitleVariants } from '@/lib/motions'
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'

export default function Contact ({content}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <div className='contact'>
            <img className='img' src='/contact-bg.png'/>
            <div className='content'>
                <div className='content-header'>
                    <motion.h3 
                        className='sub-title'
                        custom={inView}
                        variants={contactSubVariants}
                        initial={'initial'}
                        animate={'animate'}
                    >
                        {content.subTitle}
                    </motion.h3>
                    <motion.h2 
                        className='title' 
                        ref={ref}
                        custom={inView}
                        variants={contactTitleVariants}
                        initial={'initial'}
                        animate={'animate'}
                    >
                        {content.titre}
                    </motion.h2>
                </div>
                <motion.div 
                    className='content-text'
                    custom={inView}
                    variants={contactTextVariants}
                    initial={'initial'}
                    animate={'animate'}
                >
                        <p className='text'>{content.text} </p>
                        <a href={content.cta.lien}><button className='cta-btn'><p className='interaction'>{content.cta.text}</p></button></a>
                </motion.div>
            </div>
        </div>
    )
} 