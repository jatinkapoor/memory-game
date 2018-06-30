import React from 'react';
import './ScoreCard.css';


const ScoreCard = (props) => {

  return (
    <header className="scoreSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="pull-right">
              <div>
                <div className="score">
                  <h4><b>SCORE</b></h4>
                  <h4 className="myScore">{props.currentScore}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="pull-left">
              <div>
                <div className="score">
                  <h4><b>TOP SCORE</b></h4>
                  <h4 className="myScore">{props.topScore}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>  
  );

}

export default ScoreCard;