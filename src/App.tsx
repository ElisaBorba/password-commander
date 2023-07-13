import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

export type FormValuesType = {
  serviceName?: string,
  login?: string,
  password?: string,
  url?: string,
};

const initialFormValues = {
  serviceName: '',
  login: '',
  password: '',
  url: '',
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [formValues, setFormValues] = useState<FormValuesType>(initialFormValues);

    const handleClick = () => {
    setShowForm(true);
    setShowBtn(false);
  };

  const handleHideForm = () => {
    setShowBtn(true);
    setShowForm(false);
  };

  function validateForm(): boolean {
    const { serviceName, login, password } = formValues;
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,16}$/;
    
    if (!serviceName) {
      return false
    }
    if (!login) {
      return false
    }
    if (typeof password !== 'string' || !regexPassword.test(password)) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <header>
        <Title />
        {showBtn && (
          <button onClick={ handleClick }>Cadastrar nova senha</button>
        )}
      </header>
      { showForm && <Form hideForm={ handleHideForm } setFormValues={ setFormValues } formValues={ formValues } validateForm={ validateForm } /> }
    </div>
  );
}

export default App;
