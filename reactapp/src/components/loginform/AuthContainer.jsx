import React, { useState } from 'react';
import LoginButton from './login';
import CreateAccountButton from './createaccount';
import './loginform.css';

function AuthContainer() {
    const [showLogin, setShowLogin] = useState(false);
    const [showCreateAccount, setCreateAccount] = useState(false);

    const toggleLogin = () => {
        if (showCreateAccount) setCreateAccount(false);
        setShowLogin(prev => !prev);
    };

    const toggleCreateAccount = () => {
        if (showLogin) setShowLogin(false);
        setCreateAccount(prev => !prev);
    };

    return (
        <div className="auth-container">
            <LoginButton
                toggleLogin={toggleLogin}
                showLogin={showLogin}
            />
            <CreateAccountButton
                toggleCreateAccount={toggleCreateAccount}
                showCreateAccount={showCreateAccount}
            />
        </div>
    );
}

export default AuthContainer;
