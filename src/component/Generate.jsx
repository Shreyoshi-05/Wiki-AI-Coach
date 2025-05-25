import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import run from "../context/Gemini";
import AddNotes from "./AddNotes";

const Generate = () => {
  const [loding, setLoding] = useState(false);
  const {
    jobRole,
    setJobRole,
    experience,
    setExperience,
    jobDescription,
    setJobDescription,
    questionsans,
    user,
    setQuestionans,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const quary =
    "job role:" +
    jobRole +
    ", job description: " +
    jobDescription +
    " ,years of experience:" +
    experience +
    ", based on that information please give me 6 interview questions with answer in json formet,give question and answer as filed in json";

  async function handelSubmit() {
    setLoding(true);

    const res = await run(quary);
    const newresponse = res.replace(/```json|```/g, "").trim();

    // console.log(newresponse)

    if(newresponse){
      localStorage.removeItem("qs-ans");
      localStorage.removeItem("feedback");
      localStorage.setItem("qs-ans",newresponse)
    }
    setLoding(false);
    {
      user  ? navigate("/interview"):navigate("/signup");
    }
  }

  console.log(loding);

  return (
    <div className="w-full min-h-screen px-4 py-8 bg-gray-50">
  <div className="max-w-5xl mx-auto flex flex-col gap-6">
    
    {/* Header Section */}
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Create and start your AI Interview</p>
      </div>

      {/* Modal Trigger */}
      <button
        className="btn bg-black text-white hover:bg-gray-800"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        {loding ?
        <span className="loading loading-dots loading-lg"></span>:
        "+ Generate Interview"
        }
      </button>
    </div>

    {/* Modal */}
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Customize Your Interview</h3>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter job role..."
            className="input input-bordered w-full"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter job description..."
            className="input input-bordered w-full"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Years of experience..."
            className="input input-bordered w-full"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </form>

        <div className="modal-action">
          <form method="dialog" className="flex gap-4">
            <button className="btn">Close</button>
            <button
              className="btn bg-black text-white hover:bg-gray-800"
              onClick={handelSubmit}
            >
              {loding ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Create"
              )}
            </button>
          </form>
        </div>
      </div>
    </dialog>

    <div className="w-full h-[1px] bg-black"></div>

    <div className="notes">
      <AddNotes />
    </div>
  </div>
</div>

  );
};

export default Generate;
