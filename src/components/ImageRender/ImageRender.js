import React from 'react';
import './ImageRender.css';

const imageRender = (props) => {
  return (
    <div className="col-md-3">
      <div className="cartoonCard">
        <img onClick={props.click} value={props.value} className="cartoonImg hoverable" src={props.src} alt="img"/> 
      </div>
    </div>
  );
}

export default imageRender;