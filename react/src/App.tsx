import './App.css'
import ExternalData from './components/ExternalData';
import Input from './components/Input';
import Trainer from './components/Trainer'

function App() {
  console.log("HELLO!");


  function getText() {
    return "Whatup";
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <ul>

        <li>Eggs</li>
        <li>Milk</li>
      </ul>
      <Trainer name="JH" age={32} specialty="Java" image='https://avatars.githubusercontent.com/u/41322826' />
      {
        Trainer({ name: "CG", age: 33, specialty: "Web", image: 'https://avatars.githubusercontent.com/u/9989655' })
      }
      <Trainer name="MS" age={45} specialty="Oracle" />
      <p>1 + 1</p>
      <p>{1 + 1}</p>
      <p>getText()</p>
      <p>{getText()}</p>
      <section>
        <h2>Capitalisation</h2>
        <Input />
        <input type="text" />
      </section>

      <section>
        <ExternalData />
      </section>
    </div>
  )
}

export default App
