import { useState } from "react"
import { AiOutlineMinusCircle,AiOutlinePlusCircle} from "react-icons/ai"

const SingleQuestion = ({ info, title }) => {
    const[showInfo,setShowInfo]=useState(false)
  return (
      <article className="question">
          <header>
              
              <h5>{title}</h5>
              <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>{ showInfo?(<AiOutlineMinusCircle/>):(<AiOutlinePlusCircle/>)}</button>
          </header>
          { showInfo && <p>{ info}</p>}
           
    </article>
  )
}
export default SingleQuestion