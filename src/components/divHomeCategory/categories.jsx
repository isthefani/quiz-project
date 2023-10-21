import styled, {keyframes} from "styled-components"

export let indexMenu = -1

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export default function Categories({title, description, logo, color, selected, onClick}){

    const Card = styled.a`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 15rem;
        height: 13rem;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: ${selected ? color : "#ddd"};
        color: ${(selected ? (color === "#fbff14"? "#000" :"#fff") : "#000")};
        margin: 50px 10px 0px 10px;
        padding: 12px;
        cursor: pointer;
        &:hover{
            background-color: ${color};
            box-shadow: 0px 0px 15px ${color};
            color: ${color == "#fbff14"? "#000" :"#fff"};
            -webkit-transform: scale(0.9);
            -ms-transform: scale(0.9);
            transform: scale(0.92);
            transition: 0.1s;
            //animation: ${rotate} 4s linear infinite;
        }
        .selec {
            background-color: #0072d6; /* A cor que você deseja manter após o clique */
            box-shadow: 0px 0px 15px #0072d6; /* Estilo da sombra que você deseja manter */
            color: #fff; /* Cor do texto após o clique */
            transform: scale(0.92); /* Escala que você deseja manter após o clique */
            transition: 0.1s;
        }
    `

    const IconCard = styled.h1`
        font-size: 55px;
    `

    const TitleCard = styled.h3`

    `

    const DescriptionCard = styled.p`
        margin-top: 10px; /* Talvez --MUDAR*/
        text-align: center;
    `
    
//  <Card onClick={() => () => {
//     indexMenu = indice
//     console.log(indice)
// }}>
    return(
        <div style={{display: "block"}}>
            <Card selected={selected} color={color} onClick={onClick} className={selected ? 'selected-card' : ''}>
                <IconCard>{logo}</IconCard>
                <TitleCard>{title}</TitleCard>
                <DescriptionCard>{description}</DescriptionCard>
            </Card>
        </div>
    )
}