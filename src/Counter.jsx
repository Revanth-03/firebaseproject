import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      play: true,
      intervalsId: null,
    };
  }

  //   shouldComponentUpdate(nextProp) {
  //     if (nextProp.id === 0 && nextProp.count >= 10) {
  //       return false;
  //     }
  //     return true;
  //   }

  startcounter = () => {
    const { count, intervalsId } = this.state;
    const intervalId = setInterval(
      () =>
        this.setState(
          {
            count: this.state.count++,
          },
          this.setState({ intervalIds: intervalId })
        ),
      1000
    );
  };

  stopCounter = () => {
    clearInterval(this.state, intervalId);
    this.setState({ intervalId: null });
  };

  componentDidMount() {
    this.startcounter();
  }
  play_OR_pause = () => {
    const { play } = this.state;
    if (!play) {
      this.stopCounter();
      return;
    }
    this.setState({
      play: !this.state.play,
    });
    this.startcounter();
  };

  render() {
    return (
      <div>
        <h1>Counter:{this.state.count}</h1>
        <button onClick={this.play_OR_pause}>
          {this.state.play ? "play" : "pause"}
        </button>
      </div>
    );
  }
}
