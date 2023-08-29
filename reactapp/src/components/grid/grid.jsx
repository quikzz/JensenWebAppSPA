import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';

import Navigationbar from '@/components/navbar/navbar.jsx'
import Ads from '@/components/ads/adScript.jsx'
import Footer from '@/components/footer/footer.jsx'
import App from '@/App.jsx'

function Grid() {
    return (
        <div className="app-container">
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Navigationbar />
                </Navbar.Brand>
            </Navbar>

            <Container fluid>
                <Row className="content-row">
                    <Col md={2} className="left-panel">
                        <Ads />
                    </Col>
                    <Col md={8} className="main-panel">
                        <App />

                    </Col>
                    <Col md={2} className="right-panel">
      
                    </Col>
                </Row>
            </Container>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Grid;