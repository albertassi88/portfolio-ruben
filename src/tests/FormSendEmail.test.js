import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
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
    test('first click the submit button', async () => {
        const buttonSend = screen.getByTestId('form-button-send');  
        fireEvent.click(buttonSend);  
        await screen.findByText('mensagem obrigatória!');   
    });
    test('write the name and click the send button', async () => {
        const fieldNome = screen.getByTestId('form-field-name');
        fireEvent.change(fieldNome, {target: {value: 'Ruben'}});
        const buttonSend = screen.getByTestId('form-button-send');  
        fireEvent.click(buttonSend);  
        await screen.findByText('mensagem obrigatória!');
    });
    test('write the name and email and click the send button', async () => {
        const fieldNome = screen.getByTestId('form-field-name');
        fireEvent.change(fieldNome, {target: {value: 'Ruben'}});
        const fieldEmail = screen.getByTestId('form-field-email');
        fireEvent.change(fieldEmail, {target: {value: 'albertassi88@gmail.com'}});
        fireEvent.click(screen.getByTestId('form-button-send'));  
        await screen.findByText('mensagem obrigatória!');
    });
    test('write the name and message and click the send button', async () => {
        const fieldNome = screen.getByTestId('form-field-name');
        fireEvent.change(fieldNome, {target: {value: 'Ruben'}});
        const fieldMessage = screen.getByTestId('form-field-message');
        fireEvent.change(fieldMessage, {target: {value: 'Oi, tudo bem?'}});
        fireEvent.click(screen.getByTestId('form-button-send'));  
        await screen.findByText('email obrigatório!');
    });
    test('write the email and message and click the send button', async () => {
        const fieldEmail = screen.getByTestId('form-field-email');
        fireEvent.change(fieldEmail, {target: {value: 'albertassi88@gmail.com'}});
        const fieldMessage = screen.getByTestId('form-field-message');
        fireEvent.change(fieldMessage, {target: {value: 'Oi, tudo bem?'}});
        fireEvent.click(screen.getByTestId('form-button-send'));  
        await screen.findByText('nome obrigatório!');
    });
    test('write the name, email invalid and message and click the send button', async () => {
        const fieldNome = screen.getByTestId('form-field-name');
        fireEvent.change(fieldNome, {target: {value: 'Ruben'}});
        const fieldEmail = screen.getByTestId('form-field-email');
        fireEvent.change(fieldEmail, {target: {value: 'albertassi88@gmail'}});
        const fieldMessage = screen.getByTestId('form-field-message');
        fireEvent.change(fieldMessage, {target: {value: 'Oi, tudo bem?'}});
        fireEvent.click(screen.getByTestId('form-button-send'));  
        await screen.findByText('email inválido!');
    });
    test('write the name, email, message correctly and click the send button', async () => {
        const fieldNome = screen.getByTestId('form-field-name');
        fireEvent.change(fieldNome, {target: {value: 'Ruben'}});
        const fieldEmail = screen.getByTestId('form-field-email');
        fireEvent.change(fieldEmail, {target: {value: 'albertassi88@gmail.com'}});
        const fieldMessage = screen.getByTestId('form-field-message');
        fireEvent.change(fieldMessage, {target: {value: 'Oi, tudo bem?'}});
        fireEvent.click(screen.getByTestId('form-button-send')); 
        await waitFor(() => 
            screen.getByText('Email enviado com sucesso!'),
            {timeout: 3000}
        ); 
    });
});