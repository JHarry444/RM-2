import { Link } from "react-router";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External Data</Link>
        </nav>
    );
}

export default NavBar;