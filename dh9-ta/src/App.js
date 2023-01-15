import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
          </p>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
