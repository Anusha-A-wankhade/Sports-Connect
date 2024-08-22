import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Sports Connect</h1>
            <div className="navbar-buttons">
                <Link to="/cricket"><button>Cricket</button></Link>
                <Link to="/basketball"><button>Basketball</button></Link>
                <Link to="/football"><button>Football</button></Link>
                <Link to="/volleyball"><button>Volleyball</button></Link>
                <Link to="/kabaddi"><button>Kabaddi</button></Link> {/* Add Kabaddi link */}
            </div>
            <Link to="/admin-login"><button className="admin-button">Admin</button></Link>
        </div>
    );
};

export default Navbar;
