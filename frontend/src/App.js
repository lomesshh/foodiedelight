import './App.css';
import Header from './Components/Header/Header';
import Restaurants from './screens/Restaurants/Restaurants';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Restaurants />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
