'use client'

import {motion} from 'framer-motion'
import Link from 'next/link'
import { heroVariants } from '@/lib/motions'



export default function Hero({content}) {

    let imgBg = (url)=>{
        return {
            backgroundImage: `url(${url})` ,
        }
    }



    return (
        <div className='hero-container'>
        <motion.section
            key={'hero'} 
            variants={heroVariants}
            initial={'initial'}
            animate={'animate'}
            className='hero'
        >
            <div className='hero-text'>
                <h1 className='title'>
                    {content.titre}
                </h1>
                <p className='text'>
                    {content.text}
                </p>
                <Link href={content.cta.lien}><button className='cta-btn'> <p className='interaction'>{content.cta.text}</p></button></Link>
            </div>
            <div  className='img' style={imgBg(content.img.sourceUrl)}></div>
        </motion.section>
        </div>
    )
}