import React from 'react';
import { FormValuesType } from '../App';

type FormResultProps = {
  formValuesSubmited: FormValuesType[];
};

const FormResult: React.FC<FormResultProps> = ({ formValuesSubmited }) => {
  const sortedFormValues = formValuesSubmited.sort((a, b) => {
    return formValuesSubmited.indexOf(a) - formValuesSubmited.indexOf(b);
  });

  return (
    <div>
      {sortedFormValues.map((formValue, index) => (
        <div key={index}>
          <p>
            <a href={formValue.url}>{formValue.serviceName}</a>
          </p>
          <p>Login: {formValue.login}</p>
          <p>Senha: {formValue.password}</p>
        </div>
      ))}
    </div>
  );
};

export default FormResult;
