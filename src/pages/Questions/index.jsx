import {React, useEffect, useState} from "react";
import quiz from "../../data/data";
import ButtonQuestion from "../../components/buttons/buttonQuestion";
import styled from "styled-components";
import ButtonNext from "../../components/buttons/buttonNext";

export default function Question(){

    // const pergFeitas = []
    const [num, setNum] = useState(0)

    // useEffect(() => {
    //     quiz.sort()
    // }, [])

    //Função que verifica se a resposta está certa
    const respostaCerta = (value) => {
        if(value == quiz[num].alts[0]){
            console.log(num)
        }
        else {
            console.log(value)
            console.log(quiz[num].alts[0].ok)
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
    const BoxCenterVert = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
    `   
    return(
        <>
            <h1>Quiz</h1>

            <BoxCenterVert>
                <h2>{quiz[num].perg}</h2>     
                <h2 style={{display: "flex", color: "#8591E8"}}>Pergunta: {num+1}/{quiz.length}</h2>     
            </BoxCenterVert>

            <ContPerg>
                <BoxPerg>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[1]}/>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[2]}/>
                </BoxPerg>
                <BoxPerg>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[3]}/>
                    <ButtonQuestion onClick={respostaCerta} value={quiz[num].alts[4]}/>
                </BoxPerg>
            </ContPerg>

            <BoxCenter>
                <ButtonNext onClick={anteriorPerg} value={"Anterior"}/>
                <ButtonNext onClick={proximaPerg}  value={"Próximo"}/>
            </BoxCenter>

            <BoxCenter>
                {quiz.map((item) => {
                    return(
                        <>
                            <div style={{
                                backgroundColor: "#eee",
                                color: "#8a8a8a",
                                marginLeft: 24,
                                borderRadius: 5,
                                marginTop: 20,
                                width: 35,
                                textAlign: 'center',
                            }}>
                                <p>{item.id}</p>
                                <div style={{
                                    border: 1,
                                    borderTopColor: '#000',
                                    height: 25,
                                    backgroundColor: item.id == 1? '#8591E8' : '#ddd',
                                }}/>
                            </div>
                        </>
                    )
                })}
            </BoxCenter>
            
            {(num + 1) == quiz.length? 
                <BoxCenter style={{marginTop: 20}}>
                    <ButtonNext 
                        style={{backgroundColor: "#2c3cb1"}}
                        onClick={proximaPerg}  
                        value={"Terminar Questionário"}/>
                </BoxCenter>
                :
                 ''}
        </>
    )    
}