import React from 'react';

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                        Bootstrap
                    </a>
                </div>
            </nav>
            <nav className="navbar navbar-dark bg-primary">
                Navbar content
            </nav>
        </div>
    )
}

