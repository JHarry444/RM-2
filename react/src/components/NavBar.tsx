import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../context/contexts";

function NavBar() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className={theme}>
            <Link to="/">Home</Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External Data</Link>
            <Link to="/events">Event Handling</Link>
            <Link to="/state">State</Link>
            <Link to="/trainer">Trainers</Link>
            <Link to="/queryTrainerForm">Query Trainer</Link>
            <button onClick={toggleTheme}>Toggle</button>
        </nav>
    );
}

export default NavBar;