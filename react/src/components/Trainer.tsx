// components are just functions that return JSX
// they must return a single element, but that element can have many children   

type TrainerProps = {
    name: string;
    age: number;
    specialty: string;
    image?: string; // optional prop
}

function Trainer({ name, age, specialty, image }: TrainerProps) {
    // we add () around the JSX to avoid automatic semicolon insertion

    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
            {image && <img src={image} alt={name} />}
        </div>
    );

}

export default Trainer;