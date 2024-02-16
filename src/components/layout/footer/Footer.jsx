import scss from "./Footer.module.scss";
import logo from "../../../assets/footerLogo.svg";
import message from "../../../assets/Vector.svg";
import line from "../../../assets/Line 3@2x.png";
import logoTwit from "../../../assets/Twit.svg";
import wka from "../../../assets/wka.svg";
import telec from "../../../assets/Telec.svg";
import facebook from "../../../assets/face.svg";
import diskord from "../../../assets/dis.svg";
import insta from "../../../assets/instagram.svg";
const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.row}>
            <div className={scss.holder}>
              <img src={logo} alt="" />
              <p>
                С другой стороны рамки и место обучения кадров позволяет
                <br /> оценить значение направлений прогрессивного развития!
              </p>
            </div>
            <div className={scss.grid}>
              <p>Остались вопросы?</p>
              <button>
                <img src={message} alt="" />
                Почта
              </button>
            </div>
          </div>
          <div className={scss.texts}>
            <p>Блогерам</p>
            <p>Рекламодателям</p>
            <p>Пользовательское соглашение</p>
            <p>Наши кейсы</p>
            <p>Помощь</p>
          </div>
          <img className={scss.line} src={line} alt="" />
          <div className={scss.inner}>
            <p>© 2023 ADVUP. All rights reserved.</p>
            <div className={scss.imgs}>
              <img src={logoTwit} alt="" />
              <img src={wka} alt="" />
              <img src={telec} alt="" />
              <img src={facebook} alt="" />
              <img src={diskord} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
