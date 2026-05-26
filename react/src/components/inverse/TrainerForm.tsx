import { useRef, useState } from "react";
import type { Trainer } from "../pages/TrainerContainer";

function TrainerForm({ setTrainers }: { setTrainers: React.Dispatch<React.SetStateAction<Trainer[]>> }) {
    const [newTrainer, setNewTrainer] = useState({
        name: "",
        age: 0,
        specialty: ""
    });


    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("New Trainer:", newTrainer);
        // Here you would typically send the new trainer data to a server
        setTrainers(prevTrainers => [...prevTrainers, { id: prevTrainers.length + 1, ...newTrainer }]);
        setNewTrainer({ name: "", age: 0, specialty: "" }); // Reset form after submission
        nameRef.current?.focus(); // Focus the name input after submission
    }

    const nameRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={newTrainer.name}
                    onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
                    required
                    ref={nameRef}
                />
                <br />
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={newTrainer.age}
                    onChange={(e) => setNewTrainer({ ...newTrainer, age: Number(e.target.value) })}
                    required
                />
                <br />
                <label htmlFor="specialty">Specialty</label>
                <input
                    type="text"
                    id="specialty"
                    name="specialty"
                    value={newTrainer.specialty}
                    onChange={(e) => setNewTrainer({ ...newTrainer, specialty: e.target.value })}
                    required
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TrainerForm;