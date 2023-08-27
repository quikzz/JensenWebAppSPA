import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginform.css';

function LoginButton({ toggleLogin, showLogin }) {
    return (
        <div>
            <Button variant="outline-dark" onClick={toggleLogin}>
                Logga in
            </Button>
            <div className={`form-container ${showLogin ? 'active' : ''}`}>
                <Login />
            </div>
        </div>
    );
}

function Login({ showCreateAccountForm }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>L�senord</Form.Label>
                <Form.Control type="password" placeholder="L�senord" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Kom ih�g mig" />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
                Logga in
            </Button>
        </Form>
    );
}

export default LoginButton;
