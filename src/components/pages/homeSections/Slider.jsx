import scss from "./Slider.module.scss";
import one from "../../../assets/hyper.svg";
import two from "../../../assets/hyperTwo.svg";
import tree from "../../../assets/hyperTree.svg";
import four from "../../../assets/hyperFour.svg";
import five from "../../../assets/hyperFive.svg";
import six from "../../../assets/hyperSix.svg";
import seven from "../../../assets/hyperSeven.svg";
import { useKeenSlider } from "keen-slider/react";

const logos = [
  { img: one },
  { img: two },
  { img: tree },
  { img: four },
  { img: five },
  { img: six },
  { img: seven },
];

const animation = { duration: 9000, easing: (t) => t };

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className={scss.Rectangle}>
      <div className={scss.content}>
        <div className={scss.main}>
          <div ref={sliderRef} className={scss.keen_slider}>
            {logos.map((item, index) => (
              <div key={index} className="keen-slider__slide number-slide1">
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
