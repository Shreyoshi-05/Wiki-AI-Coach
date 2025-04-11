import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const [questionsans, setQuestionans] = useState(()=>{
    try {
      const stor = localStorage.getItem("qs-ans");
      return stor ? JSON.parse(stor):[];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const[userAns , setUserAns] = useState("");
  const [currentidx, setCurrentidx] = useState(0);
  const [feedback , setFeedback] = useState([]);
  const [singlefeed , setSinglefeed] = useState("");
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        jobRole,
        setJobRole,
        experience,
        setExperience,
        jobDescription,
        setJobDescription,
        questionsans,
        setQuestionans,
        userAns , setUserAns,
        currentidx, setCurrentidx,
        feedback , setFeedback,
        singlefeed , setSinglefeed,
        user, setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
