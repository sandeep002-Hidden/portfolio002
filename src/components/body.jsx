import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Header from "./Header";
import setller1 from "../images/steller1.png";
import setller3 from "../images/steller3.png";
import searchEngine1 from "../images/searchEngine1.png";
import searchEngine2 from "../images/searchEngine2.png";
import stockTrend1 from "../images/stockTrend1.png";
import stockTrend3 from "../images/stockTrend3.png";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function MainBody() {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1NKCQjh_LiIFofSKo-QuH8t8D0p1kItSz/view?usp=drive_link";
    link.download = "example.txt";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <>
      <Header />
      <div className="h-fit w-full flex flex-col-reverse md:flex-row md:h-screen  justify-evenly items-center font-serif ">
        <div className="w-screen flex justify-center md:w-1/2  items-center flex-wrap">
          <div className="w-1/2 h-1/2 text-left">
            <div className="text-2xl font-bold animate-slidein2 flex justify-center items-center flex-col">
              <div className="text-left">Hey 👋, I am </div>
              <div className="text-3xl text-purple-600 text-nowrap">
                Sandeep Mohapatra
              </div>
              <div className="text-nowrap">and I am passionate about</div>
              <div className="w-full h-min text-nowrap">
                <Typewriter
                  words={[
                    " Web Development",
                    "Problem Solving",
                    "Machine Learning",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </div>
            </div>
            <div className="h-full flex justify-center items-center">
              <button className=" text-nowrap inline-flex items-center rounded-md  px-2 py-1 text-sm md:text-xl text-purple-600 font-bold mr-2 hover:text-xl hover:border-2 hover:border-black animate-slidein2">
                <Link to="./Contact-me">Get in Touch</Link>
              </button>
              <button
                className="text-nowrap inline-flex items-center rounded-md  px-2 py-1 text-sm md:text-xl text-purple-600 font-bold hover:text-xl hover:border-2 hover:border-black animate-slidein2"
                onClick={downloadFile}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center w-80 h-80 rounded-full ring-1 ring-inset ring-black hover:border-2 hover:border-black animate-slidein2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div className=" animate-slidein3 font-serif text-lg font-semibold leading-8">
        <div className="h-1/4 my-32 md:my-0  w-max font-black text-6xl ml-8">
          projects<span className="text-6xl text-purple-600">.</span>
        </div>
        <div className="h-max mx-8 my-16 animate-slidein4 flex justify-center items-center flex-col">
          <div className="font-bold text-3xl">
            St<span className="text-3xl text-purple-600">e</span>llar Forg
            <span className="text-3xl text-purple-600">e</span>
          </div>
          <div className="flex my-8 flex-col items-center justify-center ml-1 md:flex-row md:w-screen md:flex md:items-center md:justify-evenly">
            <div className="md:w-1/3 text-justify">
              Created a full stack web application showcasing open source
              projects from students, universities, and organizations. Developed
              with modern technologies including MongoDb, React, Express,
              Node.js for seamless user experience. Implemented features for
              project submission, browsing, and community interaction, and
              collaboration platforms.
            </div>
            <div className="w-fit flex items-center flex-col justify-around md:w-1/3">
              <img
                src={setller1}
                alt=""
                srcset=""
                className="my-4 w-fit hover:animate-enlarge"
              />
              <img
                src={setller3}
                alt=""
                srcset=""
                className="my-4 w-fit hover:animate-enlarge"
              />
            </div>
          </div>
        </div>
        <div className="h-max mx-8 my-16 animate-slidein4 flex justify-center items-center flex-col">
          <div className="font-bold text-3xl">
            S<span className="text-3xl text-purple-600">e</span>arch Engin
            <span className="text-3xl text-purple-600">e</span>
          </div>
          <div className="flex my-8 flex-col items-center justify-center ml-1 md:flex-row-reverse md:w-screen md:flex md:items-center md:justify-evenly">
            <div className="md:w-1/3 text-justify">
              Designed and implemented a Python chatbot project utilizing
              natural language processing for interactive user engagement.
              Engineered functionalities for task automation, personalized
              assistance, and seamless integration with messaging platforms.
              Demonstrated expertise in Python programming and AI-powered
              conversational agents.
            </div>
            <div className="w-fit flex items-center flex-col justify-around md:w-1/3">
              <img
                src={searchEngine1}
                alt="Search Engine Home"
                srcset=""
                className="my-4 w-fit "
              />
              <img
                src={searchEngine2}
                alt="Search Engine Search"
                srcset=""
                className="my-4 w-fit"
              />
            </div>
          </div>
        </div>
        <div className="h-max mx-8 my-16 animate-slidein4 flex justify-center items-center flex-col">
          <div className="font-bold text-2xl">
            Stock Tr<span className="text-2xl text-purple-600">e</span>nd Pr
            <span className="text-2xl text-purple-600">e</span>diction
          </div>
          <div className="flex my-8 flex-col items-center justify-center ml-1 md:flex-row md:w-screen md:flex md:items-center md:justify-evenly">
            <div className="md:w-1/3 text-justify">
              Developed a stock trend prediction project using layered LSTM
              (Long Short-Term Memory) neural networks in Python. Applied
              advanced deep learning techniques to analyze historical stock data
              and forecast future trends with high accuracy. Demonstrated
              proficiency in time series analysis, neural network modeling, and
              predictive analytics.
            </div>
            <div className="w-fit flex items-center flex-col justify-around md:w-1/3">
              <img
                src={stockTrend1}
                alt="Stock Trend Predicted"
                srcset=""
                className="my-4 w-fit "
              />
              <img
                src={stockTrend3}
                alt="Stock Trend Observed"
                srcset=""
                className="my-4 w-fit "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
