import React from 'react'
import SliderComponent from '../../Components/SliderComponent/SliderComponent'
import Features from '../../Components/Features/Features'
import BookingForm from '../../Components/BookingForm/BookingForm'
import AboutBassTravels from '../../Components/AboutBassTravels/AboutBassTravels'
import CallToActionSection from '../../Components/CallToAction/CallToAction'
import FleetGalleryAndOpinions from '../../Components/FleetGalleryAndOpinions/FleetGalleryAndOpinions'
import FleetComponent from '../../Components/Fleet/Fleet'

const Home = () => {
  return (
    <div className='Home_page'> 
    <SliderComponent/>
    <Features/>
    <BookingForm/>
    <FleetComponent/>
    <AboutBassTravels/>
    <CallToActionSection/>
    <FleetGalleryAndOpinions/>
    </div>
  )
}

export default Home