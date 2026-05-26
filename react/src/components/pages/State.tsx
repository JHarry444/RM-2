import { useState } from "react";

function State() {
    // useState is a React hook that allows functional components to have state. 
    // It returns an array with two elements: the current state value and a function to update that value. 
    // In this example, we initialize the count state to 0 and provide a button to increment it.
    const [count, setCount] = useState(0);


    const [miles, setMiles] = useState(0);
    const [kilometers, setKilometers] = useState(0);

    const [formData, setFormData] = useState({
        username: "jh",
        password: "pass",
        confirmPassword: "pass"
    });


    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        } else {
            alert(`User ${formData.username} created successfully!`);
        }
    }
    return (
        <>
            <h2>State</h2>
            <p>State is a built-in React object that allows components to create and manage their own data. It is used to store information that can change over time and affect the rendering of the component. State is typically initialized in the constructor of a class component or using the useState hook in a functional component.</p>
            <p>When the state of a component changes, React re-renders the component to reflect the new state. This allows for dynamic and interactive user interfaces. State can be updated using the setState method in class components or the state updater function returned by useState in functional components.</p>
            <section>
                <h3>Counter</h3>
                <input type="number" value={count} readOnly />
                <button onClick={() => setCount(count + 1)}>+</button>
            </section>
            <section>
                <h3>Miles To Kilometers</h3>
                <label htmlFor="milesInput">Miles</label>
                <input type="number" min={0} name="miles" id="milesInput" value={miles} onChange={event => {
                    setMiles(parseFloat(event.target.value));
                    setKilometers(parseFloat(event.target.value) * 1.60934);
                }} />
                <br />
                <label htmlFor="kmInput">Kilometers</label>
                <input type="number" min={0} name="km" id="kmInput" value={kilometers} onChange={event => {
                    setMiles(parseFloat(event.target.value) / 1.60934);
                    setKilometers(parseFloat(event.target.value));
                }} />
                <h3>Submitting a new User</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={event => setFormData({
                        password: formData.password,
                        confirmPassword: formData.confirmPassword,
                        username: event.target.value
                    })} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={event => setFormData({ ...formData, password: event.target.value })} required />
                    <br />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={event => setFormData({ ...formData, confirmPassword: event.target.value })} required />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default State;