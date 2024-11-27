import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar información adicional en Firestore
            await setDoc(doc(db, "usuarios", user.uid), {
                name,
                email,
                uid: user.uid,
            });

            alert("Usuario registrado exitosamente");
        } catch (error) {
            alert("Error al registrar: " + error.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Registro</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <button type="submit">Registrar</button>
        </form>
    );
};

export default Register;
