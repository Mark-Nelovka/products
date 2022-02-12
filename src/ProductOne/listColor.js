import colors from "../arrColor";
import { v4 as uuidv4 } from "uuid";
import s from "./listColor.module.css";
import arrow from "../images/Arrow.svg";
import { Component } from "react";
class listColor extends Component {
  state = {
    color: "Цвет",
    hover: false,
    className: s.containerColor,
  };
  choiceColor = (e) => {
    this.setState({ color: e.target.textContent });
  };

  hoverToggle = () => {
    this.setState({
      hover: true,
      className: s.containerColorHover,
    });
  };

  hoverToggleLeave = () => {
    this.setState({
      hover: false,
      className: s.containerColor,
    });
  };

  render() {
    return (
      <div
        className={this.state.className}
        onMouseLeave={this.hoverToggleLeave}
      >
        <p className={s.colorName}>{this.state.color}</p>
        <button className={s.btnChangeColor} onMouseEnter={this.hoverToggle}>
          <img src={arrow} alt={"Arrow to down"} width={"9px"} height={"5px"} />
        </button>
        {!this.state.hover ? (
          ""
        ) : (
          <div
            onMouseLeave={this.hoverToggleLeave}
            className={s.containerChangeColor}
          >
            <ul className={s.listColor}>
              {colors.map((color) => {
                return (
                  <li
                    className={s.nameColor}
                    key={uuidv4()}
                    onClick={this.choiceColor}
                  >
                    {color}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default listColor;
