import React, { useState } from 'react';
import ModalMood from './ModalMood';
import {LiaAngleDoubleRightSolid} from 'react-icons/lia'

const MoodCategory = ({ emoji, category }) => (
  <div className="p-24 font-bold text-5xl h-64 flex items-center bg-teal-500 text-white rounded-lg">
    <span className="w-20 text-center">{emoji}</span>
    <span className="w-34 text-center">{category}</span>
  </div>
);

const Mood = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Initialize to 0
  const moodCategories = [
    { category: 'alone', emoji: '😔' },
    { category: 'anger', emoji: '😡' },
    { category: 'birthday', emoji: '🎂' },
    { category: 'change', emoji: '🔄' },
    { category: 'cool', emoji: '😎' },
    { category: 'courage', emoji: '💪' },
    { category: 'dating', emoji: '💑' },
    { category: 'death', emoji: '💀' },
    { category: 'dreams', emoji: '💭' },
    { category: 'failure', emoji: '😞' },
    { category: 'fear', emoji: '😨' },
    { category: 'forgiveness', emoji: '🙏' },
    { category: 'freedom', emoji: '🗽' },
    { category: 'funny', emoji: '😂' },
    { category: 'graduation', emoji: '🎓' },
    { category: 'great', emoji: '👍' },
    { category: 'happiness', emoji: '😊' },
    { category: 'humor', emoji: '😄' },
    { category: 'imagination', emoji: '🌌' },
    { category: 'inspirational', emoji: '🌟' },
    { category: 'hope', emoji: '🌼' },
    { category: 'love', emoji: '❤️' },
    { category: 'life', emoji: '🌱' },
    { category: 'marriage', emoji: '💍' },
    { category: 'men', emoji: '👨' },
    { category: 'money', emoji: '💰' },
    { category: 'mom', emoji: '👩' },
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? moodCategories.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === moodCategories.length - 1 ? 0 : prevSlide + 1));
  };

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    console.log(mood)
  };

  const closeMoodModal = () => {
    setSelectedMood(null);
  };

  const currentMood = moodCategories[activeSlide];

  return (
    <div className="bg-emerald-200 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-center py-5 italic">
        Select a mood from the slider below to discover an inspiring quote.
      </h1>
      <div className="max-w-4xl mx-auto relative">
        {/* Slider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-start w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              onClick={handlePrevSlide}
            >
              &#8592;
            </button>
          </div>
     
          <div
            key={currentMood.category}
            className="p-24 font-bold text-5xl h-64  items-center bg-teal-500 text-white rounded-lg"
          >
            <div>
            <span style={{fontFamily: 'Montserrat'}} className="w-20 text-center">{currentMood.emoji}</span>
            <span style={{ fontFamily: 'Montserrat, sans-serif' }} className="w-34 text-center">{currentMood.category}</span>
            </div>
           
            <button
              className="relative flex items-center ml-28 justify-between bg-red-300  hover:bg-red-500 text-xl h-12 text-white font-bold py-1 px-2 rounded-full top-12 cursor-pointer  transform hover:translate-x-1 transition-transform"
              style={{ fontFamily: 'Montserrat, sans-serif' }} onClick={() => handleMoodClick(currentMood)}
            >
              <LiaAngleDoubleRightSolid className='ml-2 cursor-pointer text-3xl iconnn'/><LiaAngleDoubleRightSolid className='ml-2 cursor-pointer text-2xl iconnn'/><LiaAngleDoubleRightSolid 
              className='ml-2 cursor-pointer ' />ggggggggggggggg
            </button>
            
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-end w-1/2 left-56  ">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12  "
              onClick={handleNextSlide}
            >
              &#8594;
            </button>
          </div>
        {/* Conditionally render the modal based on selectedCategory */}
        {selectedMood && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <ModalMood mood={selectedMood} onClose={closeMoodModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mood;
