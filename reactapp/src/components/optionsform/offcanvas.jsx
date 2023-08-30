import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'
import Login from '@/components/loginform/login.jsx';
import CreateAccount from '@/components/loginform/createaccount.jsx';

import './offcanvas.css'

function OffCanvasLogin() {
    const [show, setShow] = useState(false);
    const [showCreateAccount, setShowCreateAccount] = useState(false);

    const handleClose = () => {
        setShow(false);
        setShowCreateAccount(false);  // Reset to show Login by default
    };

    const handleShow = () => setShow(true);

    const toggleCreateAccount = () => setShowCreateAccount(!showCreateAccount);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Logga in
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        {showCreateAccount ? 'Skapa konto' : 'Logga in'}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="form-container">
                        <div className={`form-content ${showCreateAccount ? 'hide' : 'show'}`}>
                            <Login toggleCreateAccount={toggleCreateAccount} />
                        </div>
                        <div className={`form-content ${showCreateAccount ? 'show' : 'hide'}`}>
                            <CreateAccount />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasLogin;
