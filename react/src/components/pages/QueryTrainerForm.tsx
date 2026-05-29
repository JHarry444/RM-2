import { useRef, useState } from "react";
import type { TrainerType } from "./TrainerContainer";
import { useNavigate } from "react-router";

function QueryTrainerForm() {
    const [query, setQuery] = useState({
        name: "",
        age: 0,
        specialty: ""
    });

    const navigate = useNavigate();
    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const searchParams = new URLSearchParams();
        if (query.name) {
            searchParams.append("name", query.name);
        }
        if (query.age) {
            searchParams.append("age", query.age.toString());
        }
        if (query.specialty) {
            searchParams.append("specialty", query.specialty);
        }
        // Here you would typically navigate to the query results page with the search parameters
        // For example: navigate(`/queryTrainer?${searchParams.toString()}`);
        console.log("Search Params:", searchParams.toString());

        navigate(`/queryTrainer?${searchParams.toString()}`);
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={query.name}
                    onChange={(e) => setQuery({ ...query, name: e.target.value })}
                    autoFocus
                />
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={query.age}
                    onChange={(e) => setQuery(prevQuery => ({ ...prevQuery, age: Number(e.target.value) }))}

                />
                <label htmlFor="specialty">Specialty</label>
                <input
                    type="text"
                    id="specialty"
                    name="specialty"
                    value={query.specialty}
                    onChange={(e) => setQuery({ ...query, specialty: e.target.value })}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default QueryTrainerForm;