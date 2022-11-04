import React from "react";

export const IndexPage = () => {

  return (
    <div className="wholePage-container">
      <h1>Film list</h1>
      <span>
        <form>
          <input name="search" placeholder="🔍 Search tags" />
          <input type="Submit" value="search" />
        </form>
      </span>
    </div>
  )
};
