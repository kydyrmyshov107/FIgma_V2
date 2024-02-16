import scss from "./Welcome.module.scss";
import img from "../../../assets/Rectangle 5.svg";
import imgTwo from "../../../assets/Frame 25.svg";
import Slider from "./Slider";
// import Slider from "../Slider";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <p>Рекламное агенство ADVUP</p>
        <div className={scss.content}>
          <div className={scss.wrap}>
            <h1>Новый поток клиентов Вашему продукту</h1>
            <img src={img} alt="" />
            <button>Приступим</button>
          </div>
          <div>
            <img className={scss.img} src={imgTwo} alt="" />
          </div>
          <div className={scss.slider}>
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
