import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";


function TelaCadastroEndereco(props) {
return (
    <FormContainer>
        <h1>Cadastro de Endereco </h1>
        <Form>
            <StyledLabel htmlFor="endereco">
                Endereço:
                <Input id="endereco" />
            </StyledLabel>
            <StyledLabel htmlFor="numresidencia">
                Numero de Residência:
                <Input id="numresidencia" />
            </StyledLabel>
            <StyledLabel htmlFor="telefone">
            Telefone:
            <Input id="telefone" />
            </StyledLabel>
            <StyledLabel> htmlFor="complemento">
            Complemento:
            <Input id="complemento" />
            </StyledLabel>
           
            <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
            <BackToLoginButton onClick={() => props.mudarTela(2)}>
                Voltar
            </BackToLoginButton>
        </Form>
    </FormContainer>
);

}
export default TelaCadastroEndereco;