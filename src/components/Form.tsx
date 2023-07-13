import React, { useState } from 'react';
import { FormValuesType } from '../App';

type FormProps = {
  formValues: FormValuesType,
  setFormValues: (prop: FormValuesType) => void,
  hideForm: () => void,
  handleSubmit: () => void,
  validateForm: () => boolean,
};

function Form(props: FormProps) {
  const { handleSubmit, hideForm, validateForm, formValues, setFormValues } = props;
  const { serviceName, login, password, url } = formValues;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleClose = () => {
    hideForm();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,

    });
    setPasswordValidation(event.target.value);
    validatePassword();
  };

  const [passwordValidation, setPasswordValidation] = useState('');
  const [isValid, setIsValid] = useState(false);

  const numberRegex = /\d/;
  const letterRegex = /[a-zA-Z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  const validatePassword = () => {

    const password = passwordValidation;
    let valid = true;

    if (password.length <= 8) {
      valid = false;
    }

    if (password.length >= 16) {
      valid = false;
    }

    if (!numberRegex.test(password) || !letterRegex.test(password)) {
      valid = false;
    }

    if (!specialCharRegex.test(password)) {
      valid = false;
    }

    setIsValid(valid);
  };

  return (
    <form onSubmit={ onSubmit }>
      <label htmlFor="Nome do serviço">
        Nome do serviço
        <input
          type="text"
          id="Nome do serviço"
          name="serviceName"
          value={ serviceName }
          onChange={ onChange }
          required
        />
      </label>
      <label htmlFor="Login">
        Login
        <input
          type="text"
          id="Login"
          name="login"
          value={ login }
          onChange={ onChange }
          required
        />
      </label>
      <label htmlFor="Senha">
        Senha
        <input
          type="password"
          id="Senha"
          name="password"
          value={ password }
          onChange={ onChange }
          required
        />
        {passwordValidation.length < 8 && <p className={'invalid-password-check'}>Possuir 8 ou mais caracteres</p>}
        {passwordValidation.length >= 8 && <p className={'valid-password-check'}>Possuir 8 ou mais caracteres</p>}
        {passwordValidation.length <= 16 && <p className={'valid-password-check'}>Possuir até 16 caracteres</p>}
        {passwordValidation.length >= 16 && <p className={'invalid-password-check'}>Possuir até 16 caracteres</p>}        
        {!(numberRegex.test(passwordValidation) && letterRegex.test(passwordValidation)) && <p className={'invalid-password-check'}>Possuir letras e números</p>}
        {(numberRegex.test(passwordValidation) && letterRegex.test(passwordValidation)) && <p className={'valid-password-check'}>Possuir letras e números</p>}
        {!specialCharRegex.test(passwordValidation) && <p className={'invalid-password-check'}>Possuir algum caractere especial</p>}
        {specialCharRegex.test(passwordValidation) && <p className={'valid-password-check'}>Possuir algum caractere especial</p>}
      </label>
      <label htmlFor="url">
        URL
        <input
          type="text"
          id="url"
          name="url"
          value={ url }
          onChange={ onChange }
        />
      </label>    
      <button type="submit" disabled={ !validateForm() }>
        Cadastrar
      </button>
      <button onClick={ handleClose }>Cancelar</button>
    </form>
  );
}

export default Form;
