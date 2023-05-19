import React from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";


export default function TelaCadastroEndereco(props) {
    const Confirmar = () => {
        // fluxo de cadastro (ainda veremos)
        props.mudarTela("TelaPrincipal")
      }
  return (
    <div className="App-endereco">
        <FormContainer>
            <h1>Cadastro endereco</h1>
            <Form>
            <StyledLabel>
                Endereco:
                <Input />
             </StyledLabel>

            <StyledLabel>
                Numero da residencia:
                <Input />
            </StyledLabel>
            <StyledLabel>
                Complemento:
                <Input />
            </StyledLabel>

            <StyledLabel>
                Telefone:
                <Input />
            </StyledLabel>
            
            <SendButton onClick={Confirmar}>Confirmar</SendButton>

         </Form>
        </FormContainer>
    </div>
  );
}
