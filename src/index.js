import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/id/1003/367/267";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
