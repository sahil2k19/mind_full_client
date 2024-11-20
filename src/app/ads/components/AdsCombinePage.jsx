"use client"
import React, { useState } from 'react'
import AdsExperts from '../../component/AdsExperts'
import TestimonialComponent from '../../component/TestimonialComponent'
const AdsCombinePage = ({condition, expertText, location}) => {
    const [disableSlide, setDisableSlide] = useState(false)

    

    return (
    <>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4 mx-10'>
                        {/* Expert Team */}
                        <section>
                            <AdsExperts condition={condition} disableSlide={disableSlide} setDisableSlide={setDisableSlide}  expertText={expertText} location={location}/>
                        </section>
                        {/* client speaks */}
                        <section className='py-8 '>
                            <TestimonialComponent condition={condition} location={location} disableSlide={disableSlide} setDisableSlide={setDisableSlide} />
                        </section>


                    </div>
    </>
  )
}

export default AdsCombinePage