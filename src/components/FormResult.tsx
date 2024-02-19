import React, { useState } from 'react';
import { FormValuesType } from '../types/types';
import styles from './FormResult.module.css';
import closeEye from '../imgs/closeEye.png';
import openEye from '../imgs/openEye.png';
import linkIcon from '../imgs/link-img.svg';

type FormResultProps = {
  formValuesSubmitted: FormValuesType[];
  handleDelete: (id: string) => void;
};

function FormResult({ formValuesSubmitted, handleDelete }: FormResultProps) {
  const handleRemove = (id: string) => {
    handleDelete(id);
  };

  const [hidePassword, setHidePassword] = useState(false);
  const handleChange = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div>
      <div className={ styles.checkbox }>
        {formValuesSubmitted.length > 0 && (
          <label className={ styles.note } htmlFor="hidePasswords">
            Esconder senhas
            <input
              type="checkbox"
              id="hidePasswords"
              checked={ hidePassword }
              onChange={ handleChange }
            />
            <img
              src={ hidePassword ? closeEye : openEye }
              alt="hidePasswords"
            />
          </label>
        )}
      </div>

      <div className={ styles.passwordsContainer }>
        {formValuesSubmitted.map((formValue) => {
          const { id, serviceName, login, password, url } = formValue;
          return (
            <div className={ styles.passwordsCards } key={ id }>
              <p>
                <img
                  src={ linkIcon }
                  alt={ linkIcon }
                />
                <a href={ url }>
                  {serviceName}
                </a>
              </p>
              <p>{login}</p>
              <p>{hidePassword ? '******' : password}</p>
              <button data-testid="remove-btn" onClick={ () => handleRemove(String(id)) }>
                Remover senha
              </button>
            </div>
          );
        })}

        {formValuesSubmitted.length === 0 && (
          <p className={ styles.note }>
            Nenhuma senha cadastrada 😞
          </p>
        )}
      </div>
    </div>
  );
}

export default FormResult;
