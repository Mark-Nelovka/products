import colors from "../arrColor";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "./listColor.module.css";
import arrow from "../images/Arrow.svg";
import { Component } from "react";
class listColor extends Component {
  state = {
    color: "Цвет",
    hover: false,
    className: s.containerColor,
    checkbox: null,
    first: true,
    second: false,
    third: false,
    pay: 200,
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

  changeCheckboxOne = () => {
    this.setState({
      first: true,
      second: false,
      third: false,
      pay: 200,
    });
  };

  changeCheckboxSec = () => {
    this.setState({
      first: false,
      second: true,
      third: false,
      pay: 400,
    });
  };

  changeCheckboxThird = () => {
    this.setState({
      first: false,
      second: false,
      third: true,
      pay: 600,
    });
  };

  render() {
    return (
      <>
        <div
          className={this.state.className}
          onMouseLeave={this.hoverToggleLeave}
        >
          <p className={s.colorName}>{this.state.color}</p>
          <button className={s.btnChangeColor} onMouseEnter={this.hoverToggle}>
            <img
              src={arrow}
              alt={"Arrow to down"}
              width={"9px"}
              height={"5px"}
            />
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
        <div className={s.containerCheckbox}>
          {this.state.first ? (
            <label
              onChange={this.changeCheckboxOne}
              className={s.checkboxFirst}
            >
              <input type="checkbox" />
              <span className={s.checkboxTextFirst}>100 мл</span>
            </label>
          ) : (
            <label onChange={this.changeCheckboxOne}>
              <input type="checkbox" />
              <span className={s.checkboxTextFirst}>100 мл</span>
            </label>
          )}
        </div>
        <div className={s.containerCheckboxSec}>
          {this.state.second ? (
            <label onChange={this.changeCheckboxSec} className={s.checkboxSec}>
              <input type="checkbox" />
              <span className={s.checkboxTextSec}>200 мл</span>
            </label>
          ) : (
            <label onChange={this.changeCheckboxSec} className={s.qwe}>
              <input type="checkbox" />
              <span className={s.checkboxTextSec}>200 мл</span>
            </label>
          )}
        </div>
        <div className={s.containerCheckboxThird}>
          {this.state.third ? (
            <label
              onChange={this.changeCheckboxThird}
              className={s.checkboxThird}
            >
              <input type="checkbox" />
              <span className={s.checkboxTextThird}>300 мл</span>
            </label>
          ) : (
            <label onChange={this.changeCheckboxThird}>
              <input type="checkbox" />
              <span className={s.checkboxTextThird}>300 мл</span>
            </label>
          )}
        </div>
        <span>{this.state.pay * this.props.counter + " грн"}</span>
      </>
    );
  }
}

export default listColor;

listColor.propTypes = {
  color: PropTypes.string,
  hover: PropTypes.bool,
  checkbox: PropTypes.bool,
  first: PropTypes.bool,
  second: PropTypes.bool,
  third: PropTypes.bool,
  pay: PropTypes.number,
};
