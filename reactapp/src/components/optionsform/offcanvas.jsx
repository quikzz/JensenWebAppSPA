import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DarkMode from '@/components/darkmode/DarkMode.jsx';
import AuthContainer from '@/components/loginform/AuthContainer.jsx';

import './offcanvas.css';

function Settings() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Inställningar
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Inställningar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li><DarkMode /></li>
                        <li><AuthContainer /></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Settings;