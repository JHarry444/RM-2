import Trainer from "../Trainer";

function Props() {
    return (
        <>
            <h1>Props</h1>
            <Trainer name="JH" age={32} specialty="Java" image='https://avatars.githubusercontent.com/u/41322826' />
            {
                Trainer({ name: "CG", age: 33, specialty: "Web", image: 'https://avatars.githubusercontent.com/u/9989655' })
            }
            <Trainer name="MS" age={45} specialty="Oracle" />

        </>
    );
}

export default Props;