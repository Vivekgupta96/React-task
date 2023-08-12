
import React from 'react';

function Button(props) {
    const { text, width } = props;
  
    return <button style={{ width: width }}>{text}</button>;
  }

export default Button;