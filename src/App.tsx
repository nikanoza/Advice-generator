import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import divaderMobile from "./assets/pattern-divider-mobile.svg";
import divaderDesktop from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";
function App() {
  const [advice, setAdvice] = useState<string>("");
  const [adviceId, setAdviceId] = useState<number>(0);
  useEffect(() => {
    const getAdvice = async () => {
      try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        setAdvice(response.data.slip.advice);
        setAdviceId(response.data.slip.id);
      } catch (error) {
        console.log(error);
      }
    };
    getAdvice();
  }, []);
  const getRandomAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" w-[343px] lg:w-[540px] h-[347px] lg:h-[332px] bg-[#313A48] mt-[120px] p-4 mx-auto rounded-[10px]">
        <div>
          <p className=" lg:text-[15px] text-[#53FFAA] font-extrabold  leading-normal text-center text-[11px] tracking-[3.457px] font-manrope ">
            Advice #{adviceId}
          </p>
          <h1 className=" mt-6 text-center text-[25px] text-[#CEE3E9] lg:text-[28px] lg:pl-[48px] lg:pr-[48px] ">
            "{advice}"
          </h1>
        </div>
        <div className=" flex justify-center">
          <picture>
            <source media="(max-width: 375px)" srcSet={divaderMobile} />
            <source media="(min-width: 1440px)" srcSet={divaderDesktop} />
            <img className="mt-[24px]" src={divaderMobile} alt="" />
          </picture>
        </div>
        <div
          onClick={getRandomAdvice}
          className=" absolute top-[55%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full bg-[#53FFAA] flex justify-center items-center mx-auto shadow-md hover:shadow-custom cursor-pointer  "
        >
          <img className=" flex items-center" src={dice} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
