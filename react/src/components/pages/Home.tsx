import Input from "../Input";

function Home() {
    const getText = () => {
        return "Whatup";
    }
    return (
        <>
            <h1>Hello, World!</h1>
            <ul>

                <li>Eggs</li>
                <li>Milk</li>
            </ul>
            <p>1 + 1</p>
            <p>{1 + 1}</p>
            <p>getText()</p>
            <p>{getText()}</p>
            <section>
                <h2>Capitalisation</h2>
                <Input />
                <input type="text" />
            </section>
        </>
    );
}

export default Home;