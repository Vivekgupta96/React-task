import React, { useState } from "react";

const Child1 = (props) => {
  const [val, setVal] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={val}
          onChange={(e) =>{ setVal(e.target.value)
            //console.log("vvvv"+val)
        }}
        />
        <button onClick={()=>{
            props.value(val)
        }}>submit</button>

      </div>
    </>
  );
};
export default Child1;
