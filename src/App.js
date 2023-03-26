
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Header from './components/Header';
import Edit from './components/Edit';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
   </Router>
  );
}

export default App;
