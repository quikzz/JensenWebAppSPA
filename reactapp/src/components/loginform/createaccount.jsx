import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginform.css';



function CreateAccountButton({ toggleCreateAccount, showCreateAccount }) {
    return (
        <div>
            <Button variant="outline-dark" onClick={toggleCreateAccount}>
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
                <Form.Label>L�senord</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="L�senord"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bekr�fta l�senord</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Bekr�fta l�senord"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Godk�nn villkoren" />
            </Form.Group>

            <Button variant="outline-dark" type="submit">
                Skapa konto
            </Button>
        </Form>
    );
}

export default CreateAccountButton;
