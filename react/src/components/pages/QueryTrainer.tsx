import { useEffect, useState } from "react";
import type { TrainerType } from "./TrainerContainer";
import Trainer from "../Trainer";
import { useNavigate, useSearchParams } from "react-router";


function QueryTrainer() {

    const [trainer, setTrainer] = useState<TrainerType[]>([]);

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    console.log("Search:", searchParams);
    for (const [key, value] of searchParams.entries()) {
        console.log(`${key}: ${value}`);
    }


    useEffect(() => {
        fetch(`http://localhost:8080/trainers`)
            .then(response => response.json())
            .then(trainers => {
                const trainer = trainers.filter((t: TrainerType) => {
                    if (searchParams.get("name") && t.name.toLowerCase() !== searchParams.get("name")?.toLowerCase()) {
                        return false;
                    }
                    if (searchParams.get("age") && t.age !== Number(searchParams.get("age"))) {
                        return false;
                    }
                    if (searchParams.get("specialty") && t.specialty.toLowerCase() !== searchParams.get("specialty")?.toLowerCase()) {
                        return false;
                    }
                    return true;
                });
                setTrainer(trainer);
            });
    }, [searchParams]);


    return (
        <>
            <h1>Find Trainer</h1>
            {trainer.map((t) => <Trainer key={t.id} {...t} />)}
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}

export default QueryTrainer;