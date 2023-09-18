'use client'

export function largeDevice (logo){

    return (
        <nav className='navbar'>
            <a href="/" className="imgContainer"><img src={logo} alt='nasloc logo' className='logo'/></a>
            <a href="/contact"><button className='nav-btn'><p className='second-interaction'>Contactez-nous</p></button></a>
        </nav>
    )
}

export default function Navbar ({theme}){
    let logo 
    theme === 'light' ? logo = '/nav-logo-black.svg' : logo = '/nav-logo-light.svg'
    return (
        <nav className='navbar'>
            <a href="/"><img src={logo} alt='nasloc logo' className='logo'/></a>
            <a href="/contact"><button className='nav-btn'><p className='second-interaction'>Contactez-nous</p></button></a>
        </nav>
    )
}