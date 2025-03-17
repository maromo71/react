import BackButton from "../components/BackButton";

function BackEndPage() {
 return (
   <div className="card">
     <h1>Node.js</h1>
     <p>
         Node.js é uma plataforma de execução de código JavaScript construída sobre o motor JavaScript V8 do Google Chrome.
     </p>
     <a className="button-link" href='https://nodejs.org'>Node.js Site</a>
     <p></p>
    <BackButton />
 </div>
 );
}
export default BackEndPage;
