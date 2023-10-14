import {useState} from "react";
import quiz from "../../data/data";
import ButtonQuestion from "../../components/buttons/buttonQuestion";
import ButtonNext from "../../components/buttons/buttonNext";
import { ContPerg, BoxCenter, BoxPerg, Container } from "./styles";
import Header from "../../components/header/header";
import { Link } from "../../components/header/header";

const resp = {}
const respoFinais = []

export default function Question(){

    const [num, setNum] = useState(0)
    let acertos = 0
    const [terminado, setTerminado] = useState(false)

    const confereRespostas = () => {
        quiz.map((item) => {
            if(item.alts[0].certo == resp[item.id]){
                console.log("Resposta Correta")
                acertos += 1
                respoFinais.push([
                    `Pergunta ${item.id}`, //Número da Pergunta
                    `${resp[item.id]}`,    //Resposta 
                    `(Resposta Correta)`, //Avaliação da Resposta
                    `${item.alts[0].certo}`]) //Resposta Correta
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
        setTerminado(true)
        console.log(respoFinais)
    }

    //Adiciona as respostas na lista
    const addResp = (resposta) => {
        resp[num + 1] = resposta
        console.log(resp)    
        //proximaPerg() //Passa para a próxima pergunta

    }

    //Função que verifica se a resposta está certa
    // const respostaCerta = (resposta) => {

    //     if(resposta === quiz[num].alts[0].certo){
    //         setNum(num + 1) //Passa para a próxima pergunta
    //         alert("Resposta certa")
    //     }
    //     else {
    //         // document.querySelector('#perg1').setAttribute('style', 
    //         // "background-color: #fc5454; color: #fff; border: 2px solid #ab2a2a")
    //         alert("Resposta errada")
    //     }
    //     addResp(resposta)
    // }

    //Ver a próxima pergunta e a pergunta anterior
    const proximaPerg = () => {
        if((num + 1) < quiz.length)
            setNum(num + 1);
        else
            alert("Quiz encerrado")
    }

    const anteriorPerg = () => {
        if(num > 0)
            setNum(num - 1);
    }
  
    return(

        terminado == false?
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
                    marginBottom: 20}}>
                Pergunta: {num+1} / {quiz.length}
                </h2>     
            </BoxCenter>

            <ContPerg>
                <BoxPerg>
                    <ButtonQuestion id="perg1" onClick={() => addResp(quiz[num].alts[1])} value={quiz[num].alts[1]}/>
                    <ButtonQuestion onClick={() => addResp(quiz[num].alts[2])} value={quiz[num].alts[2]}/>
                </BoxPerg>
                <BoxPerg>
                    <ButtonQuestion onClick={() => addResp(quiz[num].alts[3])} value={quiz[num].alts[3]}/>
                    <ButtonQuestion onClick={() => addResp(quiz[num].alts[4])} value={quiz[num].alts[4]}/>
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
                                <div id="respondido" style={{
                                    border: 1,
                                    borderTopColor: '#000',
                                    height: 25,
                                    backgroundColor: '#ddd',
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
                        onClick={() => confereRespostas()}  
                        value={"Terminar Questionário"}/>
                </BoxCenter>
                :
                 ''}
        </Container>
        :
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 30,
            borderRadius: 40
        }}>            
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
                        padding: 10
                    }}>
                        <BoxCenter>
                            <h2 style={{
                                marginTop: 20,
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

            <Link href="/">Voltar</Link>
        </div>
    )    
}