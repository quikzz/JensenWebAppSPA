import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login({ toggleCreateAccount }) {

    const email = '';
    const password = '';

    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingPassword"
                label="Lösenord"
                className="mb-3"
            >
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Button variant="outline-primary" type="submit">
                Logga in
            </Button>

            <Button variant="outline-secondary" onClick={toggleCreateAccount}>
                Skapa konto
            </Button>
        </>
    );
}

export default Login;
