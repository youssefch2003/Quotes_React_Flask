import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ModalMood from './ModalMood';
import {PiArrowFatLineRight} from 'react-icons/pi'
import {PiArrowFatLineLeft} from 'react-icons/pi'

const Mood = () => {
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

  const itemsPerGroup = 3; // Number of mood categories per group
  const [activeGroup, setActiveGroup] = useState(0); // Initialize to the first group

  const [selectedMood, setSelectedMood] = useState(null);

  const handlePrevGroup = () => {
    setActiveGroup((prevGroup) => (prevGroup === 0 ? 0 : prevGroup - 1));
  };

  const handleNextGroup = () => {
    setActiveGroup((prevGroup) =>
      prevGroup === Math.ceil(moodCategories.length / itemsPerGroup) - 1 ? prevGroup : prevGroup + 1
    );
  };

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  const closeMoodModal = () => {
    setSelectedMood(null);
  };

  const startIndex = activeGroup * itemsPerGroup;
  const endIndex = startIndex + itemsPerGroup;
  const displayedMoodCategories = moodCategories.slice(startIndex, endIndex);

  return (
    <div className="  bg-emerald-200 text-center">
      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Choose Your Mood</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {displayedMoodCategories.map((mood, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => handleMoodClick(mood)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-red-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <div className="text-center  ">
                    <h3 className="text-sm font-medium text-gray-900">{mood.category}</h3>
                  </div>
                <div className="flex items-center justify-center h-full">
                  <span className="text-4xl transform  hover:scale-150">{mood.emoji}</span> 
                </div>

                 
              </div>
              
            </div>
          ))}
        </div>

       {/* Slide buttons */}
        <div className=" flex justify-between ">
                  <button
                    onClick={handlePrevGroup}
                    className={`${
                      activeGroup === 0 ? 'text-emerald-200 cursor-not-allowed' : 'text-red-300 hover:underline'
                    }`}
                    disabled={activeGroup === 0}
                  >
                    <PiArrowFatLineLeft icon={faArrowLeft} className='relative text-7xl  bold ' />
                  </button>
                  <button
                    onClick={handleNextGroup}
                    className={`${
                      activeGroup === Math.ceil(moodCategories.length / itemsPerGroup) - 1
                        ? 'text-emerald-200 cursor-not-allowed' : 'text-red-200 hover:underline'
                    }`}
                    disabled={activeGroup === Math.ceil(moodCategories.length / itemsPerGroup) - 1}
                  >
                    {/* className='relative -top-48  left-12' */}
                    <PiArrowFatLineRight icon={faArrowRight} className='relative text-7xl'/>
                  </button>
        </div>

      </div>

      {/* Conditionally render the modal based on selectedCategory */}
      {selectedMood && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <ModalMood mood={selectedMood} onClose={closeMoodModal} />
        </div>
      )}
    </div>
  );
};

export default Mood;
