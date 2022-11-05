import "./addTag.css";
import React from "react";
import { useState } from "react";

export const AddTag = (props) => {
// const [tags, setTags] = useState({ready: false});
const [tag, setTag] = useState()

 
  const logTag = (tag) => {
  //  setTags([{
  //    film_id: props,
  //    tag: tag,
  // }]
  //  );
   
 };

const handleSubmit = (event) => {
event.preventDefault();
   props.setTags({
      ready: true,
       film_id: props.film_id,
       tag: tag,
     },
   );



    //  logTag(tag);
    
   }

 const handleTagChange = (event) => {
   setTag(event.target.value);
  //  console.log(event.target.value);
 };

return (
  <div>
    <form className="addTag" onSubmit={handleSubmit}>
      <input
        className="inputField"
        name="tag"
        placeholder="type your tag"
        onChange={handleTagChange}
      />
      <input className="button" type="Submit" value="Add Tag" />
    </form>
  </div>
);
}
