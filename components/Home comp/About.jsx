'use client'

import { aboutContentVariants, aboutImgContainerVariants } from '@/lib/motions';
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react';

export default function about({content}) {

    const ref = useRef(null)
    const inView = useInView(ref ,{ once: true })

    return ( 
        <div className='about' ref={ref}>
            <div className='img-container'>
                <motion.img  
                    className='img' 
                    src={content.img.sourceUrl}
                    custom={inView}
                    variants={aboutImgContainerVariants}
                    initial={'initial'}
                    animate={'animate'}
                />
            </div>

            <motion.div 
                className='content'
                ref={ref}
                custom={inView}
                variants={aboutContentVariants}
                initial={'initial'}
                animate={'animate'}
            >
                <h3 className='sub-title'>{content.subTitle}</h3>
                <h3 className='title'>{content.titre}</h3>
                <p className='text'>{content.text}</p>
                <a href={content.cta.lien}><button className='cta-btn'><p className='interaction'>{content.cta.text}</p></button></a>
            </motion.div>
        </div>
    )
}