import React from "react";
import quiz from "../../data/data";

export default function Question(){

    let geraNumber = Math.floor(Math.random() * quiz.length, 0)

    return(
        <>
            <h1>Quiz</h1>
            {/* {quiz.map((item) => {
                return(
                    <>
                        <h2>{item.perg}</h2>
                        <p>{item.alts[0].ok}</p>
                    </>
                )
            })} */}

            <h2>{quiz[geraNumber].perg}</h2>
            <p>{quiz[geraNumber].alts[0].ok}</p>
            <p>{quiz[geraNumber].alts[1]}</p>
            <p>{quiz[geraNumber].alts[2]}</p>
            <p>{quiz[geraNumber].alts[3]}</p>
            <p>{geraNumber}</p>
        </>
    )    
}