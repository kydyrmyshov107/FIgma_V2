import scss from "./Form.module.scss";
import one from "../../../assets/rigth.svg";
import two from "../../../assets/left.svg";
import blackOne from "../../../assets/blackOne.svg";
import blackTwo from "../../../assets/blacktwo.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const urlTwo = import.meta.env.VITE_BACKEND_SECOND;

const notify = () => toast.error("write something");
const notifySucces = () => toast.success("success");

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [bloger, setBloger] = useState(false);
  const [compteled, setCompleted] = useState(false);

  const handle = async () => {
    if (name === "" || email === "" || number === "" || text === "") {
      notify();
    } else {
      const newData = {
        name,
        email,
        number,
        text,
      };
      try {
        const response = (await axios.post(bloger ? url : urlTwo, newData))
          .data;
        notifySucces();
        console.log(response);
        toast.successfully;
      } catch (error) {
        console.error(error);
      }
      setName("");
      setEmail("");
      setNumber("");
      setText("");
    }
  };

  const vlok = () => {
    setBloger(true);
    setCompleted(true);
  };
  const market = () => {
    setBloger(false);
    setCompleted(false);
  };

  return (
    <div className={scss.Form}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.section}>
            <h1>Оставить заявку</h1>
            <p>
              Рекламные агентства имеют опыт работы в разных отраслях и<br />
              знают, как эффективно привлекать целевую аудиторию.
            </p>
          </div>
          <div className={scss.form}>
            <div className={scss.buttons}>
              <div>
                <p>Кто по жизни?</p>
                <div className={scss.main_button}>
                  <button
                    className={compteled ? scss.success : scss.error}
                    onClick={vlok}
                  >
                    Блогер
                  </button>
                  <button
                    onClick={market}
                    className={!compteled ? scss.success : scss.error}
                  >
                    Рекламодатель
                  </button>
                </div>
              </div>
            </div>
            <div className={scss.control}>
              <div className={scss.inputs}>
                <p>Ваше имя</p>
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={scss.inputs}>
                <p>Почта</p>
                <input
                  type="text"
                  placeholder="Введите электронную почту"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={scss.inputs}>
                <p>Телефон</p>
                <input
                  type="text"
                  placeholder="Введите ваш номер телефона "
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div>
                <p>Комментарий</p>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className={scss.big_input}
                  type="text"
                  placeholder="Введите ваш номер телефона "
                />
              </div>
              <div className={scss.tip}>
                <button
                  onClick={() => {
                    handle();
                  }}
                >
                  Отправить
                </button>
                <ToastContainer />
                <p>
                  Нажав на кнопку, вы соглашаетесь <br /> на обработку
                  персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.rigth}>
        <img src={one} alt="" />
      </div>
      <div className={scss.left}>
        <img src={two} alt="" />
      </div>
      <div className={scss.blackOne}>
        <img src={blackOne} alt="" />
      </div>
      <div className={scss.blackTwo}>
        <img src={blackTwo} alt="" />
      </div>
    </div>
  );
};

export default Form;
