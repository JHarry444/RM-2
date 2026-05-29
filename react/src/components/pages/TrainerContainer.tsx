import { useEffect, useState } from "react";
import TrainerForm from "../inverse/TrainerForm";
import TrainerList from "../inverse/TrainerList";
export type TrainerType = {
    id?: number;
    name: string;
    age: number;
    specialty: string;
};


function TrainerContainer() {
    const [trainers, setTrainers] = useState<TrainerType[]>([]);

    const fetchTrainers = () => {
        fetch("http://localhost:8080/trainers")
            .then(response => response.json())
            .then(data => setTrainers(data));
    }

    // useEffect to fetch trainers when the component mounts
    // the [] means it will only run once when the component mounts
    // effectively simulating componentDidMount
    useEffect(() => {
        const trainerInterval = setInterval(fetchTrainers, 5_000); // fetch every 5 seconds

        // fetch immediately on mount
        fetchTrainers();
        // a function returned from useEffect is used for cleanup, so we clear the interval when the component unmounts
        return () => clearInterval(trainerInterval); // cleanup on unmount
    }, []);


    return (
        <>
            <h1>Trainer Container</h1>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <TrainerForm setTrainers={setTrainers} />
                <TrainerList trainers={trainers} />
            </div>
        </>

    );
}

export default TrainerContainer;