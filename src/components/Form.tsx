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
        Nome do serviço
        <input type="text" id="Nome do serviço" name="serviceName" value={ serviceName } onChange={ onChange } required />
      </label>
      <label htmlFor="Login">
        Login
        <input type="text" id="Login" name="login" value={ login } onChange={ onChange } required />
      </label>
      <label htmlFor="Senha">
        Senha
        <input type="password" id="Senha" name="password" value={ password } onChange={ onChange }required />
      </label>
      <label htmlFor="url">
        URL
        <input type="text" id="url" name="url" value={ url } onChange={ onChange } />
      </label>
      <button type="submit" disabled={!validateForm()}>
        Cadastrar
      </button>
      <button onClick={ handleClose }>Cancelar</button>
    </form>
  );
}

export default Form;
