import trainers from '../data/trainers.json';
import Trainer from './Trainer';


function ExternalData() {
    return (
        <div>
            <h1>External Data</h1>
            {
                trainers.map((trainer) => (
                    <Trainer
                        key={trainer.name}
                        name={trainer.name}
                        age={trainer.age}
                        specialty={trainer.specialty}
                    />))
            }
        </div>
    )
}

export default ExternalData;