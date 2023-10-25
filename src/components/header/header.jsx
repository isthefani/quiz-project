import styled from "styled-components";

/////////// Style /////////////
const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

export const Link = styled.a`
    display: block;
    text-decoration: none;
    padding: 10px; 
    border-radius: 10px;
    border: 2px solid #7685EE;
    color: #4150c7;
    cursor: pointer;
    &:hover{
        background-color: #ebecf4;
    }
`

const Logo = styled.img`
    width: 165px;
`;

///////////////////////////////

export default function Header({conteudo, path}) {
    return(
        <HeaderStyle>
            <Logo src="/logoQuiz.png"></Logo>
            {/* <Link href={path}>{conteudo}</Link> */}
        </HeaderStyle>
    )
}