import type React from "react"

function EventHandling() {

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Form Submitted!');
    }
    return (
        <>
            <section>
                <h2>onClick Event Handling</h2>
                <button onClick={() => alert('Button Clicked!')}>Click Me</button>
            </section>
            <section>
                <h2>onChange Event Handling</h2>
                <input type="text" onChange={event => console.log(event.target.value)} />
            </section>
            <section>
                <h2>onSubmit Event Handling</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Enter your username" required />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default EventHandling;