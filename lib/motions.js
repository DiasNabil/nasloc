

const easing = [0.5, 0.05, 0.25, 0.95]
const size = typeof window !== 'undefined' && window.innerWidth
export const isMobile = size <= 800 ? true : false



    export const heroVariants = isMobile ? { initial:{y: '0' , opacity: 1} }  : {
        initial:{y: '100%' , opacity: 0},
        animate:{
            y: 0 ,
            opacity: 1,
            transition:{ duration: 2, ease: easing , delay: 0.1 }
        },
    }

    export const colorBlackVariants = isMobile ? 
    
    { initial: { height: '50%' } } :
    {
        initial: { height: '20%' },
        animate: inView => ({ 
            height : inView ?  '50%' : '20%',
            transition:{duration: 2}
        }),
    }

    export const serviceHeaderVariants  = isMobile ?
    
    { initial:{y: 0 , opacity: 1}, } : 
    {
        initial:{y: 200 , opacity: 0},
        animate:inView => ({
            y: inView ? 0 : 100,
            opacity: inView ? 1 : 0,
            transition:{ duration: 2, ease: easing }
        }),
        
    }

    export const serviceCardVariants = isMobile ? 
    
    { initial:{y: 0 , opacity: 1}, } :
    {
        initial:{y: 800 , opacity: 0},
        animate:inView =>({
            y: inView ? 0 : 800,
            opacity: inView ? 1 : 0,
            transition:{ duration: 2, ease: easing }
        })
    }

export const serviceDetailVariants = isMobile ? 

{ initial:{y: 0 , opacity: 1 , translate: '-50%'}, } :
{
    initial:{y: 100 , opacity: 0 , translate: '-50%'},
    animate:inView => ({
        y: inView ? 0 : 100,
        opacity: inView ? 1 : 0,
        transition:{ duration: 4, ease: easing }
    })
}

export const aboutImgContainerVariants = isMobile ? 
{ initial:{height: '100%'}, } :
{
    initial:{height: '1vh'},
    animate:inView => ({
        height: inView ?  '100%': '1vh',
        transition:{ duration: 1, ease: easing }
    })
}

export const aboutContentVariants = isMobile ? 

{ initial:{y: 0 , opacity: 1}, } :
{
    initial:{y: '100%' , opacity: 0},
    animate:inView => ({
        y: inView ? 0 : '100%' ,
        opacity: inView ? 1 : 0,
        transition:{ duration: 2, ease: easing}
})
}


export const contactTextVariants = isMobile ? 
{ initial : {y: 0 , opacity: 1}} :
{
    initial:{y: '100%' , opacity: 0},
    animate:inView => ({
        y: inView ? 0 : '100%' ,
        opacity: inView ? 1 : 0,
        transition:{ duration: 3, ease: easing}
})
}


export const contactTitleVariants = isMobile ? 
{ initial : {x: 0 , opacity: 1}} :
{
    initial:{x: '100%' , opacity: 0},
    animate:inView => ({
        x: inView ? 0 : '100%' ,
        opacity: inView ? 1 : 0,
        transition:{ duration: 3, ease: easing}
})
}

export const contactSubVariants = isMobile ? 
{ initial : {x: 0 , opacity: 1}} :
{
    initial:{x: '-100%' , opacity: 0},
    animate:inView => ({
        x: inView ? 0 : '-100%' ,
        opacity: inView ? 1 : 0,
        transition:{ duration: 3, ease: easing}
})
}


