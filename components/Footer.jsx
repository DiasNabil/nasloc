import { getContactInfo } from '@/lib/query'

export default async function Footer ({theme}) {

    let logo 
    let icon 
    const data = await getContactInfo(84)
    const info = data.contactInfo
    
    if(theme === 'dark'){
        logo = '/nav-logo-light.svg'
        icon = '-white'
    }else{
        logo = '/nav-logo-black.svg'
        icon = ''
    }
    
    return (
        <div className={`footer ${theme}`}>
            <div className='content'>
                <a href="/"><img className='logo' src={logo}/></a>
                <div className='lists'>
                    <ul className='list'>
                        <p className='sub-title'>nous contacter</p>
                        <div className='underline'></div>
                        {
                            info.numeros.map(e => {
                                return (
                                    <li className='li'>
                                        <img className='icon' src={`/icon-call${icon}.svg`}/>
                                        <p className='text'>{e.numero}</p>
                                    </li>
                                )
                            })
                        }
                        {
                            info.mails.map(e => {
                                return (
                                    <li className='li'>
                                        <img className='icon' src={`/icon-mail${icon}.svg`}/>
                                        <p className='text'>{e.mail}</p>
                                    </li>
                                )
                            })
                        }

                        {
                            info.locations.map(e => {
                                return (
                                    <li className='li'>
                                        <img className='icon' src={`/icon-loc${icon}.svg`}/>
                                        <p className='text'>{e.location}</p>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                    <ul className='list'>
                        <p className='sub-title'>nos services</p>
                        <div className='underline'></div>
                        <li className='li'>
                            <p className='text'>Location</p>
                        </li>
                        <li className='li'>
                            <p className='text'>Vente</p>
                        </li>
                        <li className='li'>
                            <p className='text'>Assistances</p>
                        </li>
                    </ul>
                    <ul className='list'>
                        <p className='sub-title'>nous découvrir</p>
                        <div className='underline'></div>
                        <li className='li'>
                            <p className='text'>A propos de nous</p>
                        </li>
                        <li className='li'>
                            <p className='text'>Mentions légales</p>
                        </li>
                        <li className='li'>
                            <p className='text'>CGL</p>
                        </li>
                        <li className='li'>
                            <p className='text'>CGU</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <p className='text'>NAS-LOC SARL © Tous droits réservés 2023</p>
        </div>
    )
}