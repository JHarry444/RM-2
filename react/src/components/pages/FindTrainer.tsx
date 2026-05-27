import { useEffect, useState } from "react";
import type { TrainerType } from "./TrainerContainer";
import Trainer from "../Trainer";
import { useNavigate, useParams } from "react-router";


function FindTrainer() {

    const [trainer, setTrainer] = useState<TrainerType | null>(null);

    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:8080/trainers/${id}`)
            .then(response => response.json())
            .then(data => setTrainer(data));
    }, [id]);


    return (
        <>
            <h1>Find Trainer</h1>
            {trainer ? <Trainer {...trainer} /> : <p>Loading...</p>}
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}

export default FindTrainer;