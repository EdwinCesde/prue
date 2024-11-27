import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <nav>
            <h1>Menú</h1>
            <ul>
                <li>
                    <Link to="/register">
                        <button>Registro</button>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
