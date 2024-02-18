import React, { useState } from 'react';
import { FormValuesType } from '../types/types';

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
      <label htmlFor="hidePasswords">
        Esconder senhas
        <input
          type="checkbox"
          id="hidePasswords"
          checked={ hidePassword }
          onChange={ handleChange }
        />
      </label>

      {formValuesSubmitted.length > 0 ? (
        formValuesSubmitted.map((formValue) => {
          const { id, serviceName, login, password, url } = formValue;
          return (
            <div key={ id }>
              <p>
                <a href={ url }>{serviceName}</a>
              </p>
              <p>{login}</p>
              <p>{hidePassword ? '******' : password}</p>
              <button data-testid="remove-btn" onClick={ () => handleRemove(String(id)) }>
                Remover senha
              </button>
            </div>
          );
        })
      ) : (
        <p>Nenhuma senha cadastrada</p>
      )}
    </div>
  );
}

export default FormResult;
