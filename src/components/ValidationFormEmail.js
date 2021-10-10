import SchemaFormEmail from '../schema/SchemaFormEmail';
import emailjs from 'emailjs-com';
import RefreshValidationFormEmail from '../components/RefreshValidationFormEmail';

async function ValidationFormEmail(event, name, email, message, setValidMessage) {
    event.preventDefault();      

    const formValid = await SchemaFormEmail.isValid({name, email, message});
    if (formValid) {
        return emailjs.sendForm(
            'gmailMessage', 
            'template_cozxomj', 
            event.target, 
            'user_EIRqjkcLH8zqdbDx2PnUt'
        )
        .then(() => {
            setValidMessage('Email enviado com sucesso!');
            document.querySelector('.valid-message').style.color = 'green';
            event.target.reset();
            RefreshValidationFormEmail();            
        });            
    }else {
        SchemaFormEmail.validate({name, email, message}).catch((err) => {
            return setValidMessage(err.errors[0]); 
        });
    }
}

export default ValidationFormEmail;