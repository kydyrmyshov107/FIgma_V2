import scss from "./Sidebar.module.scss";
import img from "../../../assets/Rectangle 14.svg";
import fire from "../../../assets/FireTwo.png";
import line from "../../../assets/Line 4.svg";
import logoPlayer from "../../../assets/logoPlayer.svg";
import FreeFire from "../../../assets/FreeFire.svg";
import lastImg from "../../../assets/girlLast.svg";

const Sidebar = () => {
  return (
    <div className={scss.Sidebar}>
      <div className="container">
        <h2>Наши кейсы</h2>
        <div className={scss.content}>
          <div className={scss.row}>
            <div>
              <img src={img} alt="" />
            </div>
            <div className={scss.items}>
              <div className={scss.grid}>
                <img src={fire} alt="" />
                <button>Игры</button>
                <button>Коллабарация</button>
              </div>
              <div className={scss.box}>
                <h1>
                  Игровой проект
                  <br /> War Thunder X ДУЛО
                </h1>
                <p>
                  Разнообразный и богатый опыт консультация с профессионалами из
                  IT играет важную роль в формировании всесторонне
                  сбалансированных нововведений. Значимость этих проблем
                  настолько очевидна, что новая модель организационной.
                </p>
              </div>
              <button className={scss.button}>Подробнее</button>
            </div>
          </div>
          {/* //!2 */}
          <div className={scss.inner}>
            <p className={scss.caption}></p>
            <div className={scss.items}>
              <p>Общее кол-во просмотров</p>
              <h3>20.000+</h3>
            </div>
            <img src={line} alt="" />
            <p className={scss.caption}></p>
            <div>
              <p>Лайков</p>
              <h3>20.000+</h3>
            </div>
            <img src={line} alt="" />
            <p className={scss.caption}></p>
            <div>
              <p>охваты</p>
              <h3>20.000+</h3>
            </div>
          </div>
          {/* //!3 */}
          <div className={scss.holder}>
            <div className={scss.wrapper}>
              <div className={scss.tagline}>
                <p className={scss.text}>Игровой проект War Thunder</p>
                <p className={scss.lead}>Специальный проект с Моргенштерном</p>
              </div>
              <img src={img} alt="" />
            </div>
            <div className={scss.wrapper}>
              <div className={scss.tagline}>
                <p className={scss.text}>Казино Stake x Drake </p>
                <p className={scss.lead}>Азарт, Рэп, Реклама</p>
              </div>
              <img src={logoPlayer} alt="" />
            </div>
            <div className={scss.wrapper}>
              <div className={scss.tagline}>
                <p className={scss.text}>Игровой проект Free Fire</p>
                <p className={scss.lead}>Уникальная рекламная компания</p>
              </div>
              <img src={FreeFire} alt="" />
            </div>
            <div className={scss.wrapper}>
              <div className={scss.tagline}>
                <p className={scss.text}>VK Music</p>
                <p className={scss.lead}>
                  Музыкальный сервис соц. сети ВКонтакте
                </p>
              </div>
              <img src={lastImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
