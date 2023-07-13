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

console.log(formValues)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleClose = () => {
    hideForm();
  };

  const onChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value

    });
    console.log(name)
  }

  return (
    <form onSubmit={ onSubmit }>
      <label htmlFor="Nome do serviço">
        Nome do serviço:
        <input type="text" name="serviceName" value={ serviceName } onChange={ onChange } required />
      </label>
      <label htmlFor="Login">
        Login:
        <input type="text" name="login" value={ login } onChange={ onChange } required />
      </label>
      <label htmlFor="input-password">
        Senha:
        <input type="password" name="password" value={ password } onChange={ onChange }required />
      </label>
      <label htmlFor="URL">
        URL:
        <input type="text" name="url" value={ url } onChange={ onChange } />
      </label>
      <button type="submit">
        Cadastrar
      </button>
      <button onClick={ handleClose }>Cancelar</button>
    </form>
  );
}

export default Form;

// disabled={!validateForm()
