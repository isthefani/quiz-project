import Question from "../../../components/question/question";
import quiz from "../../../data/dataHtml"

const resp = {}
const respoFinais = []
let corretos = 0

export default function QuestHtml(){
    return(
        <>
            <Question resp={resp} respoFinais={respoFinais} corretos={corretos} quiz={quiz}/>
        </>
    )
}