import React from 'react';

function Avtar(props) {
  const { pic, name, round } = props;
  
  //giving style to the image
  const style = {
    borderRadius: round ? "50%" : "16px",
    marginTop: "20px",
    width:"200px"
  };

  return (
    <div>
      <img src={pic} alt="image" style={style} />
      <h1>{name}</h1>
    </div>
  );
}

export default Avtar;
