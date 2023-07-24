import { useState, useEffect } from "react";
import { auth, db } from "../../FirebaseConn";
import { signOut } from "firebase/auth";
import '../../components/style.css';
import {
    addDoc, collection, onSnapshot,
    query, orderBy, where,
    doc, deleteDoc, updateDoc
} from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Admin() {
    const [tarefaInput, setTarefaInput] = useState('');
    const [user, setUser] = useState({});
    const [tarefas, setTarefas] = useState([]);
    const [edit, setEdit] = useState({});
    useEffect(() => {
        async function loadTarefas() {
            const userDetail = localStorage.getItem("@detailsUser");
            setUser(JSON.parse(userDetail));
            if (userDetail) {
                const data = JSON.parse(userDetail);
                const tarefaRef = collection(db, "tarefas");
                const consulta = query(tarefaRef, orderBy("created", "desc"),where("userUid", "==", data?.uid));
                onSnapshot(consulta, (snapshot) => {
                    let lista = [];
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid,
                        })
                    })
                    setTarefas(lista);
                })
            }
        }
        loadTarefas();
    }, []);
    async function handleRegister(e) {
        e.preventDefault();
        if (tarefaInput === '') {
            alert('Digite sua tarefa');
            return;
        }
        if (edit?.id) {
            handleUpdateTarefa();
            return;
        }
        await addDoc(collection(db, "tarefas"), {
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user?.uid
        }).then(() => {
            console.log("Tarefa registrada");
            setTarefaInput('');
        }).catch((e) => {
            console.log("Erro ao registrar tarega" + e.message);
        });
    }

    async function handleLogout() {
        await signOut(auth);
    }

    async function taskDelete(id) {
        const docRef = doc(db, "tarefas", id);
        await deleteDoc(docRef);
    }
    function taskEdit(item) {
        setTarefaInput(item.tarefa);
        setEdit(item);
    }

    async function handleUpdateTarefa() {
        const docRef = doc(db, "tarefas", edit?.id);
        await updateDoc(docRef, {
            tarefa: tarefaInput
        }).then(() => {
            console.log("tarefa atualizada");
            setTarefaInput('');
            setEdit({});
        }).catch((e) => {
            console.log("erro: " + e.message);
            setTarefaInput('');
            setEdit({});
        });
    }
    return (
        <div>
            <Header />
            <div className="mt-5"><span className="mt-5">&nbsp;</span></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form className="form-control" onSubmit={handleRegister}>
                            <label className="mt-3 mb-2">Sua tarefa</label>
                            <textarea
                                className="form-control mb-3"
                                placeholder="Digite sua tarefa..."
                                value={tarefaInput}
                                onChange={(e) => setTarefaInput(e.target.value)}
                            />
                            {Object.keys(edit).length > 0 ?
                                <button className="form-control btn btn-primary" type="submit">Atualizar Tarefa</button>
                                :
                                <button className="form-control btn btn-success" type="submit">Registrar Tarefa</button>
                            }

                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-3"></div>
                    <div className="col-6"><div className="form-control">
                        {tarefas.map((item) => (
                            <article key={item.id} className="form-control">
                                <p>{item.tarefa}</p>
                                <div>
                                    <button onClick={() => taskEdit(item)} className="btn btn-secondary btn-sm" >Editar</button>&nbsp;
                                    <button onClick={() => taskDelete(item.id)} className="btn btn-danger btn-sm">Concluir</button>
                                </div>
                            </article>
                        ))}
                    </div></div>
                    <div className="col-3"></div>
                </div>
                <button className="btn-logout" onClick={handleLogout}>Sair</button>
            </div>
            <Footer />
        </div>
    );
}