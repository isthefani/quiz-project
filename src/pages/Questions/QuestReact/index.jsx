import Question from "../../../components/question/question";
import quiz from "../../../data/dataReact"

const resp = {}
const respoFinais = []
let corretos = 0

export default function QuestReact(){
    return(
        <>
            <Question resp={resp} respoFinais={respoFinais} corretos={corretos} quiz={quiz}/>
        </>
    )
}