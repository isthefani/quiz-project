import Question from "../../../components/question/question";
import quiz from "../../../data/dataCss"

const resp = {}
const respoFinais = []
let corretos = 0

export default function QuestCss(){
    return(
        <>
            <Question resp={resp} respoFinais={respoFinais} corretos={corretos} quiz={quiz}/>
        </>
    )
}