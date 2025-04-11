import React, { useEffect, useState } from "react";
import { options } from "../context/Constents";
import ShimmerCard from "./Shimmer";
import ShimmerFullPage from "./Shimmer";
import { Link } from "react-router-dom";
import "../css/wiki.css";
import { IoSearch } from "react-icons/io5";


const Wiki = () => {
  const [input, setInput] = useState("ai");
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);

  async function handelFetach(prop) {
    
const url =
`https://searx-search-api.p.rapidapi.com/search?q=${prop}&format=json`;

    setLoding(true);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.results);
      setData(result.results);
      setLoding(false);
    } catch (error) {
      console.error(error);
      setLoding(false);
    }
  }

  useEffect(() => {
    handelFetach(input);
  }, []);

  if (loding) {
    return <ShimmerFullPage />;
  }

  return (
    <div className="wiki_page">
      <div className="input_con">
        <input
          type="text"
          placeholder="what do u want to know.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="search_div" onClick={()=>handelFetach(input)}>
        <IoSearch className="search"/>
        </div>
      </div>

      <div className="container">
      {data &&
        data.map((item, idx) => {
          return (
            <div className="contents" key={idx}>
              <Link to={item.url}>
                <h2 className="heading">{item.title}</h2>
                <p>{item.content}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wiki;
