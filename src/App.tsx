import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import { FormValuesType } from './types/types';
import Form from './components/Form';
import FormResult from './components/FormResult';

const INITIAL_FORM_STATE = {
  serviceName: '',
  login: '',
  password: '',
  url: '',
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORM_STATE);
  const [formValuesSubmited, setFormValuesSubmited] = useState<FormValuesType[]>([]);

  const handleClick = () => {
    setShowForm(true);
    setShowBtn(false);
  };

  const handleHideForm = () => {
    setShowBtn(true);
    setShowForm(false);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const updatedFormValues = { ...formValues,
        id: String(formValuesSubmited.length + 1) };
      setFormValuesSubmited([...formValuesSubmited, updatedFormValues]);
      setFormValues(INITIAL_FORM_STATE);
      setShowForm(false);
      setShowBtn(true);
    }
  };

  const handleDelete = (id: string) => {
    const updatedFormValues = formValuesSubmited
      .filter((formValue) => formValue.id !== id);
    setFormValuesSubmited(updatedFormValues);
  };

  function validateForm(): boolean {
    const { serviceName, login, password } = formValues;
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,16}$/;
    return Boolean(serviceName && login && password && regexPassword.test(password));
  }

  return (
    <div>
      <header>
        <Title />
        {showBtn && (
          <button onClick={ handleClick }>Cadastrar nova senha</button>
        )}
      </header>
      {showForm && (
        <Form
          hideForm={ handleHideForm }
          setFormValues={ setFormValues }
          formValues={ formValues }
          validateForm={ () => validateForm() }
          handleSubmit={ handleSubmit }
        />
      )}
      <FormResult
        formValuesSubmitted={ formValuesSubmited }
        handleDelete={ handleDelete }
      />
    </div>
  );
}

export default App;
