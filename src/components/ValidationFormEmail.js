import SchemaFormEmail from '../schema/SchemaFormEmail';
import emailjs from 'emailjs-com';

async function ValidationFormEmail(event, name, email, message, setValidMessage) {
    event.preventDefault();        
    SchemaFormEmail.validate({name, email, message}).catch((err) => {
        setValidMessage(err.errors[0]); 
    });
    
    const formValid = await SchemaFormEmail.isValid({name, email, message});
    if (formValid) {
        emailjs.sendForm(
            'gmailMessage', 
            'template_cozxomj', 
            event.target, 
            'user_EIRqjkcLH8zqdbDx2PnUt'
        )
        .then(() => {
            setValidMessage('Email enviado com sucesso!');
            document.querySelector('.valid-message').style.color = 'green';
            event.target.reset();
        });            
    }
}

export default ValidationFormEmail;