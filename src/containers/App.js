import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Header from '../components/Header/Header';
import ScoreCard from '../components/ScoreCard/ScoreCard';
import ImageRender from '../components/ImageRender/ImageRender';

import './App.css';

const ImageArray = [
  {
    id: 1,
    src: require('../assets/images/img1.png')
  },
  {
    id: 2,
    src: require('../assets/images/img2.png')
  },
  {
    id: 3,
    src: require('../assets/images/img3.png')
  },
  {
    id: 4,
    src: require('../assets/images/img4.png')
  },
  {
    id: 5,
    src: require('../assets/images/img5.png')
  },
  {
    id: 6,
    src: require('../assets/images/img6.png')
  },
  {
    id: 7,
    src: require('../assets/images/img7.png')
  },
  {
    id: 8,
    src: require('../assets/images/img8.png')
  },
  {
    id: 9,
    src: require('../assets/images/img9.png')
  },
  {
    id: 10,
    src: require('../assets/images/img10.png')
  },
  {
    id: 11,
    src: require('../assets/images/img11.png')
  },
  {
    id: 12,
    src: require('../assets/images/img12.png')
  }
]

class App extends Component {

  state = {
    topScore: 0,
    currentScore: 0,
    imageClickCounter: {
      img1Counter: 0,
      img2Counter: 0,
      img3Counter: 0,
      img4Counter: 0,
      img5Counter: 0,
      img6Counter: 0,
      img7Counter: 0,
      img8Counter: 0,
      img9Counter: 0,
      img10Counter: 0,
      img11Counter: 0,
      img12Counter: 0,
    }
  };

  clickHandler = (event) => {

    if (event.target.getAttribute('value')){
      const stateCopy = { ...this.state };
      const value = event.target.getAttribute('value');
      const imageName = `img${value}Counter`;
      const numOfTimesClicked = stateCopy.imageClickCounter[imageName];
      if (numOfTimesClicked < 1) {
        stateCopy.currentScore = stateCopy.currentScore + 1;
        stateCopy.imageClickCounter[imageName] = stateCopy.imageClickCounter[imageName] + 1;
        if (stateCopy.topScore < stateCopy.currentScore) {  
          stateCopy.topScore = stateCopy.topScore + 1;
        }
        this.setState(stateCopy)
      } else {
        stateCopy.currentScore = 0
        Object.keys(stateCopy.imageClickCounter).forEach(e => stateCopy.imageClickCounter[e] = 0);
        this.setState(stateCopy)
      } 
    }
  }

  render() {
    const shuffledImageArray = shuffle(ImageArray);
    return (
      <div>
        <Header />
        <ScoreCard
          currentScore={this.state.currentScore} 
          topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row">
            {shuffledImageArray.map(image =>
              <ImageRender
                className="align-self-center"
                key={image.id}
                value={image.id}
                src={image.src}
                click={(event) => this.clickHandler(event)}
              />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
