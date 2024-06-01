import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Front from './components/variables/Front';
import Login from './components/variables/Login'
import Settings from './components/variables/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Front />} />
        <Route path="/" element={<Login />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
