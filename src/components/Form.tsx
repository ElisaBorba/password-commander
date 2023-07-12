type SubmitProps = {
  handleSubmit: () => void
};

function Form(props: SubmitProps) {
const { handleSubmit } = props;
const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit();
};

return (
  <form onSubmit={ onSubmit }>

    <label htmlFor="Nome do serviço">Nome do serviço:
      <input type="text" id="Nome do serviço" />
    </label>
    
    <label htmlFor="Login">Login:
      <input type="text" id="Login" />
    </label>

    <label htmlFor="input-password">Senha:
    <input type="password" id="input-password" />
    </label>

    <label htmlFor="URL">URL:
      <input type="text" id="URL" />
    </label>

    <button type="submit">Cadastrar</button>
    <button>Cancelar</button>
  </form>
);
}

export default Form;