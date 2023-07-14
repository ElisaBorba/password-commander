import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import FormResult from './components/FormResult';

export type FormValuesType = {
  serviceName?: string,
  login?: string,
  password?: string,
  url?: string,
};

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
  const [submited, setSubmited] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    setShowBtn(false);
    setSubmited(false);
  };

  const handleHideForm = () => {
    setShowBtn(true);
    setShowForm(false);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setFormValuesSubmited([...formValuesSubmited, formValues])
      setFormValues(INITIAL_FORM_STATE);
      setSubmited(true);
      setShowForm(false);
      setShowBtn(true);
    }
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
        {showBtn && !submited && (
          <button onClick={ handleClick }>Cadastrar nova senha</button>
        )}
      </header>
      {showForm && !submited && (
        <Form
          hideForm={ handleHideForm }
          setFormValues={ setFormValues }
          formValues={formValues}
          validateForm={ validateForm }
          handleSubmit={ handleSubmit }
        />
      )}
      {submited && (
        <>
          <FormResult formValuesSubmited={formValuesSubmited} />
          <button onClick={ handleClick }>Cadastrar nova senha</button>
        </>
      )}

      {!submited && formValuesSubmited.length === 0 && (
        <p>Nenhuma senha cadastrada</p>
      )}
    </div>
  );
}

export default App;
