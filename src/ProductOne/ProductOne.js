import { Component } from "react";
// import ImageOne from './ImageOne'
import images from "../images/image1-min.png";
import vactorScale from "../images/scales-min.svg";

import ListColor from "./listColor";
import s from "./ProductOne.module.css";

class ProductCardOne extends Component {
  state = {};

  render() {
    return (
      <>
        <article className={s.card}>
          <div className={s.containerTop}>
            <div className={s.ContainerNew}>
              <p className={s.new}>NEW</p>
            </div>
            <div className={s.img}>
              <img
                src={images}
                alt={"Мицелярная вода"}
                width={"256px"}
                height={"261px"}
              />
              {/* <ImageOne /> */}
            </div>
            <div className={s.containerScale}>
              <img
                src={vactorScale}
                alt={"Scale"}
                width={"16px"}
                height={"16px"}
              />
            </div>
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
            <ListColor />
            <span>200грн</span>
          </div>
        </article>
      </>
    );
  }
}

export default ProductCardOne;
