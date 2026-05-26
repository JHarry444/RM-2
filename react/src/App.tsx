import { BrowserRouter as Router, Route, Routes } from 'react-router';
import './App.css'
import ExternalData from './components/ExternalData';

import Home from './components/pages/Home';
import Props from './components/pages/Props';
import NavBar from './components/NavBar';
import EventHandling from './components/pages/EventHandling';
import State from './components/pages/State';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<Props />} />
        <Route path="/external" element={<ExternalData />} />
        <Route path="/events" element={<EventHandling />} />
        <Route path="/state" element={<State />} />
      </Routes>
      <footer>
        <small>I'm a footer!</small>
      </footer>
    </Router>
  )
}

export default App
