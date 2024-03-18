import Header from "./Header";
import Footer from "./footer"
export default function AboutMe() {
  return (
    <>
      <Header />
      <div className="h-1/4  w-max font-black text-6xl ml-8 my-16 animate-slidein3">
        About Me<span className="text-6xl text-highlight ml-2">.</span>
      </div>
      <div className="animate-slidein3">
        <div className="h-max w-full flex items-center my-4">
          <span className="inline-block h-20 w-2 ml-12 rounded-lg bg-purple-700 "></span>
          <span className="inline-block h-20 ml-4 text-center text-xl w-11/12">
            <div className="text-left">
              Hello !! 👋🏼 <span className=" text-highlight">,</span>I am{" "}
              <span className="text-highlight font-bold">
                Sandeep Mohapatra{" "}
              </span>
              an aspiring Full Stack Developer with a passion for building
              robust and innovative web applications. While I may be new to the
              world of professional development, I am eager to dive head first
              into the exciting realm of Full Stack Development
              <span className=" text-highlight">...</span>
              <div></div>
            </div>
          </span>
        </div>
        <div className="h-max w-full flex items-center my-4">
          <span className="inline-block h-8 w-2 ml-12 rounded-lg bg-purple-700 "></span>
          <span className="inline-block h-8 ml-4 text-center text-xl w-11/12">
            <div className="text-left">
              I am a B.tech graduate in stream of{" "}
              <span className=" text-highlight font-semibold">CSE</span> fom
              GIET University, Gunupur.
              <span className=" text-highlight">.</span>
            </div>
            <div></div>
          </span>
        </div>
        <div className="h-max w-full flex items-center my-4">
          <span className="inline-block h-24 w-2 ml-12 rounded-lg bg-purple-700 "></span>
          <span className="inline-block h-24 ml-4 text-center text-xl w-11/12">
            <div className="text-left">
              My journey into the world of coding began with a curiosity for
              technology and a desire to create impactful solutions. Over time,
              I have taught myself various programming languages , frameworks,
              and tools, honing my skills in both front-end and back-end
              development.
              <span className=" text-highlight">.</span>
            </div>
            <div></div>
          </span>
        </div>
        <div className="h-max w-full flex items-center my-4">
          <span className="inline-block h-16 w-2 ml-12 rounded-lg bg-purple-700 "></span>
          <span className="inline-block h-16 ml-4 text-center text-xl w-11/12">
            <div className="text-left">
              Although my experience may be limited, I am dedicated to
              continuous learning and improvement. I am currently exploring
              React.js,Next.js, TailWind and App devlopment using Kotlin. I am excited about the
              possibilities they offer for building dynamic and responsive web
              applications.
              <span className=" text-highlight">.</span>
            </div>
            <div></div>
          </span>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-evenly animate-slidein4">
        <div className=" text-left w-11/12 font-black text-6xl animate-slidein3">
          Technical Skills
          <span className="text-6xl text-highlight ml-2">.</span>
        </div>
        <div className="w-11/12 h-1/2 flex justify-around items-center bg-gray-200 rounded-xl">
          <div className="w-1/5 h-4/5 text-center  flex items-center justify-evenly flex-col">
            <div className="text-xl font-bold">Language Known</div>
            <div className="font-medium h-max">
              <div>c</div>
              <div>c++</div>
              <div>SQL</div>
              <div>java</div>
              <div>Kotlin</div>
              <div>Python</div>
              <div>javascript</div>
            </div>
          </div>
          <div className="text-center w-1/5 h-1/2 flex items-start justify-evenly flex-col">
            <div className="h-full w-full flex items-center flex-col justify-around">
              <div className="h-max text-xl font-bold">Data Base</div>
              <div className="h-max font-medium">
                <div>MySql</div>
                <div>No-sql</div>
                <div>Mongodb</div>
              </div>
            </div>
          </div>
          <div className="h-full w-1/5 text-center flex items-center justify-evenly flex-col">
            <div className="h-max text-xl font-bold">Web Devlopment</div>
            <div className="h-max font-medium">
              <div>HTML5</div>
              <div>CSS3</div>
              <div>Flask</div>
              <div>Django</div>
              <div>Node.js</div>
              <div>Express.js</div>
              <div>React.js</div>
              <div>Next.js</div>
              <div>tailwind css</div>
            </div>
          </div>
          <div className="h-1/2 w-1/5 text-center flex items-center justify-evenly flex-col">
            <div className="h-max text-xl font-bold">Others</div>
            <div className="h-max font-medium">
              <div>Team player</div>
              <div>collaboration</div>
              <div>Problem Solving</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/4  w-max font-black text-6xl ml-8 my-16 animate-slidein3">
        Certificates<span className="text-6xl text-highlight ml-2">.</span>
      </div>
      
      <Footer/>
    </>
  );
}
