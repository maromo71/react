import { Link } from "react-router-dom";

function HomePage() {
 return (
 <div>
     <h1>Sobre Tecnologias</h1>
     <div className="card">
         <p>
             Para aprofundarmos nosso conhecimento sobre desenvolvimento web, criaremos duas páginas informativas abordando as principais tecnologias utilizadas no frontend e no backend. 

         </p>
         <Link className="button-link" to="/front-end">Ir para Front-End</Link>
        <Link className="button-link" to="/back-end">Ir para Back-End</Link>
     </div>
 </div>
 );
}
export default HomePage;
