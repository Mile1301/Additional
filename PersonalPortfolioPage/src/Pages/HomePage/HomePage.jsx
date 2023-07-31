import "./HomePage.css";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import cvMile from "../../../public/CV_Mile_Todorovski.pdf";
const HomePage = () => {
  // }, []);
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5, // Adjust this threshold as needed (0.5 means 50% of the element is visible)
  //   };

  //   const handleIntersect = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setShowContactPage(true);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersect, options);
  //   if (contactRef.current) {
  //     observer.observe(contactRef.current);
  //   }

  //   return () => {
  //     if (contactRef.current) {
  //       observer.unobserve(contactRef.current);
  //     }
  //   };
  // }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div id="home" className="relative isolate py-24 px-6 pt-14 lg:px-8 text-gray-600" style={theme}>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 " aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-8 lg:py-6">
        <div className=" mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <strong>Download my CV 📥 &nbsp;</strong>
            <a href={cvMile} download={cvMile} className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <div className="flex min-h-[20rem] items-center justify-center bg-yellow-300 font-bold text-white rounded-xl">
            <div className=" text-center space-y-12">
              <div className="text-center text-5xl leading-normal font-bold">
                Services offered &nbsp;
                <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                  <span className="animate-word col-span-full row-span-full">HTML</span>
                  <span className="animate-word-delay-1 col-span-full row-span-full">CSS</span>
                  <span className="animate-word-delay-2 col-span-full row-span-full">Javascript</span>
                  <span className="animate-word-delay-3 col-span-full row-span-full">ReactJS</span>
                  <span className="animate-word-delay-4 col-span-full row-span-full">NodeJS</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg leading-8">Lets`s make the perfect match</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => window.scrollTo(0, 750)}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </button>
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
export default HomePage;
