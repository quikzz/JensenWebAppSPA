import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginform.css';



function CreateAccountButton({ toggleCreateAccount, showCreateAccount }) {
    return (
        <div>
            <Button variant="primary" onClick={toggleCreateAccount}>
                Skapa konto
            </Button>
            <div className={`form-container ${showCreateAccount ? 'active' : ''}`}>
                <CreateAccount />
            </div>
        </div>
    );
}

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
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lösenord</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Lösenord"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bekräfta lösenord</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Bekräfta lösenord"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Godkänn villkoren" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Skapa konto
            </Button>
        </Form>
    );
}

export default CreateAccountButton;
