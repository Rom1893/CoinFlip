import { Component } from "react";
import head from "../images/head.png"
import tails from "../images/tails.png"
import "../css/Coin.css"


class Tails extends Component {
    render() {
        return (
            <div className="coin">
                <img src={tails}></img>
            </div>
        );
    }
}
export default Tails;