import './App.css'
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
      <Trainer />
      {
        Trainer()
      }
      <p>1 + 1</p>
      <p>{1 + 1}</p>
      <p>getText()</p>
      <p>{getText()}</p>
      <section>
        <h2>Capitalisation</h2>
        <Input />
        <input type="text" />
      </section>
    </div>
  )
}

export default App
