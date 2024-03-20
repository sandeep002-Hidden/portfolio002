import Header from "./Header";
import setller1 from "../images/steller1.png";
import setller2 from "../images/steller2.png";
import setller3 from "../images/steller3.png";
import searchEngine1 from "../images/searchEngine1.png";
import searchEngine2 from "../images/searchEngine2.png";
import stockTrend1 from "../images/stockTrend1.png";
import stockTrend2 from "../images/stockTrend2.png";
import Footer from "./footer";
export default function Projects() {
  return (
    <>
      <Header />
      <div className="h-screen mx-12 relative font-serif animate-slidein2">
        <div className="m-12 h-max text-2xl font-semibold">
          St<span className="text-2xl text-purple-600">e</span>llar Forg
          <span className="text-2xl text-purple-600">e</span>
        </div>
        <div className="h-1/2  w-fit flex items-center justify-around sticky top-0 bg-gray-50 flex-col md:flex-row">
          <img
            src={setller1}
            alt="Stellar1"
            srcset=""
            className="w-fit md:w-1/4 hover:animate-enlarge "
          />
          <img
            src={setller2}
            alt="Stellar1"
            srcset=""
            className="w-fit md:w-1/4 hover:animate-enlarge"
          />
          <img
            src={setller3}
            alt="Stellar1"
            srcset=""
            className="w-fit md:w-1/4 hover:animate-enlarge"
          />
        </div>
        <div className="h-1/2 w-11/12 text-justify">
          Created a full stack web application showcasing open source projects
          from students, universities, and organizations. Developed with modern
          technologies including MongoDb, React, Express, Node.js for seamless
          user experience. Implemented features for project submission,
          browsing, and community interaction, and collaboration platforms.
        </div>
      </div>
      <div className="h-screen mx-12 relative font-serif animate-slidein3">
        <div className="m-12 h-max text-2xl font-semibold">
          S<span className="text-2xl text-purple-600">e</span>arch Engin
          <span className="text-2xl text-purple-600">e</span>
        </div>
        <div className="h-1/2 w-full flex items-center justify-around sticky top-0 bg-gray-50 flex-col md:flex-row">
          <img
            src={searchEngine1}
            alt="Stellar1"
            srcset=""
            className="m-fit md:w-1/3 hover:animate-enlarge"
          />
          <img
            src={searchEngine2}
            alt="Stellar1"
            srcset=""
            className="m-fit md:w-1/3 hover:animate-enlarge"
          />
        </div>
        <div className="h-1/2 w-11/12 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          sapiente doloribus voluptatem commodi at modi perspiciatis, itaque
          deleniti magni sint nulla optio quo aliquam, laudantium numquam animi.
          Optio, unde tempora. Nemo beatae optio ullam dolor asperiores
          consequatur voluptatibus perferendis explicabo! Voluptatem pariatur
          quam cupiditate, aspernatur unde voluptas repudiandae fugit eveniet
          illum ipsum reiciendis error! Eveniet, tempore doloribus. A, quisquam?
          Voluptate. Modi, aperiam aliquid sed explicabo voluptatibus
          repudiandae facilis illum architecto labore similique dolore deleniti
          atque. Totam deserunt aut consequatur ipsam similique! At modi
          excepturi placeat voluptas reprehenderit dignissimos soluta odit!
          Magni ea quod corrupti ducimus, 
        </div>
      </div>
      <div className="mt-72 mx-12 relative font-serif animate-slidein4">
        <div className="m-12 h-max text-2xl font-semibold">
          Stock Tr<span className="text-2xl text-purple-600">e</span>nd Pr<span className="text-2xl text-purple-600">e</span>diction
        </div>
        <div className="h-1/2 mt-12 w-full flex items-center justify-around sticky top-0 bg-gray-50 flex-col md:flex-row">
        <img
            src={stockTrend1}
            alt="Stellar1"
            srcset=""
            className="w-fit  md:w-1/3 hover:animate-enlarge"
          />
          <img
            src={stockTrend2}
            alt="Stellar1"
            srcset=""
            className="w-fit md:w-1/3 hover:animate-enlarge"
          />
        </div>
        <div className="h-1/2  text-justify  my-20">
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
