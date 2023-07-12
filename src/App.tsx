import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const handleClick = () => {
    setShowForm(true);
    setShowBtn(false);
  };

  const handleHideForm = () => {
    setShowBtn(true);
    setShowForm(false);
  };

  return (
    <div>
      <header>
        <Title />
        {showBtn && (
          <button onClick={ handleClick }>Cadastrar nova senha</button>
        )}
      </header>
      { showForm && <Form hideForm={ handleHideForm } /> }
    </div>
  );
}

export default App;
