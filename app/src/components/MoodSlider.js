import React, { Component } from 'react';

class MoodSlider extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      value: 5,
      slideRange: 10,
      moods: [
        'Great',
        'Good',
        'Fine',
        'Okay',
        'Somewhat okay',
        'Meh',
        'Not okay',
        'Not fine',
        'Bad',
        'Really bad'
      ]
    };
    this.adjustMood = this.adjustMood.bind(this);
  }

  adjustMood(val) {
    this.setState({ value: val });
  }

  render() {
    return (
      <div className="mood-slider">
        <div className="mood-slider__slide" />
        <h2>{this.state.moods[this.state.value]}</h2>
        <input
          type="range"
          min={0}
          max={this.state.slideRange}
          onChange={this.adjustMood.bind(this)}
        />
      </div>
    );
  }
}

export default MoodSlider;
