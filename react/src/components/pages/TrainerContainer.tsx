import { useState } from "react";
import TrainerForm from "../inverse/TrainerForm";
import TrainerList from "../inverse/TrainerList";
export type Trainer = {
    id: number;
    name: string;
    age: number;
    specialty: string;
};


function TrainerContainer() {
    const [trainers, setTrainers] = useState<Trainer[]>([{ id: 1, name: "JH", age: 32, specialty: "Java" }]);
    return (
        <>
            <h1>Trainer Container</h1>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <TrainerForm setTrainers={setTrainers} />
                <TrainerList trainers={trainers} />
            </div>
        </>

    );
}

export default TrainerContainer;