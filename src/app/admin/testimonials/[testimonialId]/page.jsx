"use client"
import React from 'react'
import EditTestimonial from '../../components/EditTestimonial'
import { useParams } from 'next/navigation'
const page = () => {
  const {testimonialId} = useParams()
  return (
    <>
        <EditTestimonial testimonialId ={testimonialId }/>
    </>
  )
}

export default page