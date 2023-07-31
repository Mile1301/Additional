import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";

const PrivacyPolicyPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="bg-gradient-to-b from-pink-100 to-purple-200">
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-2xl text-pink-900 font-bold md:text-4xl">Privacy Policy</h2>
        </div>
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative group md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
            ></div>
            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16" style={theme}>
              <ul role="list" className="space-y-4 py-6 text-gray-600" style={theme}>
                <li className="space-x-2">
                  <span className="text-purple-500 font-semibold">&#10003;</span>
                  <span>I don`t collect any data</span>
                </li>
                <li className="space-x-2">
                  <span className="text-purple-500 font-semibold">&#10003;</span>
                  <span>You just get confirmation mail from me</span>
                </li>
                <li className="space-x-2">
                  <span className="text-purple-500 font-semibold">&#10003;</span>
                  <span>That`s it</span>
                </li>
                <li className="space-x-2">
                  <span className="text-purple-500 font-semibold">&#10003;</span>
                  <span>Have a nice day 😉</span>
                </li>
              </ul>
              <div className="mt-6 flex justify-between gap-6">
                <NavLink
                  to="/home"
                  className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/contact"
                  className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md"
                >
                  Contact Me
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
