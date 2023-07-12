import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);


  return (
  <div>
    <header>
      <Title />
      <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button>
      </header>
      { showForm && <Form /> }
      </div>
  );
}

export default App;
