// components are just functions that return JSX
// they must return a single element, but that element can have many children   
import me from '../assets/me.jpg'

function Trainer() {
    // we add () around the JSX to avoid automatic semicolon insertion
    return (
        <div>
            <h3>Trainer</h3>
            <p>Name: JH</p>
            <p>Age: 32</p>
            <p>Specialty: Java</p>
            <img src={me} alt="cheeky chappy" />
        </div>
    );
}

export default Trainer;