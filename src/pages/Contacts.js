import React from 'react';
import FooterContact from '../components/FooterContact';
import FormSendEmail from '../components/FormSendEmail';
import TitlePages from '../components/TitlePages';
import '../styles/Contacts.css';

function Contacts() {
  return (
    <section>
      <TitlePages title={'Contato'}/>
      <footer className="container-contacts" id="contacts">
        <FormSendEmail />
        <FooterContact />      
      </footer>
    </section>
  );
}

export default Contacts;
