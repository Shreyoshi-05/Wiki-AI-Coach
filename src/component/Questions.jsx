import React, { useContext, useState } from "react";
import "../css/Qestions.css";
import { AppContext } from "../context/AppProvider";
import { SiPanasonic } from "react-icons/si";
import { LuLightbulb } from "react-icons/lu";
import useSpeechToText from "react-hook-speech-to-text";
import { PiSpeakerHighFill } from "react-icons/pi";

const Questions = () => {
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


  const { currentidx, setCurrentidx, questionsans } = useContext(AppContext);

  const[question , setQuestion] = useState(JSON.parse(localStorage.getItem("qs-ans")));


  // if(!questionsans || questionsans.length > 0){
  //   return;
  // }
  // console.log("questionsans",question);


  function handelSpeak() {

    const textToSpeak = new SpeechSynthesisUtterance(
      questionsans[currentidx].question
    );
    window.speechSynthesis.speak(textToSpeak);
  }


  return (
    <div className="question_container">
      <div className="qes_num">
        {question.length > 0 &&
          question.map((item, idx) => {
            return (
              <button
                key={idx}
                className={currentidx != idx ? "idxbtn" : "idx_btn"}
              >
                Question # {idx + 1}
              </button>
            );
          })}
      </div>

      <div className="ques_des">
        {question.length > 0 && (
          <>
            <p>{question[currentidx].question}</p>
            <PiSpeakerHighFill
              onClick={handelSpeak}
              style={{ fontSize: "1.4rem", marginTop: "1rem" }}
            />
          </>
        )}
      </div>

      <div className="ques_alert">
        <span>
          {" "}
          <LuLightbulb /> Note :
        </span>
        <p>
          Click on Record Answer when you want to answer the question .At the
          end of interview we will give you feedback along with correct answer
          for eatch of question and your answer to compare it.
        </p>
      </div>
    </div>
  );
};

export default Questions;
