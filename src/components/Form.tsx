import React, { useState } from 'react';

type FormProps = {
  hideForm: () => void,
  handleSubmit: () => void,
};

function Form(props: FormProps) {
  const { handleSubmit, hideForm } = props;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleClose = () => {
    hideForm();
  };

  return (
    <form onSubmit={ onSubmit }>
      <label htmlFor="Nome do serviço">
        Nome do serviço:
        <input type="text" id="Nome do serviço" />
      </label>
      <label htmlFor="Login">
        Login:
        <input type="text" id="Login" />
      </label>
      <label htmlFor="input-password">
        Senha:
        <input type="password" id="input-password" />
      </label>
      <label htmlFor="URL">
        URL:
        <input type="text" id="URL" />
      </label>
      <button type="submit">
        Cadastrar
      </button>
      <button onClick={ handleClose }>Cancelar</button>
    </form>
  );
}

export default Form;
