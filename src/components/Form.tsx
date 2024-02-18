import React from 'react';
import { FormValuesType } from '../types/types';
import styles from './Form.module.css';

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

  const numberRegex = /\d/;
  const letterRegex = /[a-zA-Z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleClose = () => {
    hideForm();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    validatePassword();
  };

  const validatePassword = () => {
    let valid = true;

    if ((password ?? '').length < 8 || (password ?? '').length > 16) {
      valid = false;
    }
    if (
      !(numberRegex.test(password ?? '') && letterRegex.test(password ?? ''))
    ) {
      valid = false;
    }
    if (!specialCharRegex.test(password ?? '')) {
      valid = false;
    }
    return valid;
  };

  return (
    <form className={ styles.form } onSubmit={ onSubmit }>
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
          value={ password ?? '' }
          onChange={ onChange }
          required
        />
        <div className={ styles.validations }>
          {(password ?? '').length < 8 ? (
            <p className="invalid-password-check">
              Possuir 8 ou mais caracteres
            </p>
          ) : (
            <p className="valid-password-check">
              Possuir 8 ou mais caracteres
            </p>
          )}

          {(password ?? '').length <= 16 ? (
            <p className="valid-password-check">
              Possuir até 16 caracteres
            </p>
          ) : (
            <p className="invalid-password-check">
              Possuir até 16 caracteres
            </p>
          )}

          {!(
            numberRegex.test(password ?? '')
            && letterRegex.test(password ?? '')
          ) ? (
            <p className="invalid-password-check">
              Possuir letras e números
            </p>
            ) : (
              <p className="valid-password-check">
                Possuir letras e números
              </p>
            )}
          {!specialCharRegex.test(password ?? '') ? (
            <p className="invalid-password-check">
              Possuir algum caractere especial
            </p>
          ) : (
            <p className="valid-password-check">
              Possuir algum caractere especial
            </p>
          )}
        </div>
      </label>
      <label htmlFor="url">
        URL
        <input type="text" id="url" name="url" value={ url } onChange={ onChange } />
      </label>
      <button type="submit" disabled={ !validateForm() }>
        Cadastrar
      </button>
      <button onClick={ handleClose }>Cancelar</button>
    </form>
  );
}

export default Form;
