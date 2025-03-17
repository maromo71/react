import { Link } from "react-router-dom";

function Navbar() {
 return (
 <nav>
 <Link to="/">Home</Link>
 <Link to="/front-end">Front-End</Link>
 <Link to="/back-end">Back-End</Link>
 </nav>
 );
}

export default Navbar;
