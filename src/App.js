import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home />}>

        </Route>
      </Routes>
      <p>Hollow World!</p>
    </div>
  );
}

export default App;
