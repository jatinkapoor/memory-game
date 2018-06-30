import React from 'react';
import './ScoreCard.css';


const ScoreCard = (props) => {

  return (
    <div className="row scoreSection">
      <div className="col-6">
        <div className="pull-right">
          <div>
            <div className="score">
              <h4><b>SCORE</b></h4>
              <h4>{props.currentScore}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="pull-left">
          <div>
            <div className="score">
              <h4><b>TOP SCORE</b></h4>
              <h4>{props.topScore}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ScoreCard;