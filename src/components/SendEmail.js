import React, { useState } from "react";
import SchemaForm from '../schema/SchemaForm';
import emailjs from 'emailjs-com';
import ButtonPages from '../components/ButtonPages'; 
import '../styles/SendEmail.css';

function SendEmail() {
    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMensagem] = useState('');
    const [validMessage, setValidMessage] = useState('');

    async function ValidationForm(event) {
        event.preventDefault();        
        SchemaForm.validate({name, email, message}).catch((err) => {
            setValidMessage(err.errors[0]); 
        });
        
        const formValid = await SchemaForm.isValid({name, email, message});
        if (formValid) {
            emailjs.sendForm('gmailMessage', 'template_cozxomj', event.target, 'user_EIRqjkcLH8zqdbDx2PnUt')
            .then((result) => {
                setValidMessage('Email enviado com sucesso!');
                document.querySelector('.valid-message').style.color = 'green';
                event.target.reset();
            });            
        }
    }

    return (
       <form onSubmit={ValidationForm} className="container-email">
           <div>
                <input type="text" placeholder="Nome" name="name" onChange={({target}) => setNome(target.value)}/>  
                <input type="email" placeholder="Email" name="email" onChange={({target}) => setEmail(target.value)}/>  
                <textarea type="text" placeholder="Digite sua mensagem" name="message" onChange={({target}) => setMensagem(target.value)}/>
                <ButtonPages type={'submit'} title={'Enviar'}/>
                <span className="valid-message">{validMessage}</span>
           </div>
       </form>
    )
}

export default SendEmail;