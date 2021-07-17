import React from "react";

function Button({ filter }) {
  return (
    <div>
      <button type="button" onClick={() => filter("Yamaha")}>
        Yamaha
      </button>
    </div>
  );
}

export default Button;
