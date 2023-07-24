import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../Header";
import Footer from "../Footer";
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleRegister(e) {
        e.preventDefault();
        if (email !== '' && password !== '') {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate('/admin', { replace: true });
                })
                .catch((e) => {
                    console.log("Aconteceu o erro: " + e.message);
                })
        } else {
            alert('Preencha todos os campos');
        }

    }
    return (
        <div>
            <Header />
            <span className="mt-5">&nbsp;</span>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-2"></div>
                    <div className="col-8"><h4 className="text-center">Cadastre-se</h4>
                        <span className="text-center"><p>Vamos criar sua conta</p></span>
                        <form className="form-control" onSubmit={handleRegister}>
                            Seu e-mail:
                            <input
                                className="form-control mb-3" type="text" placeholder="Digite seu e-mail..." value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            Sua senha:
                            <input
                                className="form-control mb-3" autoComplete={'false'} type="password" placeholder="************"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="btn btn-primary" type="submit">Cadastrar</button>
                        </form></div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <p className="text-center"><Link to="/">Já possui uma conta ? Faça o login</Link></p>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}