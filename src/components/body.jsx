import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Header from "./Header";
import setller1 from "../images/steller1.png";
import setller3 from "../images/steller3.png";
import searchEngine1 from "../images/searchEngine1.png";
import searchEngine2 from "../images/searchEngine2.png";
import stockTrend1 from "../images/stockTrend1.png"
import stockTrend3 from "../images/stockTrend3.png"
export default function MainBody() {
  const downloadFile=()=>{
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1NKCQjh_LiIFofSKo-QuH8t8D0p1kItSz/view?usp=drive_link"
    link.download = 'example.txt'; 
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link)

  }
  return (
    <>
      <Header />
      <div className="animate-on-load h-screen flex flex-row justify-between items-center font-serif ">
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-1/2 h-1/2 text-left">
            <h1 className="text-2xl font-bold animate-slidein2">
              <div>Hey 👋, I am </div>
              <div className="text-3xl text-purple-600">Sandeep Mohapatra</div>
              <div>And i like</div>
              <span>
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
              </span>
            </h1>
            <button className="inline-flex items-center rounded-md  px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-black mr-2 hover:text-xl hover:border-2 hover:border-black animate-slidein2">
              <a href="/Connect-me">Get In Touch</a>
            </button>
            <button className="inline-flex items-center rounded-md  px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-black hover:text-xl hover:border-2 hover:border-black animate-slidein2" onClick={downloadFile}>
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="flex items-center justify-center w-80 h-80 rounded-full ring-1 ring-inset ring-black hover:text-xl hover:border-2 hover:border-black animate-slidein2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div className="animate-on-load h-screen animate-slidein3 font-serif text-lg font-semibold leading-8" style={{ height: '200vh' }}>
        <div className="h-1/4  w-max font-black text-6xl ml-8">projects<span className="text-6xl text-purple-600">.</span></div>
        <div className="h-1/4 ml-12 mr-12 animate-slidein4">
          <div className="font-bold text-2xl">Stellar Forge</div>
          <div className="flex items-center justify-center ml-1">
            <div className="w-1/2 ">
              Created a full stack web application showcasing open source
              projects from students, universities, and organizations. Developed
              with modern technologies including MongoDb, React, Express,
              Node.js for seamless user experience. Implemented features for
              project submission, browsing, and community interaction, and
              collaboration platforms.
            </div>
            <div className="w-1/2 flex items-center justify-around">
              <img
                src={setller1}
                alt=""
                srcset=""
                className="w-1/3 hover:animate-enlarge"
              />
              <img
                src={setller3}
                alt=""
                srcset=""
                className="w-1/3 hover:animate-enlarge"
              />
            </div>
          </div>
        </div>
        <div className="h-1/4 ml-12 mr-12 animate-slidein4 ">
          <div className="font-bold text-2xl text-right">Search Engine</div>
          <div className="flex items-center justify-center ml-1">
            <div className="w-1/2 flex items-center justify-around">
              <img
                src={searchEngine1}
                alt="Search Engine Home"
                srcset=""
                className="w-1/3 hover:animate-enlarge"
              />
              <img
                src={searchEngine2}
                alt="Search Engine Search"
                srcset=""
                className="w-1/3 hover:animate-enlarge"
              />
            </div>
            <div className="w-1/2 ">
              Designed and implemented a Python chatbot project utilizing
              natural language processing for interactive user engagement.
              Engineered functionalities for task automation, personalized
              assistance, and seamless integration with messaging platforms.
              Demonstrated expertise in Python programming and AI-powered
              conversational agents.
            </div>
          </div>
        </div>
        <div className="h-1/4 ml-12 mr-12 animate-slidein4">
          <div className="font-bold text-2xl">Stock Trend Prediction</div>
          <div className="flex items-center justify-center ml-1">
            <div className="w-1/2 ">
              Developed a stock trend prediction project using layered LSTM
              (Long Short-Term Memory) neural networks in Python. Applied
              advanced deep learning techniques to analyze historical stock data
              and forecast future trends with high accuracy. Demonstrated
              proficiency in time series analysis, neural network modeling, and
              predictive analytics.
            </div>
            <div className="w-1/2 flex items-center justify-around">
              <img
                src={stockTrend1}
                alt="Stock Trend Predicted"
                srcset=""
                className="w-1/3 hover:animate-enlarge"
              />
              <img
                src={stockTrend3}
                alt="Stock Trend Observed"
                srcset=""
                className="w-1/3 hover:animate-enlarge"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
