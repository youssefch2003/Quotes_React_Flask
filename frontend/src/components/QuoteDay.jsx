import { useState, useEffect } from "react";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import { LiaQuoteRightSolid } from "react-icons/lia";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function QuoteDay() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quotes, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/get_quote_of_theday"
        );
        setQuote(response.data.quote);
        console.log(quotes);
      } catch (err) {
        console.log("❌❌❌ Something Went Wrong", err);
      }
    };

    fetchData(); // Call the async function when the component mounts
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="bg-emerald-200">
      <Navbar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-y-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative w-[36.125rem] h-[100%] rotate-[30deg] bg-gradient-to-tr from-[#18459f] to-[#ffffff] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-35">
          <div className="text-center ">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl flex text-sky-500">
              <span className="font-outline-2">Quote of The Day</span>
              <LiaQuoteRightSolid className="text-white  text-5xl  " />
            </h1>
          </div>
          {/* <div className="bg-gradient-to-br from-transparent-500 to-indigo-500 p-4 rounded-lg shadow-lg text-black">
              hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </div> */}
          <div className="bg-white border-solid border-2 border-pink-300 text-black py-2 px-6 rounded-lg shadow-lg  ">
            <p className="text-lg font-bold ">
              {Array.isArray(quotes)
                ? quotes.map((one, index) => (
                    <span key={index}>"{one.quote}"</span>
                  ))
                : "Loading quotes..." // Or handle the case when quotes is not an array
              }
            </p>
          </div>

          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="absolute inset-y-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="relative w-[36.125rem] h-[100%] rotate-[30deg] bg-gradient-to-tr from-[#18459f] to-[#adc1eb] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>

            <div
              className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#18459f] to-[#adc1eb] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
