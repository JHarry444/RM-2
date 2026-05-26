import { Link } from "react-router";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External Data</Link>
            <Link to="/events">Event Handling</Link>
            <Link to="/state">State</Link>
            <Link to="/trainer">Trainers</Link>
        </nav>
    );
}

export default NavBar;