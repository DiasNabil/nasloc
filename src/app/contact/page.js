import '@/styles/contact.css'
import '@/styles/responsiveGlobal.css'
import '@/styles/responsiveContact.css'


import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getContactPage } from '@/lib/query'
import FormSection from '@/components/Contact comp/FormSection'

export default async function Contact () {
    let theme = 'dark'
    const page = await getContactPage(81)

    const hero = page.contentSection[0]
    const content = page.contentSection[1]



    return (
        <>
        <div className='hero'>
            <Navbar theme = {theme}/>
            <div className='content'>
                <h1 className='title'>{hero.titre}</h1>
                <p className='text'>{hero.text}</p>
            </div>
        </div>
        <div className='formSection'>
            <div className='content'>
                <h2 className='title'> {content.titre} </h2>
                <p className='text'> {content.text} </p>
            </div>
            <FormSection/>
        </div>
        <Footer theme={theme}/>
        </>
    )
}