import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import RandomJokes from './pages/RandomJokes';
import TabularData from './pages/TabularData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandomJokes />} />
        <Route path="/tabular-data" element={<TabularData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
