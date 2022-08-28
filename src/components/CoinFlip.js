import React, { Component } from 'react'
import Tails from "./Tails"
import Head from './Head'

class CoinFlip extends Component {
    state = { head: null, flips: 0, heads: 0, tails: 0 }

    flip = () => {
        this.setState({flips: this.state.flips+1})
        let random = Math.floor(Math.random() * 2)
        if (random === 0){
            this.setState({ head: false, tails: this.state.tails+1 })
        } else {
            this.setState({ head: true, heads: this.state.heads+1 })
        }
        
    }

    render() {
        let face;
        if (this.state.head === true){
            face = <Head/>
        } else if (this.state.head === false)  {
            face = <Tails/>
        }    
        return (
            <div>
                <h1>Lets flip a coin!</h1>
                {face}
                <button onClick={this.flip}>Flip a coin!</button>
                <h5>{`out of ${this.state.flips} flips, there have been ${this.state.heads} heads, and ${this.state.tails} tails `}</h5>
            </div>
        );
    }
}
export default CoinFlip;