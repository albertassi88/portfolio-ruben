import React, { useState } from "react";
import ValidationFormEmail from "./ValidationFormEmail";
import '../styles/FormSendEmail.css';

function FormSendEmail() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validMessage, setValidMessage] = useState('');

    return (
       <form onSubmit={(event) => 
            ValidationFormEmail(event, name, email, message, setValidMessage)} 
            className="container-email"
       >
           <div>
                <input 
                    data-testid="form-field-name" 
                    type="text" 
                    placeholder="Nome" 
                    name="name" 
                    onChange={({target}) => setName(target.value)}
                />  
                <input 
                    data-testid="form-field-email"
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    onChange={({target}) => setEmail(target.value)}
                />  
                <textarea 
                    data-testid="form-field-message"
                    type="text" 
                    placeholder="Digite sua mensagem" 
                    name="message" 
                    onChange={({target}) => setMessage(target.value)}
                />                    
                <input 
                    data-testid="form-button-send"
                    className="container-button"               
                    type='submit'
                    value='Enviar'
                />
                <span className="valid-message">{validMessage}</span>
           </div>
       </form>
    )
}

export default FormSendEmail;