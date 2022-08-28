import { Component } from "react";
import head from "../images/head.png"
import tails from "../images/tails.png"
import "../css/Coin.css"

class Head extends Component {
    render() {
        return (
            <div className="coin">
                <img src={head}></img>
            </div>
        );
    }
}
export default Head;