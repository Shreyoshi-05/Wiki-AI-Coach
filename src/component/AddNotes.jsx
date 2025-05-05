import React, { useEffect, useState } from "react";
import "../css/Addnotes.css";
import note from "../assets/notes.png";
import create from "../assets/edit.png";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

const AddNotes = () => {
  const [notes, setNotes] = useState(()=>{
    const note = JSON.parse(localStorage.getItem("notes"));
    return note ? note : [];
  });
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const [editidx, setEditidx] = useState(null);

  function handelAdd() {
    if (toggle) {
      let copy = [...notes];
      copy[editidx] = input;
      setNotes(copy);

      setToggle(false);
      setEditidx(null);
      setInput("");

    } else {

      setNotes([...notes, input]);
      setInput("");
    }
  }

  function handelDelete(id) {
    let copy = [...notes];
    copy = copy.filter((item, idx) => idx != id);
    setNotes(copy);
  }

  function handelEdit(id) {
    setToggle(true);
    setInput(notes[id]);
    setEditidx(id);
  }

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes]);

  return (
    <div className="add_page">
      <div className="head">
        <img src={note} alt="" />
        <h1>Got Something to Remember ?</h1>
      </div>

      <div className="input_div">
        <input
          type="text"
          placeholder="add a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IoMdAdd
          onClick={handelAdd}
          style={{ fontSize: "2.5rem", fontWeight: "700", color: "white" }}
        />
      </div>

      <div className="notes_container">
        {notes.map((item, idx) => {
          return (
            <div className="box" key={idx}>
              <p>{item}</p>

              <span>
                <FaEdit onClick={() => handelEdit(idx)} />
                <MdOutlineDelete onClick={() => handelDelete(idx)} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddNotes;
