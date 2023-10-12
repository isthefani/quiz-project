import styled from "styled-components";

/////////// Style /////////////
const Button = styled.button`
  color: #2b3268;
  font-size: 1rem;
  padding: .5rem 1rem;
  border: 2px solid #8591E8;
  border-radius: 5px;
  margin: 10px;
  width: 30rem;
  cursor: pointer;
  &:hover{
    background-color: #e9e8e8;
  }
`;
///////////////////////////////

export default function ButtonQuestion({value, ...rootDOMAttributes}) {
    return(
        <Button {...rootDOMAttributes}>{value}</Button>
    )
}