'use client'

import {motion, useInView} from 'framer-motion'
import {Swiper , SwiperSlide} from 'swiper/react';
import {EffectCoverflow , Navigation } from 'swiper/modules';
import { ArrowBackCircleSharp , ArrowForwardCircleSharp } from 'react-ionicons'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


import ServicesCard from './ServicesCard'
import { colorBlackVariants , serviceHeaderVariants } from '@/lib/motions';
import { useRef } from 'react';

export default function Services({content }){
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <section className='services'>
            <motion.div 
                className='color-block'
                key={'block'}
                custom={inView}
                variants={colorBlackVariants}
                initial={'initial'}
                animate={'animate'}
            >
            </motion.div>
            <motion.div 
                className='service-header' 
                ref={ref}
                key={'header'}
                custom={inView}
                variants={serviceHeaderVariants}
                initial={'initial'}
                animate={'animate'}
            >
                <h3 className='sub-title'>{content.subTitle}</h3>
                <h2 className='title'>{content.titre}</h2>
            </motion.div>  
            <div 
                className='serviceCards'
            >
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={'2'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows: false,
                }}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow ,  Navigation ]}
                className="mySwiper"
            >
                {
                    content.service.map((info , index) => {

                        return (
                            <SwiperSlide key={index}>
                            <ServicesCard 
                                info={info}
                                inView={inView}
                            />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>
            <div className='slider-controler'
            >
                <div className='slider-arrow swiper-prev'>
                    <ArrowBackCircleSharp
                        style={{
                            fill: '#F9EDED',
                            height: '4vw',
                            width: '4vw'
                        }}
                    />    
                </div>
                <div className='slider-arrow swiper-next'>
                    <ArrowForwardCircleSharp
                        style={{
                            fill: '#F9EDED',
                            height: '4vw',
                            width: '4vw'
                        }}
                    />
                </div>
            </div>
        </section>
    )
}