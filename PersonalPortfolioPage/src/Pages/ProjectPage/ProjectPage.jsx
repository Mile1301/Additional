import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ThemeContext from "../../Contexts/ThemeContext";
import todoPitch from "../../../public/ToDoPitch.pdf";
import focusHubBg from "../../../public/focusHubBg.png";
import todoPitchBg from "../../../public/todoPitchBg.png";
const ProjectPage = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      id="projects"
      className={
        location.pathname === "/home"
          ? " bg-white px-6 py-24 sm:py-15 lg:px-8 text-gray-900"
          : "isolate bg-white px-6 py-24 sm:py-15 lg:px-8 text-gray-900"
      }
      style={theme}
    >
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 " aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">My Projects</h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center"></p>
      </div>
      <div className="mt-10 grid lg:gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">FocusHub</h3>
          <p className="mt-3 text-lg">
            Application for the service industry - <strong>MVP ready</strong>
          </p>
          <div className="mt-12 space-y-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6">It's a productivity App in its core</h4>
                <p className="mt-2">
                  The name is Focushub because the purpose of the application is to focus on the sources of the problems, on the details, on the
                  causes of their occurrence, FOCUS on the core of the problem"
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6">
                  The goal is to detect the problem before it becomes a problem, not just its observation.
                </h4>
                <p className="mt-2">
                  The application offers familiarity with the factual performance of the company through real-time monitoring and analytics designed
                  for different levels of hierarchy.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6">No hiding behind tables and solid numbers - always we can achieve more.</h4>
                <p className="mt-2">
                  This means complete transparency and visibility across all sectors, and thus the possibility for an individual view and access to
                  every part of the company and each employee, enabling accurate evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="mt-10 lg:mt-0">
          <a id="focusHubLink" href="https://additional-focushub.vercel.app/" target="_blank">
            <img src={focusHubBg} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            <label htmlFor="focusHubLink" className="text-justify">
              Click to open App
            </label>
          </a>
        </div>
      </div>
      <div className="mt-10"></div>
      <div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">To-Do Platform</h3>
            <p className="mt-3 text-lg">
              An online App which facilitates clients finding craftsmen and vice versa - <strong>Development Not Started Yet</strong>
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6">Problem</h4>
                  <p className="mt-2">
                    Finding a trustworthy craftsman with a transparent portfolio and clear terms and conditions is a significant concern for clients.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6">Solution</h4>
                  <p className="mt-2">Know the price, get discount, arrange time, find reliable craftsmen based on real ratings and comments</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6">Changing the mindset</h4>
                  <p className="mt-2">
                    Merging the offline and the online world, changing the whole business environment in the sector of services. We are changing the
                    way of thinking, planning and working the Balkan style and promote European values of conducting the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
            <a id="todoPitch" href={todoPitch} download={todoPitch}>
              <img src={todoPitchBg} width={560} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
              <label htmlFor="todoPitch" className="text-center">
                Click for Todo Pitch Download
              </label>
            </a>
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
export default ProjectPage;
