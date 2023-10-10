import React from "react";
import quiz from "../../data/data";

export default function Question(){
    return(
        <>
            <h1>Quiz</h1>
            <h2>{quiz[0].perg}</h2>
            <p>{quiz[0].alts[0].ok}</p>
            <p>{quiz[0].alts[1]}</p>
            <p>{quiz[0].alts[2]}</p>
            <p>{quiz[0].alts[3]}</p>
        </>
    )    
}