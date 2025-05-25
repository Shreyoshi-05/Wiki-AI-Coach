import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppProvider";
import Webcam from "react-webcam";
import { BiSolidWebcam } from "react-icons/bi";
import "../css/Interview.css";
import Questions from "./Questions";
import Info from "./Info";
import useSpeechToText from "react-hook-speech-to-text";
import run from "../context/Gemini";
import { Link } from "react-router-dom";

const Interview = () => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  const [opencam, setOpencam] = useState(false);
  const [start, setStart] = useState(false);
  const [tost , setTost] = useState(false);

  const {setCurrentidx,currentidx, questionsans, userAns, setUserAns ,feedback , setFeedback,singlefeed , setSinglefeed} = useContext(AppContext);
  

  useEffect(() => {
    results.map((result) => setUserAns((pre) => pre + result?.transcript));
  }, [results]);

  // console.log(questionsans)
  console.log(interimResult)

  async function handelSave(){
    
    if(userAns.length < 10){
      return;
    }


    const getfeed =`question is ${questionsans[currentidx].question} ,its answer is ${questionsans[currentidx].answer} and given answer is ${userAns} based on that ans give me  feedback of that ans in 4 to 5 lines`;

    

    const userfeed = await run(getfeed);
    // setSinglefeed(feed);
    // const newfeedback = feed.replace("**","");
    console.log(userfeed);

    const ansObj = {
      question: questionsans[currentidx].question,
      answer: userAns,
      feedback: userfeed,
    };

    setFeedback((pre)=>[...pre,ansObj]);
    
    setUserAns(""); 
    setCurrentidx(pre => pre+1);
    
  }

  useEffect(()=>{
    localStorage.setItem("feedback",JSON.stringify(feedback));
  },[feedback]);

  useEffect(() => {
  if (tost) {
    alert("Got some issue in recording answer... Do it again...");
    setTost(false); 
  }
}, [tost]);


  return (
    <div className="inter_page">
      <div className="left_info">{start ? <Questions /> : <Info />}</div>
      

      <div className="cam">
      {
        tost &&
        alert("Got Some isseu in recording ans ... do It Again...")
      }
        {/* {opencam ? (
          <div className="web_cam">
            <Webcam
              onUserMedia={() => setOpencam(true)}
              onUserMediaError={() => setOpencam(false)}
              mirrored={true}
              style={{ height: 300, width: "100%", xIndex: 10 }}
            />

            <div>
              <h1>Recording: {isRecording.toString()}</h1>
              <button
                onClick={isRecording ? stopSpeechToText : startSpeechToText}
                className="btn btn-active btn-primary"
              >
                {isRecording ? "Stop Recording" : "Start Recording"}
              </button>
            </div>
          </div>
        ) : ( */}
          <div className="cam_con">
            {
              opencam ?
              <Webcam
              onUserMedia={() => setOpencam(true)}
              onUserMediaError={() => setOpencam(false)}
              mirrored={true}
              style={{ height: 300, width: "100%", xIndex: 10 }}
            />
            :
            <div className="cl_cam">
              <BiSolidWebcam style={{ fontSize: "8rem",color:"white" }} />
            </div>
            }
            {/* <div className="cl_cam">
              <BiSolidWebcam style={{ fontSize: "8rem",color:"white" }} />
            </div> */}

            {/* {start && (
              <button
                onClick={() => setOpencam(true)}
                className="btn btn-soft btn-primary"
              >
                Enable Web Camera and Microphone
              </button>
            )} */}
            {
              opencam ?
              <button onClick={() => setOpencam(false)}
                className="btn btn-soft btn-primary">
                  Disable Web Camera and Microphone
                  </button>
                  :
                  <button onClick={() => setOpencam(true)}
                className="btn btn-soft btn-primary">
                  Enable Web Camera and Microphone
                  </button>
            }

            {!start && (
              <button
                onClick={() => setStart(true)}
                className="btn btn-primary"
              >
                Start Interview
              </button>
            )}

            {start && (
              <div>
                {isRecording && <strong>Recording...</strong> }

                <div className="btns">
                <button
                  onClick={isRecording ? stopSpeechToText : startSpeechToText}
                  style={{marginTop:"1rem"}}
                  className="btn btn-active btn-primary"
                >
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </button>

                {
                  currentidx >= questionsans.length-1 ?
                  <button className="btn btn-active btn-primary"><Link to="/feed">End Interview</Link></button>
                  :
                  <button onClick={handelSave} className="btn btn-active btn-primary">Save Ans</button>
                }
                <p>{interimResult}</p>

                </div>
              </div>
            )}
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Interview;
