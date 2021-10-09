import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormSendEmail from '../components/FormSendEmail';

describe('test the FormSendEmail component', () => {
    beforeEach(() => {
        render(<FormSendEmail />);
    });
    test('write the name in the input', () => {
        const fieldNome = screen.getByTestId('form-field-name');
        fireEvent.change(fieldNome, {target: {value: 'Ruben'}});
        expect(fieldNome.value).toEqual('Ruben');
    });
    test('write the email in the input', () => {
        const fieldEmail = screen.getByTestId('form-field-email');
        fireEvent.change(fieldEmail, {target: {value: 'albertassi88@gmail.com'}});
        expect(fieldEmail.value).toEqual('albertassi88@gmail.com');
    });
    test('write the message in the input', () => {
        const fieldMessage = screen.getByTestId('form-field-message');
        fireEvent.change(fieldMessage, {target: {value: 'Oi, tudo bem?'}});
        expect(fieldMessage.value).toEqual('Oi, tudo bem?');
    });
    test('check the submit button', () => {
        const buttonSend = screen.getByTestId('form-button-send');  
        expect(buttonSend.value).toEqual('Enviar'); 
    });
    test('click the submit button', () => {
       
    });
});