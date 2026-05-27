import { useContext } from "react";
import type { Trainer as Trainer } from "../pages/TrainerContainer";
import ThemeContext from "../../context/contexts";

function TrainerList({ trainers }: { trainers: Trainer[] }) {

    const { theme } = useContext(ThemeContext);
    return (
        <div>
            {
                trainers.map(trainer => (<div key={trainer.id} className={theme}>
                    <h3>{trainer.name}</h3>
                    <p>Age: {trainer.age}</p>
                    <p>Specialty: {trainer.specialty}</p>
                </div>))
            }
        </div>
    );
}

export default TrainerList;