import { BrowserRouter as Router, Route, Routes } from 'react-router';
import './App.css'
import ExternalData from './components/pages/ExternalData';

import Home from './components/pages/Home';
import Props from './components/pages/Props';
import NavBar from './components/NavBar';
import EventHandling from './components/pages/EventHandling';
import State from './components/pages/State';
import TrainerContainer from './components/pages/TrainerContainer';
import ThemeContextProvider from './context/ThemeContextProvider';
import FindTrainer from './components/pages/FindTrainer';
import QueryTrainer from './components/pages/QueryTrainer';
import QueryTrainerForm from './components/pages/QueryTrainerForm';

function App() {

  return (
    <ThemeContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<Props />} />
          <Route path="/external" element={<ExternalData />} />
          <Route path="/events" element={<EventHandling />} />
          <Route path="/state" element={<State />} />
          <Route path='/trainer' element={<TrainerContainer />} />
          <Route path='/findTrainer/:id' element={<FindTrainer />} />
          <Route path='/queryTrainer' element={<QueryTrainer />} />
          <Route path='/queryTrainerForm' element={<QueryTrainerForm />} />
        </Routes>
        <footer>
          <small>I'm a footer!</small>
        </footer>
      </Router>
    </ThemeContextProvider>
  )
}


export default App
