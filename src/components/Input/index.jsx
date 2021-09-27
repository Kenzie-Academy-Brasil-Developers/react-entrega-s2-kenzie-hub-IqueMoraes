import { Container, InputContainer } from "./style";

function Input({ label, icon: Icon, register, name, error, ...rest }) {
  return (
    <Container>
      <div>
        {" "}
        {label} {Boolean(error) && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest}></input>
      </InputContainer>
    </Container>
  );
}

export default Input;
