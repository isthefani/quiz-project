import React from "react";
import styled from "styled-components";

/////////// Style /////////////
const Button = styled.button`
  color: #fff;
  font-size: 1rem;
  padding: .5rem 1rem;
  border: none;
  border-radius: 50px;
  margin: 10px;
  background-color: #7685EE;
`;
///////////////////////////////

export default function ButtonNext({value, ...rootDOMAttributes}) {
    return(
        <Button {...rootDOMAttributes}>{value}</Button>
    )
}