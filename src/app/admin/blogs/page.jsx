"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
const AdminBlogs = () => {
  const router = useRouter()
  return (
   <>
    <div className='px-11 mx-11'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          <div onClick={()=>router.push('/admin/blogs/blog1')} className='bg-primary-div rounded-xl p-3 cursor-pointer select-none  text-primary-orange font-semibold active:shadow-xl active:bg-orange-100 text-center '>
            <h2 className=''>Blog 1</h2>
          </div>
          <div className='bg-primary-div rounded-xl p-3 cursor-pointer select-none  text-primary-orange font-semibold active:shadow-xl active:bg-orange-100 text-center '>
            <h2 className=''>Blog 1</h2>
          </div>
          <div className='bg-primary-div rounded-xl p-3 cursor-pointer select-none  text-primary-orange font-semibold active:shadow-xl active:bg-orange-100 text-center '>
            <h2 className=''>Blog 1</h2>
          </div>
          <div className='bg-primary-div rounded-xl p-3 cursor-pointer select-none  text-primary-orange font-semibold active:shadow-xl active:bg-orange-100 text-center '>
            <h2 className=''>Blog 1</h2>
          </div>
          <div className='bg-primary-div rounded-xl p-3 cursor-pointer select-none  text-primary-orange font-semibold active:shadow-xl active:bg-orange-100 text-center '>
            <h2 className=''>Blog 1</h2>
          </div>
        </div>
    </div>
   </>
  )
}

export default AdminBlogs