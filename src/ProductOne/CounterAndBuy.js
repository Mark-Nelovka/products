import { Component } from "react";
import PropTypes from "prop-types";
import ListColor from "./listColor";
import s from "./counterAndBuy.module.css";
class CounterAndBuy extends Component {
  state = {
    counter: 1,
    colorBtnBuy: s.btnBuy,
  };

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    if (this.state.counter === 1) {
      return;
    }
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  changeBtnBuy = () => {
    this.setState({ colorBtnBuy: s.btnBuyClick });
  };
  render() {
    return (
      <>
        <ListColor counter={this.state.counter} />
        <div className={s.containerCounterBtn}>
          <button
            className={s.btnDecrement}
            type="button"
            onClick={this.decrement}
          >
            -
          </button>
          <span>{this.state.counter}</span>
          <button
            className={s.btnIncrement}
            type="button"
            onClick={this.increment}
          >
            +
          </button>
        </div>
        <div className={s.containerBtnBuy}>
          <button
            onClick={this.changeBtnBuy}
            type="button"
            className={this.state.colorBtnBuy}
          >
            Купить
          </button>
        </div>
      </>
    );
  }
}

export default CounterAndBuy;

CounterAndBuy.propTypes = {
  counter: PropTypes.number,
};
