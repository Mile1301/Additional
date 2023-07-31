import { Cog6ToothIcon, MagnifyingGlassCircleIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";

const features = [
  {
    name: "Front-end and Back-end Development",
    description:
      " With a commitment to best practices, I aim to make a positive impact on the development process and foster a collaborative work environment.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Experienced Problem solver",
    description: " A proactive and adaptable problem solver with a talent for turning setbacks into opportunities for growth.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Attention to detail",
    description: " With an exceptional eye for detail, I leave no stone unturned in my pursuit of delivering impeccable results.",
    icon: MagnifyingGlassCircleIcon,
  },
];

const AboutPage = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="about"
      className={
        location.pathname === "/home"
          ? " bg-white px-6 py-24 sm:py-15 lg:px-8 text-gray-600"
          : "isolate bg-white px-6 py-24 sm:py-15 lg:px-8 text-gray-600"
      }
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Welcome</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About me</p>
              <p className="mt-6 text-lg leading-8 text-justify">
                As an aspiring full-stack web developer, I bring a passion for coding and a strong desire to create engaging and user-friendly web
                applications. With a solid foundation in HTML, CSS and JavaScript as well as ongoing learning in Node.js, MongoDB, SQL, React and
                Angular, I am eager to apply my skills and grow my knowledge in a challenging role. I am committed to producing high-quality work and
                adding value to any team I join, whether through innovative problem-solving, effective collaboration, or a keen attention to detail.
                My goal is to become a valuable asset to a forward-thinking organization that shares my dedication to delivering exceptional digital
                experiences.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/public/presonalPhoto.jpg"
            alt="personal photo"
            className=" w-[18rem] ml-[0.25rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[25rem] md:w-[30rem] xl:w-[35rem] sm:ml-[5rem] md:ml-[5rem] lg:-ml-0"
            width={2432}
            height={1442}
            style={{ zIndex: 1 }}
          />
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
export default AboutPage;
