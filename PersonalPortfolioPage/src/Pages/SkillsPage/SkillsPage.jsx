import { useLocation } from "react-router-dom";
import angularIcon from "../../../public/angular-svgrepo-com.svg";
import cssIcon from "../../../public/css3-01-svgrepo-com.svg";
import expressIcon from "../../../public/express-svgrepo-com.svg";
import htmlIcon from "../../../public/html5-01-svgrepo-com.svg";
import jsIcon from "../../../public/javascript-logo-svgrepo-com.svg";
import nodeJsIcon from "../../../public/nodejs01-svgrepo-com.svg";
import reactIcon from "../../../public/react-svgrepo-com.svg";
import mongoDbIcon from "../../../public/mongodb-svgrepo-com.svg";
import jwtIcon from "../../../public/jsonwebtokens-svgrepo-com.svg";
import nestJSIcon from "../../../public/nestjs-svgrepo-com.svg";
import postgreIcon from "../../../public/postgresql-logo-svgrepo-com.svg";
import typeormIcon from "../../../public/typeorm-seeklogo.com.svg";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
const SkillsPage = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="about"
      className={location.pathname === "/home" ? " bg-white px-6 py-24 sm:py-15 lg:px-8" : "isolate bg-white px-6 py-24 sm:py-15 lg:px-8"}
      style={theme}
    >
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h2 className="text-2xl font-bold leadi sm:text-4xl">What can I offer to you?</h2>
        <p className="px-1 my-4 text-justify">
          Having in mind my previuous experience in managing, sales and finance, along with my formal knowledge in Business Analysis and SCRUM
          Methodology, now with added WebDevelopment knowledge, i am the perfect asset when it comes to creating and maintaing products based on
          various types of business logic.
        </p>
      </div>
      <div className="grid grid-cols-5 p-4 md:p-8">
        <div className="hidden justify-center px-4 col-span-full sm:hidden md:flex xl:flex 2xl:flex md:col-span-1 md:flex-col md:justify-start md:items-start">
          <span className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">HTML</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50">CSS</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Javascript</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">ReactJs</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">NodeJs</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Express</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">NestJs</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">MongoDb</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">PostgreSQL</span>
          <span className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">
            Angular - inProgress
          </span>
        </div>
        <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
          <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
            <div className="flex items-center justify-center space-x-3">
              <img src={htmlIcon} alt="" />
              <img src={cssIcon} alt="" />
              <img src={jsIcon} alt="" />
            </div>
            <h5 className="text-xl font-semibold">Front-end development</h5>
            <p>Using best practices while using HTML, CSS or Javascript </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
            <div className="flex items-center justify-center space-x-3">
              <img src={angularIcon} alt="" />
              <img src={reactIcon} alt="" />
            </div>
            <h5 className="text-xl font-semibold">Frameworks for front-end development</h5>
            <p>Proficient in working with ReactJs, starting learning Angular in August</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
            <div className="flex items-center justify-center space-x-3">
              <img src={nodeJsIcon} alt="" />
              <img src={expressIcon} alt="" />
              <img src={mongoDbIcon} alt="" />
              <img src={jwtIcon} alt="" />
            </div>
            <h5 className="text-xl font-semibold">Back-end Development and NoSQL Databases</h5>
            <p>Ready to create and maintain products in NodeJs, using Express, JWT Tokens and MongoDb with Mongoose ODM</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
            <div className="flex items-center justify-center space-x-3">
              <img src={nestJSIcon} alt="" />
              <img src={postgreIcon} alt="" />
              <img src={typeormIcon} alt="" />
            </div>
            <h5 className="text-xl font-semibold">Frameworks for Back-end Development and SQL Databases</h5>
            <p>Proficient in working with NestJs and PostgreSQL with Typeorm </p>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};
export default SkillsPage;
