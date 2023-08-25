import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginform.css';

function LoginButton({ toggleLogin, showLogin }) {
    return (
        <div>
            <Button variant="primary" onClick={toggleLogin}>
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
                <Form.Label>Lösenord</Form.Label>
                <Form.Control type="password" placeholder="Lösenord" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Kom ihåg mig" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Logga in
            </Button>
        </Form>
    );
}

export default LoginButton;
