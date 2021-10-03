import React from 'react';
import Footer from '../components/Footer';
import SendEmail from '../components/SendEmail';
import TitlePages from '../components/TitlePages';
import '../styles/Contacts.css';

function Contacts() {
  return (
    <section>
      <TitlePages title={'Contato'}/>
      <footer className="container-contacts" id="contacts">
        <SendEmail />
        <Footer />      
      </footer>
    </section>
  );
}

export default Contacts;
