import Header from "./Header";
import setller1 from "../images/steller1.png";
import setller2 from "../images/steller2.png";
import setller3 from "../images/steller3.png";
import searchEngine1 from "../images/searchEngine1.png";
import searchEngine2 from "../images/searchEngine2.png";
import stockTrend1 from "../images/stockTrend1.png";
import stockTrend2 from "../images/stockTrend2.png";
import stockTrend3 from "../images/stockTrend3.png";
import Footer from "./footer";
export default function Projects() {
  return (
    <>
      <Header />
      <div className="h-screen relative font-serif animate-slidein2">
        <div className="m-12 h-max text-2xl font-semibold">Stellar Forge</div>
        <div className="h-1/2 w-full flex items-center justify-around sticky top-0 bg-gray-50 ">
          <img
            src={setller1}
            alt="Stellar1"
            srcset=""
            className="w-1/4 hover:animate-enlarge "
          />
          <img
            src={setller2}
            alt="Stellar1"
            srcset=""
            className="w-1/4 hover:animate-enlarge"
          />
          <img
            src={setller3}
            alt="Stellar1"
            srcset=""
            className="w-1/4 hover:animate-enlarge"
          />
        </div>
        <div className="h-1/2 w-11/12 ml-12 mr-12">
          Created a full stack web application showcasing open source projects
          from students, universities, and organizations. Developed with modern
          technologies including MongoDb, React, Express, Node.js for seamless
          user experience. Implemented features for project submission,
          browsing, and community interaction, and collaboration platforms.
        </div>
      </div>
      <div className="h-screen relative font-serif animate-slidein3">
      <div className="m-12 h-max text-2xl font-semibold">A Search Engine</div>
        <div className="h-1/2 w-full flex items-center justify-around sticky top-0 bg-gray-50">
          <img
            src={searchEngine1}
            alt="Stellar1"
            srcset=""
            className="w-1/3 hover:animate-enlarge"
          />
          <img
            src={searchEngine2}
            alt="Stellar1"
            srcset=""
            className="w-1/3 hover:animate-enlarge"
          />
        </div>
        <div className="h-1/2 w-11/12 ml-12 mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sapiente doloribus voluptatem commodi at modi perspiciatis, itaque deleniti magni sint nulla optio quo aliquam, laudantium numquam animi. Optio, unde tempora.
          Nemo beatae optio ullam dolor asperiores consequatur voluptatibus perferendis explicabo! Voluptatem pariatur quam cupiditate, aspernatur unde voluptas repudiandae fugit eveniet illum ipsum reiciendis error! Eveniet, tempore doloribus. A, quisquam? Voluptate.
          Modi, aperiam aliquid sed explicabo voluptatibus repudiandae facilis illum architecto labore similique dolore deleniti atque. Totam deserunt aut consequatur ipsam similique! At modi excepturi placeat voluptas reprehenderit dignissimos soluta odit!
          Magni ea quod corrupti ducimus, sint voluptate est sapiente voluptatem illo, dolore dolor inventore earum aperiam amet, culpa quasi temporibus soluta. Totam cum architecto labore voluptatum ratione repellendus aut. Aliquid.
          Odit odio quibusdam quasi repellat. Aliquid pariatur inventore nostrum exercitationem rerum! Ipsum, sint sit amet minima architecto deserunt! Explicabo, iste? Odit a dolorem optio corporis beatae illo quaerat iste iusto!
        </div>
      </div>
      <div className="h-screen relative font-serif animate-slidein4">
      <div className="m-12 h-max text-2xl font-semibold">Stock Trend Prediction</div>

        <div className="h-1/2 w-full flex items-center justify-around sticky top-0 bg-gray-50">
          <img
            src={stockTrend1}
            alt="Stellar1"
            srcset=""
            className="w-1/4 hover:animate-enlarge"
          />
            <img
              src={stockTrend3}
              alt="Stellar1"
              srcset=""
              className="w-1/4 hover:animate-enlarge"
            />
          <img
            src={stockTrend2}
            alt="Stellar1"
            srcset=""
            className="w-1/4 hover:animate-enlarge"
          />
        </div>
        <div className="h-1/2 w-11/12 ml-12 mr-12">
          Created a full stack web application showcasing open source projects
          from students, universities, and organizations. Developed with modern
          technologies including MongoDb, React, Express, Node.js for seamless
          user experience. Implemented features for project submission,
          browsing, and community interaction, and collaboration platforms.
        </div>
      </div>
      <Footer />
    </>
  );
}
