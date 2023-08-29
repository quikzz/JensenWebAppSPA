import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

function CreateAccount() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log(formData);  // Log the formData for now.
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FloatingLabel
                controlId="floatingInputEmail"
                label="Email"
                className="mb-3"
            >
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInputPassword"
                label="Lösenord"
                className="mb-3"
            >
                <Form.Control
                    type="password"
                    placeholder="Lösenord"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingConfirmPassword"
                label="Bekräfta lösenord"
                className="mb-3"
            >
                <Form.Control
                    type="password"
                    placeholder="Bekräfta lösenord"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </FloatingLabel>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Godkänn villkoren" />
            </Form.Group>

            <Button variant="outline-primary" type="submit">
                Skapa konto
            </Button>
            <Button variant="outline-dark" type="button">
                Avbryt
            </Button>
        </Form>
    );
}

export default CreateAccount;
