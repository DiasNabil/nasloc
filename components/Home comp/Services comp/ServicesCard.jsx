'user client'

import { serviceCardVariants, serviceDetailVariants } from '@/lib/motions'
import {motion} from 'framer-motion'

export default function ServicesCard({info , inView}){

    return (
        <motion.div className='serviceCard'
            key={'card'}
            custom={inView}
            variants={serviceCardVariants}
            initial={'initial'}
            animate={'animate'}
        >
            <img className='serviceImg' src={info.img.sourceUrl}/>
            <motion.div 
                className='serviceDetails glass'
                key={'detail'}
                custom={inView}
                variants={serviceDetailVariants}
                initial={'initial'}
                animate={'animate'}
            >
                <p className='text type'>{info.subTitle}</p>
                <h3 className='text service-title'>{info.titre}</h3>
                <p className='text desc'>{info.text}</p>
            </motion.div>
        </motion.div>
    )
}