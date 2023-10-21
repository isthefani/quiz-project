import styled from "styled-components";

/////////// Style /////////////
const Button = styled.a`
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem; /*--MUDAR*/
  border: none;
  border-radius: 50px;
  margin: 10px; /*--MUDAR*/
  background-color: #7685EE;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #6372e2;
  }
`;
///////////////////////////////

export default function ButtonHome({value, href}) {
    return(
        <Button href={href}>{value}</Button>
    )
}