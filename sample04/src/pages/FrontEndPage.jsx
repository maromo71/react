import BackButton from "../components/BackButton";

function FrontEndPage() {
 return (
     <div className="card">
         <h1>React.js</h1>
         <p>
            React.js, ou simplesmente React, é uma biblioteca JavaScript de código aberto para construção de interfaces deusuário, desenvolvida pelo Facebook.
        </p>

        <a className="button-link" href='https://reactjs.org'>React.js - Site</a>
        <p></p>
        <BackButton />
 </div>
 );
}
export default FrontEndPage;
