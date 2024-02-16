import scss from "./Boxs.module.scss";
import img from "../../../assets/iconOne.svg";
import imgTwo from "../../../assets/Two.png";
import imgTree from "../../../assets/iconTree.png";
import imgFour from "../../../assets/iconFour.png";

const Boxs = () => {
  return (
    <div className={scss.Boxs}>
      <div className="container">
        <h1 className={scss.meta}>Наши преимущества</h1>
        <div className={scss.content}>
          <div className={scss.cards}>
            <div className={scss.card}>
              <img src={img} alt="" />
              <h1 className={scss.title}>
                Всегда выполняем
                <br /> ваши запросы
              </h1>
              <p className={scss.text}>
                Разнообразный и богатый опыт консультация с <br />
                профессионалами из IT играет важную роль в формировании
              </p>
            </div>
            <div className={scss.cardTwo}>
              <img src={imgTwo} alt="" />
              <h1>
                Профессиональный
                <br /> подход:
              </h1>
              <p>
                Рекламные агентства имеют опыт работы в разных отраслях
                <br /> и знают, как эффективно привлекать целевую аудиторию.
              </p>
            </div>
            <div className={scss.box}></div>
          </div>
          {/*2 */}
          <div className={scss.row}>
            <div className={scss.cart}>
              <img src={imgTree} alt="" />
              <h1>Креативность</h1>
            </div>
            <div className={scss.cartTwo}>
              <img className={scss.four} src={imgFour} alt="" />
              <h1>Доступ к новейшим технологиям</h1>
              <p>
                Рекламные агентства обычно имеют доступ к самым
                <br /> передовым инструментам и технологиям в области
                <br /> маркетинга и рекламы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxs;
