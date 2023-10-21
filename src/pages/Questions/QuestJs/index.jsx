import Question from "../../../components/question/question";
import quiz from "../../../data/dataJs"

const resp = {}
const respoFinais = []
let corretos = 0

export default function QuestJs(){
    return(
        <>
            <Question resp={resp} respoFinais={respoFinais} corretos={corretos} quiz={quiz}/>
        </>
    )
}