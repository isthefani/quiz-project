import { useState } from "react";
import ButtonQuestion from "../buttons/buttonQuestion";
import ButtonNext from "../buttons/buttonNext";
import { ContPerg, BoxCenter, BoxPerg, Container } from "./styles";
import Header from "../header/header";
import { Link } from "../header/header";

export default function QuestJs({resp, respoFinais, corretos, quiz}){

    const [num, setNum] = useState(0)
    const [acertos, setAcertos] = useState(0)
    const [terminado, setTerminado] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState(new Array(quiz.length).fill(-1));
    const handleOptionClick = (optionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[num] = optionIndex;
        setSelectedOptions(updatedSelectedOptions);
        addResp(quiz[num].alts[optionIndex]);
      };
      

    const confereRespostas = () => {
        quiz.map((item) => {
            if(item.alts[0].certo == resp[item.id]){
                console.log("Resposta Correta")
                respoFinais.push([
                    `Pergunta ${item.id}`, //Número da Pergunta
                    `${resp[item.id]}`,    //Resposta 
                    `(Resposta Correta)`, //Avaliação da Resposta
                    `${item.alts[0].certo}`]) //Resposta Correta
                    corretos += 1

            }
            else {
                console.log("Resposta Errada")
                respoFinais.push([
                    `Pergunta ${item.id}`, //Número da Pergunta
                    `${resp[item.id]}`,    //Resposta 
                    `(Resposta Errada)`, //Avaliação da Resposta
                    `${item.alts[0].certo}`]) //Resposta Correta
            }
            }
        )
        setAcertos(corretos)
        setTerminado(true)
        console.log(respoFinais)
    }

    //Adiciona as respostas na lista
    const addResp = (resposta) => {
        resp[num + 1] = resposta
        console.log(resp)    
        //proximaPerg() //Passa para a próxima pergunta

    }

    //Ver a próxima pergunta e a pergunta anterior
    const proximaPerg = () => {
        if((num + 1) < quiz.length) {
            setNum(num + 1);
        }
        else
            alert("Quiz encerrado")
    }

    const anteriorPerg = () => {
        if(num > 0) {
            setNum(num - 1);
        }
    } 
  
    return(

        terminado == false? (
        <Container>
            <Header conteudo={"Voltar ao menu"} path={"/"}/>
            <BoxCenter>
                <h2 style={{
                    marginTop: 20
                }}>{quiz[num].perg}</h2>      

            </BoxCenter>

            <BoxCenter>
                <h2 style={{
                    display: "flex", 
                    color: "#8591E8", 
                    fontSize: 16, 
                    marginBottom: 20,
                    textAlign: 'justify'}}>
                Pergunta: {num+1} / {quiz.length}
                </h2>     
            </BoxCenter>

            <ContPerg>
                <BoxPerg>
                    <ButtonQuestion id="perg1" onClick={() => handleOptionClick(1)} style={{
                        backgroundColor: selectedOptions[num] === 1 ? "#8591E8" : selectedOptions[num] === -1 ? "#eee" : "#eee",
                        color: selectedOptions[num] === 1 ? "#fff" : selectedOptions[num] === -1 ? "#000" : "#000",
                        fontWeight: selectedOptions[num] === 1 ? 500 : selectedOptions[num] === -1 ? "" : "",
                    }} value={quiz[num].alts[1]}/>
                    <ButtonQuestion onClick={() => handleOptionClick(2)} style={{
                        backgroundColor: selectedOptions[num] === 2 ? "#8591E8" : selectedOptions[num] === -2 ? "#eee" : "#eee",
                        color: selectedOptions[num] === 2 ? "#fff" : selectedOptions[num] === -2 ? "#000" : "#000",
                        fontWeight: selectedOptions[num] === 2 ? 500 : selectedOptions[num] === -2 ? "" : "",
                    }}  value={quiz[num].alts[2]}/>
                </BoxPerg>
                <BoxPerg>
                    <ButtonQuestion onClick={() => handleOptionClick(3)} style={{
                        backgroundColor: selectedOptions[num] === 3 ? "#8591E8" : selectedOptions[num] === -3 ? "#eee" : "#eee",
                        color: selectedOptions[num] === 3 ? "#fff" : selectedOptions[num] === -3 ? "#000" : "#000",
                        fontWeight: selectedOptions[num] === 3 ? 500 : selectedOptions[num] === -3 ? "" : "",
                    }}  value={quiz[num].alts[3]}/>
                    <ButtonQuestion onClick={() => handleOptionClick(4)} style={{
                        backgroundColor: selectedOptions[num] === 4 ? "#8591E8" : selectedOptions[num] === -4 ? "#eee" : "#eee",
                        color: selectedOptions[num] === 4 ? "#fff" : selectedOptions[num] === -4 ? "#000" : "#000",
                        fontWeight: selectedOptions[num] === 4 ? 500 : selectedOptions[num] === -4 ? "" : "",
                    }}  value={quiz[num].alts[4]}/>
                </BoxPerg>
            </ContPerg>

            <BoxCenter>
                {(num + 1) > 1 ?                 
                <ButtonNext onClick={anteriorPerg} value={"Anterior"}/>
                :
                ""}
                {(quiz.length != (num + 1)) ?                 
                <ButtonNext onClick={proximaPerg}  value={"Próximo"}/>
                :
                ""}
            </BoxCenter>

            <BoxCenter>
                {quiz.map((item, index) => {
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
                                <div id="respondido" style={{
                                    border: 1,
                                    borderTopColor: '#000',
                                    height: 25,
                                    backgroundColor: selectedOptions[index] !== -1 ? "#8591E8" : "#ddd",
                                }}/>
                            </div>
                        </>
                    )
                })}
            </BoxCenter>
            
            {/*(num + 1) == quiz.length && selectedOptions.every(optionIndex => optionIndex !== -1) ? BOTÃO APARECE SÓ NO FINAL */
            (selectedOptions.every(optionIndex => optionIndex !== -1)) ? (
                <BoxCenter style={{marginTop: 20}}>
                    <ButtonNext 
                        style={{backgroundColor: "#2c3cb1"}}
                        onClick={() => confereRespostas()}  
                        value={"Terminar Questionário"}/>
                </BoxCenter>
                ) : (
                 '')}
        </Container>
        ) : (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 30,
            borderRadius: 40
        }}>   

        {/* <BoxCenter>
            <img style={{
                 width: 165,
                 marginBottom: 20
            }} src="public/logoQuiz.png"/>
        </BoxCenter> */}

        <BoxCenter>
                <h1>
                   Resultado
                </h1>     
            </BoxCenter>
             <BoxCenter>
                <h2 style={{
                    display: "flex", 
                    color: "#8591E8", 
                    fontSize: 16, 
                    marginBottom: 20}}>
                    Acertos: {acertos} / {quiz.length}
                </h2>     
            </BoxCenter>
            <BoxCenter style={{flexDirection: "row"}}>
            {respoFinais.map((item) => {
                return(
                    <>
                    <div style={{
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        width: 300,
                        textAlign: 'center',
                        margin: 15,
                        paddingTop: 20,
                        paddingBottom: 20,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "#8591E8"
                    }}>

                        <BoxCenter>
                            <h2 style={{
                                marginBottom: 20
                            }}>{item[0]}</h2>     
                        </BoxCenter>
                            
                        <p><b>Sua resposta:</b> {item[1]}</p> {/*Resposta Usuario */}
                        <br/>              
                        <p><b>Resposta Correta:</b> {item[3]}</p> {/*Resposta Correta */}
                        <br/> 
                        {
                            item[2] == "(Resposta Correta)"? 
                            <p style={{
                                color: "#33c133",
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>
                                {item[2]}
                            </p> /*Resultado */                        
                            :
                            <p style={{
                                color: "#e9352c",
                                fontSize: 15,
                                fontWeight: 'bold'}}>
                                {item[2]}
                            </p> /*Resultado */                          
        
                        }  
                    </div>
                    </>
                )
            })}
            </BoxCenter>

            <Link href="/" style={{color: "#fff", backgroundColor: "#8591E8"}}>Voltar</Link>
        </div> )
    )    
}