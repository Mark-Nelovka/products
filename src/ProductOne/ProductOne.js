import { Component } from "react";
import PropTypes from "prop-types";
import images from "../images/image1-min.png";
import pantene from "../images/pantene-min.png";
import concept from "../images/concept-min.png";
import vactorScale from "../images/scales-min.svg";
import checkScale from "../images/checkmark.svg";
import CounterAndBuy from "./CounterAndBuy";
import s from "./ProductOne.module.css";

class ProductCardOne extends Component {
  state = {
    page: 1,
    checkScales: false,
  };

  changePage = (e) => {
    if (e.target.textContent === "1") {
      this.setState({ page: 1 });
      return;
    } else if (e.target.textContent === "2") {
      this.setState({ page: 2 });
      return;
    }
    this.setState({ page: 3 });
    return;
  };

  changeCheckScale = () => {
    this.setState({ checkScales: !this.state.checkScales });
  };

  render() {
    return (
      <>
        <article className={s.card}>
          <div className={s.containerTop}>
            <div className={s.ContainerNew}>
              <p className={s.new}>NEW</p>
            </div>
            <div className={s.containerImg}>
              {this.state.page === 1 && (
                <img
                  className={s.img}
                  src={images}
                  alt={"Мицелярная вода"}
                  width={"256px"}
                  height={"261px"}
                />
              )}
              {this.state.page === 2 && (
                <img
                  className={s.img}
                  src={pantene}
                  alt={"Мицелярная вода"}
                  width={"256px"}
                  height={"261px"}
                />
              )}
              {this.state.page === 3 && (
                <img
                  className={s.img}
                  src={concept}
                  alt={"Мицелярная вода"}
                  width={"256px"}
                  height={"261px"}
                />
              )}
            </div>
            <button
              onClick={this.changeCheckScale}
              type="button"
              className={s.containerScale}
            >
              {this.state.checkScales ? (
                <img
                  src={checkScale}
                  alt={"Scale"}
                  width={"16px"}
                  height={"16px"}
                />
              ) : (
                <img
                  src={vactorScale}
                  alt={"Scale"}
                  width={"16px"}
                  height={"16px"}
                />
              )}
            </button>
          </div>

          <div className={s.containerProductName}>
            <p className={s.productName}>Шампунь</p>
          </div>
          <div className={s.containerDescription}>
            <p className={s.descriptionProduct}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className={s.price}>
            <CounterAndBuy />
          </div>
        </article>
        <div className={s.containerBtnPage}>
          <button onClick={this.changePage} className={s.btnPage} type="button">
            1
          </button>
          <button onClick={this.changePage} className={s.btnPage} type="button">
            2
          </button>
          <button onClick={this.changePage} className={s.btnPage} type="button">
            3
          </button>
        </div>
      </>
    );
  }
}

export default ProductCardOne;

ProductCardOne.propTypes = {
  page: PropTypes.number,
};
