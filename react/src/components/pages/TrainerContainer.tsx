import { useEffect, useState } from "react";
import TrainerForm from "../inverse/TrainerForm";
import TrainerList from "../inverse/TrainerList";
export type Trainer = {
    id?: number;
    name: string;
    age: number;
    specialty: string;
};


function TrainerContainer() {
    const [trainers, setTrainers] = useState<Trainer[]>([]);

    const fetchTrainers = () => {
        fetch("http://localhost:8080/trainers")
            .then(response => response.json())
            .then(data => setTrainers(data));
    }

    // useEffect to fetch trainers when the component mounts
    // the [] means it will only run once when the component mounts
    // effectively simulating componentDidMount
    useEffect(() => {
        fetchTrainers();
    }, []);


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