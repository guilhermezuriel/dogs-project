import React from 'react';

const types = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Preencha um email valido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function onChange({ target }) {
    validate(target.value);
    setValue(target.value);
  }
  /*Logica: 
Criei um objeto types, que irá carregar um regex de validação para cada tipo de dado do formulário, instanciado ao criar a função useForm(type) como sua propriedade 
A função validate(value) pega o valor reativo do estado de "value" e usa como propriedade para definirmos os possiveis erros dos inputs
*/
  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
