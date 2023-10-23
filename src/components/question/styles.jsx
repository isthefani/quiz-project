import styled from "styled-components"

export const ContPerg = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`    

export const BoxPerg = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
`

export const BoxCenter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 952px) and (max-width: 1236px) {
        width: 70%;
    }
`    
export const BoxCenterVert = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 30px; /*--MUDAR*/
    border-radius: 40px;
    height: 85vh; /*--MUDAR*/

    @media (max-width: 1236px) {
        height: unset;
    }
`  
export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px; /*--MUDAR*/
    border-radius: 40px;
    height: 85vh; /*--MUDAR*/

    @media (max-width: 1236px) {
        height: unset;
        padding: unset;
    }
`  
export const Titulo = styled.h3`
    text-align: justify;

    @media (max-width: 344px) {
        padding: 10px
    }
`