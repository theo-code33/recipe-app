import './App.css';
import "./styles/style.js"
import Form from './components/form-connection/FormConnection';
import RecipesList from './components/recipes/RecipesList';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route index element={<Form firstName={firstName} setFirstName={setFirstName} />} />
        <Route path="/recipes" element={<RecipesList firstName={firstName} /> } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
