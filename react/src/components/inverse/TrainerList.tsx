import type { Trainer as Trainer } from "../pages/TrainerContainer";

function TrainerList({ trainers }: { trainers: Trainer[] }) {
    return (
        <div>
            {
                trainers.map(trainer => (<div key={trainer.id}>
                    <h3>{trainer.name}</h3>
                    <p>Age: {trainer.age}</p>
                    <p>Specialty: {trainer.specialty}</p>
                </div>))
            }
        </div>
    );
}

export default TrainerList;