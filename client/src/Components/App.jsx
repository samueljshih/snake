import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Snake from './gameObjects/Snake.jsx';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.gameObjects = {
      snake: {}
    };
    this.interval = 0;
    this.draw = this.draw.bind(this);
  }

  init() {
    console.log('Initialized');
    var snake = new Snake();
    this.gameObjects.snake = snake;
    this.interval = setInterval(this.update.bind(this), 30);
  }

  update() {
    this.draw();
    this.gameObjects.snake.move();
  }

  draw() {
    console.log('Draw Item');
    var snake = this.gameObjects.snake;
    var stage = this.refs.canvas.getContext('2d');
    stage.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
    stage.beginPath();
    stage.rect(snake.x, snake.y, snake.width, snake.height);
    stage.fillStyle = 'white';
    stage.fill();
    stage.stroke();
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div className="mainContainer">
        <h1 className="logo">Game Time</h1>
        <canvas id="myCanvas" ref="canvas" width={700} height={700} />
      </div>
    );
  }
}

export default App;
