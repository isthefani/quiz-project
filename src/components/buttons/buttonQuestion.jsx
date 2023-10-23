import styled from "styled-components";

/////////// Style /////////////
const Button = styled.button`
  color: #2b3268;
  font-size: 1rem;
  padding: .5rem 1rem; /*--MUDAR*/
  border: 2px solid #8591E8;
  border-radius: 5px;
  margin: 10px; /*--MUDAR*/
  width: 30rem; /*--MUDAR*/
  cursor: pointer;
  min-width: unset;

  &:hover{
    background-color: #e9e8e8;
  }

  @media (max-width: 540px) {
    width: 10rem;
    min-width: 90%;
  }

  /*Não quer funcionar*/
`;
///////////////////////////////

export default function ButtonQuestion({value, ...rootDOMAttributes}) {
    return(
        <Button {...rootDOMAttributes}>{value}</Button>
    )
}