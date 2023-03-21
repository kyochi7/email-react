import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

import styles from './Contact.module.css'

export function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault()

        if(name === '' || email === '' || message === '') {
            toast.warn('Preencha todos os campos!')
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_i19f14u", "template_0ehj2vt", templateParams, "yg1iT7qWQq1LneXkb")
        .then((response)=> {
            toast.success('Email enviado!')
            setName('')
            setEmail('')
            setMessage('')
        }, (error)=> {
            toast.error("Erro:", error)
        } )

    }

    return(
        <div className={styles.contact}>
            <strong>Contato</strong>
            <form className={styles.formContact} onSubmit={sendEmail} action="">
                <input
                  type="text"
                  placeholder='Digite seu nome'
                  onChange={(e)=> setName(e.target.value)} 
                  value={name}
                />
                <input 
                  type="email" 
                  placeholder='Digite seu email' 
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                />
                <textarea
                  placeholder='Digite sua mensagem...'
                  onChange={(e)=> setMessage(e.target.value)} 
                  value={message}
                />
                <button>Enviar</button>
            </form>
        </div>
    )
}