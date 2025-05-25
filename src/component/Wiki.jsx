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
  const[showData, setShowData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [page, setPage] = useState(1);
  const totalpage = data.length/5;

  async function handelFetach(prop) {
    const url = `https://searx-search-api.p.rapidapi.com/search?q=${prop}&format=json`;

    setLoding(true);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.results);
      setLoding(false);
    } catch (error) {
      console.error(error);
      setLoding(false);
    }
  }

  useEffect(() => {
    handelFetach(input);
  },[]);

  console.log(data)


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
        <div className="search_div" onClick={() => handelFetach(input)}>
          <IoSearch className="search" />
        </div>
      </div>

      <div className="container">
        {data &&
          data.slice(page*5-5,page*5).map((item, idx) => {
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

      <div className="page">
        {Array(totalpage%1 ==0 ?totalpage:Math.ceil(totalpage))
          .fill("")
          .map((num, idx) => {
            return (
              <button
                style={
                  page == idx + 1
                    ? { backgroundColor: "gray", color: "white" }
                    : null
                }
                onClick={()=>setPage(idx + 1)}
                key={idx}
              >
                {idx + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Wiki;
