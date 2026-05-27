import { useRef, useState } from "react";
import type { TrainerType } from "../pages/TrainerContainer";

function TrainerForm({ setTrainers }: { setTrainers: React.Dispatch<React.SetStateAction<TrainerType[]>> }) {
    const [newTrainer, setNewTrainer] = useState({
        name: "",
        age: 0,
        specialty: ""
    });


    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("New Trainer:", newTrainer);
        // Here you would typically send the new trainer data to a server
        setTrainers(prevTrainers => [...prevTrainers, newTrainer]);
        setNewTrainer({ name: "", age: 0, specialty: "" }); // Reset form after submission
        nameRef.current?.focus(); // Focus the name input after submission

        try {
            const response = await fetch("http://localhost:8080/trainers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTrainer)
            });

            if (response.status === 201) {
                console.log("Trainer added successfully");
            } else {
                console.error("Failed to add trainer");
            }
        } catch (error) {
            console.error("Error adding trainer:", error);
        }
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
            <p>{new Date().toISOString()}</p>
        </div>
    );
}

export default TrainerForm;