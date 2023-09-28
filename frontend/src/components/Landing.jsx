import React from 'react'
import QuoteDay from './QuoteDay'
import Navbar from './Navbar'
import Category from './Category'
import ModalCategory from './ModalCategory'
import Mood from './Mood'
import ModalMood from './ModalMood'

const Landing = () => {
  return (
    <div className= 'bg-emerald-200 ' >
      <Navbar />
      <QuoteDay/>
      <Category/>
      <Mood/>
    </div>
  )
}

export default Landing