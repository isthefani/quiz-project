import { useState } from "react"
import styled, {keyframes} from "styled-components"

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export default function Categories({title, description, logo, color, indice}){

    const [indexMenu, setIndexMenu] = useState(0)

    const Card = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 13rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #ddd;
    margin: 50px 10px 0px 10px;
    padding: 12px;
    cursor: pointer;
    &:hover{
        background-color: ${color};
        box-shadow: 0px 0px 20px ${color};
        color: ${color == "#fbff14"? "#000" :"#fff"};
        //animation: ${rotate} 4s linear infinite;
    }
    `

    const IconCard = styled.h1`
        font-size: 55px;
    `

    const TitleCard = styled.h3`

    `

    const DescriptionCard = styled.p`
        margin-top: 10px;
        text-align: center;
    `

    return(
        <div style={{display: "block"}}>
            <Card onClick={() => {}}>
                <IconCard>{logo}</IconCard>
                <TitleCard>{title}</TitleCard>
                <DescriptionCard>{description}</DescriptionCard>
            </Card>
        </div>
    )
}