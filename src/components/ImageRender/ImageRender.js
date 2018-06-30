import React from 'react';
import './ImageRender.css';

const imageRender = (props) => {
  return (
    <div className="col-md-3">
      <div className="cartoonCard hoverable">
        <img onClick={props.click} value={props.value} className="cartoonImg" src={props.src} alt="img"/> 
      </div>
    </div>
  );
}

export default imageRender;