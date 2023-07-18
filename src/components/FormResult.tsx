import React from 'react';
import { FormValuesType } from '../types/types';

type FormResultProps = {
  formValuesSubmitted: FormValuesType[];
  handleDelete: (id: string) => void;
};

function FormResult({ formValuesSubmitted, handleDelete }: FormResultProps) {
  const handleRemove = (id: string) => {
    handleDelete(id);
  };

  return (
    <div>
      {formValuesSubmitted.length > 0 ? (
        formValuesSubmitted.map((formValue) => {
          const { id, serviceName, login, password, url } = formValue;

          return (
            <div key={ id }>
              <p>
                <a href={ url }>{serviceName}</a>
              </p>
              <p>{login}</p>
              <p>{password}</p>
              <button
                data-testid="remove-btn"
                onClick={ () => handleRemove(String(id)) }
              >
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
