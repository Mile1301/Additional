import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const form = useRef();

  const initialFormData = {
    user_name: "",
    last_name: "",
    company: "",
    user_email: "",
    phone_number: "",
    message: "",
    agreed: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [spinner, SetSpinner] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    SetSpinner(true);
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_CONTACT_FORM, form.current, import.meta.env.VITE_PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setConfirmationModal(true);
        setFormData(initialFormData);
        SetSpinner(false);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="about"
      className={
        location.pathname === "/home"
          ? "bg-white px-6 py-24 sm:py-15 lg:px-8 text-gray-900"
          : "isolate bg-white px-6 py-24 sm:py-15 lg:px-8 text-gray-900"
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
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact me</h2>
        <p className="mt-2 text-lg leading-8">You will get confirmation mail</p>
      </div>
      <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
              First name
              <div className="relative inline-block">
                <span
                  onMouseEnter={() => setShowPopover(true)}
                  onMouseLeave={() => setShowPopover(false)}
                  className="text-blue-500 hover:text-red-500 font-bold py-2 px-4 rounded"
                >
                  *
                </span>
                {showPopover && (
                  <div
                    className="absolute top-1 bg-white text-gray-400 border border-gray-300 shadow-lg rounded p-2 -mt-3 left-full ml-2"
                    role="tooltip"
                  >
                    Required
                  </div>
                )}
              </div>
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="user_name"
                id="first-name"
                value={formData.user_name}
                onChange={handleChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-semibold leading-6">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6">
              Email
              <div className="relative inline-block">
                <span
                  onMouseEnter={() => setShowPopover(true)}
                  onMouseLeave={() => setShowPopover(false)}
                  className="text-blue-500 hover:text-red-500 font-bold py-2 px-4 rounded"
                >
                  *
                </span>
                {showPopover && (
                  <div
                    className="absolute top-1 bg-white text-gray-400 border border-gray-300 shadow-lg rounded p-2 -mt-3 left-full ml-2"
                    role="tooltip"
                  >
                    Required
                  </div>
                )}
              </div>
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="user_email"
                id="email"
                value={formData.user_email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone_number" className="block text-sm font-semibold leading-6">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>MK</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex gap-x-1 sm:col-span-2">
            <div className="flex h-6 items-center">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  required
                  checked={formData.agreed}
                  name="agreed"
                  id="agreed"
                  onChange={handleChange}
                  type="checkbox"
                  className="peer sr-only"
                />
                <label htmlFor="switch" className="hidden"></label>
                <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
            </div>
            <label htmlFor="agreed" className="text-sm leading-6">
              By selecting this, you agree to my
              <NavLink to="/privacy" className="font-semibold text-indigo-600">
                &nbsp; privacy policy
              </NavLink>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            value="Send"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
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
      {spinner && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div style={{ borderTopColor: "transparent" }} className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin"></div>
        </div>
      )}

      {confirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-900 text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 fill-current shrink-0 text-violet-400">
              <path d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z"></path>
              <path d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z"></path>
              <path d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z"></path>
            </svg>
            <h2 className="text-2xl font-semibold leadi tracki">Thank you for contacting me</h2>
            <p className="flex-1 text-center text-gray-400">I will contact you as soon as possible or as stated in this message.</p>
            <button
              type="button"
              onClick={() => setConfirmationModal(false)}
              className="px-8 py-3 font-semibold rounded-full bg-violet-400 text-gray-900"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
