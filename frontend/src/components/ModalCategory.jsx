import { useState, useEffect } from "react";
import axios from "axios";

const ModalCategory = ({ category, onClose }) => {
  const [categoryQuote,setCategoryQuote]=useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/get_quote/${category}`
        );
        setCategoryQuote(response.data.quote[0]);
        // console.log(response);
        // console.log(response.data.quote[0]);
      } catch (err) {
        console.log("❌❌❌ Something Went Wrong", err);
      }
    };

    fetchData(); // Call the async function when the component mounts
  }, [category]); // Empty dependency array means this runs once when the component mounts


  return (
    <div className=''>
       <section className="rounded-3xl bg-white shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          {categoryQuote ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                You've chosen the category: {category}
              </p>
              <strong className="mt-6 text-3xl font-bold" style={{ color: '#1ba4e6' }}>{categoryQuote.author}:</strong>
              <h2 className="mt-6 text-3xl font-bold" style={{ fontFamily: 'Mooli, sans-serif' }}>
                "{categoryQuote.quote}"
              </h2>
            </>
          )  : "Loading quotes..."}

          <a
            className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl cursor-pointer"
            onClick={onClose}
          >
            CONTINUE
          </a>
        </div>
      </section>
    </div>
  );
}

export default ModalCategory;
