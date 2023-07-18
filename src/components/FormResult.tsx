import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
          const formId = id || uuidv4();
          console.log(formId);
          return (
            <div key={ formId }>
              <p>
                <a href={ url }>{serviceName}</a>
              </p>
              <p>{login}</p>
              <p>{password}</p>
              <button data-testid="remove-btn" onClick={ () => handleRemove(formId) }>
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
