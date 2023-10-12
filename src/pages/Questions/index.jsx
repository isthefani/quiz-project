import {React, useEffect, useState} from "react";
import quiz from "../../data/data";
import ButtonQuestion from "../../components/buttons/buttonQuestion";
import styled from "styled-components";
import ButtonNext from "../../components/buttons/buttonNext";

export default function Question(){

    const pergFeitas = []
    const [num, setNum] = useState(0)

    useEffect(() => {
        quiz.sort()
    }, [])

    //Função que verifica se a resposta está certa
    const respostaCerta = (resposta) => {
        if(resposta == quiz[num].alts[0].ok){
            alert("Resposta certa")
        }
        else {
            alert("Resposta errada")
        }
    }

    //Ver a próxima pergunta e a pergunta anterior

    const proximaPerg = () => {
        if((num +1) < quiz.length)
            setNum(num + 1);
        else
            alert("Quiz encerrado")
    }

    const anteriorPerg = () => {
        if(num > 0)
            setNum(num - 1);
    }

    const ContPerg = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `    

    const BoxPerg = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: row;
    `

    const BoxCenter = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `   
        
    return(
        <>
            <h1>Quiz</h1>
            <h2>{quiz[num].perg}</h2>     

            <ContPerg>
                <BoxPerg>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[0].ok}/>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[1]}/>
                </BoxPerg>
                <BoxPerg>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[2]}/>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[3]}/>
                </BoxPerg>
            </ContPerg>

            <BoxCenter>
                <ButtonNext onClick={anteriorPerg} value={"Anterior"}/>
                <ButtonNext onClick={proximaPerg}  value={"Próximo"}/>
            </BoxCenter>
        </>
    )    
}