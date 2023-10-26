
import './App.css';
import Authentication from './components/Authentication';
import Timer from './components/Timer';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/pomodoro' element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
