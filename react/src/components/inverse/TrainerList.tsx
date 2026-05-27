import { useContext, useState } from "react";
import type { TrainerType as TrainerType } from "../pages/TrainerContainer";
import { ThemeContext } from "../../context/contexts";
import { useNavigate } from "react-router";

function TrainerList({ trainers }: { trainers: TrainerType[] }) {

    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const [filter, setFilter] = useState(localStorage.getItem("trainerFilter") || "");


    return (
        <div>
            <input
                type="text"
                placeholder="Search trainers..."
                value={filter}
                onChange={(e) => {
                    const newFilter = e.target.value;
                    setFilter(newFilter);
                    localStorage.setItem("trainerFilter", newFilter);
                }}
            />
            {
                trainers.filter(trainer => trainer.name.toLowerCase().startsWith(filter.toLowerCase())).map(trainer => (
                    <div key={trainer.id} className={`trainer ${theme}`} onClick={() => navigate(`/findTrainer/${trainer.id}`)}>
                        <h3>{trainer.name}</h3>
                        <p>Age: {trainer.age}</p>
                        <p>Specialty: {trainer.specialty}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default TrainerList;