import React, { useState } from 'react';
import ModalCategory from './ModalCategory';
const Category = () => {
  // # List of categories
  const initialCategories = [
    'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best',
    'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage',
    'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental', 'equality',
    'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness',
    'freedom', 'friendship', 'funny', 'future', 'god', 'good', 'government', 'graduation', 'great',
    'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination', 'inspirational',
    'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'love',
    'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
  ];
  const [categories, setCategories] = useState(initialCategories.slice(0, 30));
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // alert(category);
  };
  const closeCategoryModal = () => {
    setSelectedCategory(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setCategories(initialCategories);
    } else {
      setCategories(initialCategories.slice(0, 30));
    }
  };

  return (
    <div className='bg-emerald-200'> 
    <h1 className="text-2xl font-bold text-center py-5 italic ">
        Explore our wide range of categories and choose one to discover a random quote.
    </h1>
      <div className='md:container md:mx-auto flex flex-wrap justify-center items-center'>
       
        <>
        {categories.map((one, index) => (
          <span
            key={index}
            className="justify-center items-center py-1 px-3 border-none rounded-full bg-blue-100 text-sm text-sky-500 font-medium mx-1 my-1 cursor-pointer"
            onClick={() => handleCategoryClick(one)}
          >
            {one}
          </span>
        ))}
        <button
          className="mt-2 py-1 px-2 rounded-full bg-red-200 text-md text-sky-500 font-medium "
          onClick={toggleShowMore}
        >
          {showMore ? '-' : '+'}
        </button>
        </>
      </div>
           {/* Conditionally render the modal based on selectedCategory */}
           {selectedCategory && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <ModalCategory
            category={selectedCategory}
            onClose={closeCategoryModal}
          />
        </div>
      )}
    </div>
  );
};

export default Category;
