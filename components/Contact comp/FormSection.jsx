'use client'

import { useState , useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function FormSection() {

    const formRef = useRef()
    
    const [form , setForm] = useState({
        name:'',
        mail: '',
        phone: '',
        message: '',
    })

    const[loading, setLoading] = useState(false)

    function handleChange(e) {
        setForm(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        emailjs.sendForm(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            formRef.current,
            process.env.PUBLIC_KEY
        ).then((result)=>{
            setLoading(false)
            alert('Merci pour votre message. Nous reviendrons vers vous dans les plus brefs delais.')
            setForm({
                name:'',
                mail: '',
                phone: '',
                message: '',
            })
        }, (error) =>{
            setLoading(false)
            alert('Une erreur est survenue. veuillez réessayer')
            setForm({
                name:'',
                mail: '',
                phone: '',
                message: '',
            })
        })
    }

    return (
        <>
        <form ref={formRef} className='form' onSubmit={handleSubmit}>
            <input className='input' required type='text' placeholder='Votre Nom' onChange={handleChange} name='name' value={form.name}/>
            <input className='input' required type='email' placeholder='Votre Mail' onChange={handleChange} name='mail' value={form.mail}/>
            <input className='input' type='text' placeholder='Votre Numero de Téléphone' onChange={handleChange} name='phone' value={form.phone}/>
            <textarea className='input' rows='5' required placeholder='Votre Message' onChange={handleChange} name='message' value={form.message}/>
            <button className='cta-btn'><p className='interaction'>{loading ? 'envoi...' : 'envoyer'}</p></button>
        </form>
        </>
    )
} 