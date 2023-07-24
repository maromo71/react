import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-pastel-nav fixed-top">
            <div className="container">
                <p className="navbar-brand text-center w-100">Lista de Tarefas</p>    
           </div>
        </nav>
    );
}