import axios from 'axios';
import React from 'react';

const Nav = ({ loadApiUsers, loadApiPets }) => {
    return (
        <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" >
                <span className="title ">PetMatches.com</span>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item" onClick={ () => loadApiUsers() }><a className='nav-link'>Users</a></li>
                <li className="nav-item" onClick={ () => loadApiPets() }><a className='nav-link'>Pets</a></li>
            </ul>
        </nav>

            // <ul className="nav"> 
            //     <li className="nav-item title"><a href="/">PetMatches.com</a></li>
            //     <li className="nav-item lower" onClick={() => loadApiUsers()}><a>Users</a></li>
            //     <li className="nav-item lower" onClick={() => loadApiPets()}><a>Matches</a></li>
            // </ul>

    )
}

export default Nav;