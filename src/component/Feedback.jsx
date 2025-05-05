import React, { useContext, useState } from 'react'
import '../css/Feed.css'
import { AppContext } from '../context/AppProvider'
import { Link, useNavigate } from 'react-router-dom';

const Feedback = () => {
  const[gotFeed , seTgotFeed] = useState(JSON.parse(localStorage.getItem("feedback")));
  const[feedopen , setFeedopen] = useState(null);
  const navigate = useNavigate();

  console.log(gotFeed);

  function handelGoBack(){
    console.log("jjj")
    localStorage.removeItem("feedback");
    localStorage.removeItem("qs-ans");
    navigate("/generate");
  }

  return (
    <div className="feed_container">
      <h1>Congratulation!</h1>
      <h2>Here is your Interview feedback</h2>

      <div className="accordian">
        {
          gotFeed.map((item,idx)=>{
            return(
              <div className="feed" key={idx}>
                <div className="questions" onClick={()=>setFeedopen(idx)}>
                  <div className="inner_qus">
                  <strong>Question : </strong>{item.question}
                  </div>
                </div>
                {
                  idx==feedopen &&
                  <>
                  <div className="ans">
                    <div className="inner_ans">
                    <strong>Answer : </strong>{item.answer}
                    </div>
                  </div>
                  <div className="feedback">
                    <div className="inner_feed">
                    <strong>Feedback : </strong>{item.feedback}
                    </div>
                  </div>
                  </>
                }
                
              </div>
            )
          })
        }
      </div>
      <div className="feed_btn">
      <button onClick={handelGoBack} className="btn btn-active btn-secondary">Go Back</button>
      </div>
    </div>
  )
}

export default Feedback