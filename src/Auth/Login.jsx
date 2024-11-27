import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"
import Productos from "../Productos";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert("Inicio de sesión exitoso");

            navigate("/Productos")
        } catch (error) {
            alert("Error al iniciar sesión: " + error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Iniciar Sesión</button>
            <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </form>
    );
};

export default Login;
