import React from 'react'

const page = () => {
  return (
    <>
        <div className='p-11'>
            <div className='grid grid-cols-2 md:grid-cols-6  gap-5'>
            <div className='bg-primary-div rounded-xl p-3 cursor-pointer select-none active:shadow-xl active:bg-orange-100'>
                <h3 className='text-lg font-semibold text-primary-orange'>Service 1</h3>
            </div>
            </div>
        </div>
    </>
  )
}

export default page