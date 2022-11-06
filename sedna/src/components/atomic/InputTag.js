import React from "react";
import "./InputTag.css";
import { useState } from "react";

export const InputTag = (props) => {
  // const [tags, setTags] = useState([])

  const handleKeyDown = (e) => {
    if(e.key !== 'Enter') return
    const value = e.target.value
    if(!value.trim()) return
    if(props.tags.length < 5){
     props.setTags([...props.tags, value])
    e.target.value = ''
    }
    
  }

  const removeTag = (index) => {
    props.setTags(props.tags.filter((el, i) => i !== index))
  }

  return (
    <div className="tags-input-container">

      { props.tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}> &times; </span>
        </div>
      ))}
      <input onKeyDown={handleKeyDown} type="text" placeholder="type tag and hit enter"/>
    </div>
  );

}