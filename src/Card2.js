import React from 'react';
import Confetti from 'react-dom-confetti';

class Card2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 0,
            winner: false,
            turn: false,
            class: 'square',
            completed: false,
        }
    }

    componentDidMount() {
    }


    render() {
        if (this.state.randomNumber >= 20) {
            this.setState({
                randomNumber: 'You Win',
                winner: true,
                class: 'winning-square',
                completed: true
            });
        }
        return(
            <div className={this.state.class}>
                <Confetti active= {this.state.completed} />
                <p>Player 2</p>
                {this.state.randomNumber}
                <button disabled={this.state.winner} onClick={this._generateRandomNumber}>Click Me</button>
            </div>
        );
    }

    _generateRandomNumber = () => {
        let min = -2;
        let max = 6;
        let rand = min + (Math.random() * (max-min));
        this.setState({
          randomNumber: this.state.randomNumber + Math.round(rand)
        });
      }

}

export default Card2;