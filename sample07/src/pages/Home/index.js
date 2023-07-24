import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../FirebaseConn";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault();
        if (email !== '' && password !== '') {
            await signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    //navegar para /admin
                    navigate('/admin', { replace: true })
                })
                .catch((e) => {
                    console.log("Erro ao fazer o login: " + e.message);
                })
        } else {
            alert('Preencha todos os campos');
        }

    }
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col"><p className="text-center mt-5">Gerencie sua agenda de forma fácil</p></div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form className="form-control" onSubmit={handleLogin}>
                            <label>E-mail</label>
                            <input
                                className="form-control mb-3" type="text" placeholder="Digite seu e-mail..." value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Senha</label>
                            <input
                                className="form-control mb-3" autoComplete={"false"} type="password" placeholder="************"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="btn btn-primary form-control mb-5" type="submit">Acessar</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6"><p className="text-center">Não possui conta ? <Link className="" to="/register">Registre-se</Link></p></div>
                    <div className="col-3"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}