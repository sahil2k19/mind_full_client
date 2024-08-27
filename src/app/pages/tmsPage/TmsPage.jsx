import React from 'react';
import Link from 'next/link';
import { Container } from '@mui/material';

const TmsPage = () => {
  return (
    <>
     

      <section className="select-none">
        <div className="bg-primary-div md:px-[150px]">
          <Container maxWidth="lg">
            <div className="py-11">
              <h1 className="text-start text-3xl md:text-4xl font-bold text-primary-orange whitespace-nowrap">
                TMS Treatment
              </h1>
            </div>

            <Link href="/consultation/location" className="flex py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi text-primary-orange font-bold bi-calendar2-week"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
              </svg>
              <p className="text-primary-orange font-bold active:underline hover:underline text-sm ml-2">
                Request an Appointment
              </p>
            </Link>

            <div className="py-6">
              {/* Navigation Buttons */}
              <div className="flex gap-4 overflow-x-scroll ">
                <a href="#section1" className="p-2 hover:bg-orange-400 bg-primary-orange whitespace-nowrap font-semibold  text-white rounded-lg">
                  What is TMS?
                </a>
                <a href="#section2" className="p-2 hover:bg-orange-400 bg-primary-orange whitespace-nowrap font-semibold text-white rounded-lg">
                  How TMS Works
                </a>
                <a href="#section3" className="p-2 hover:bg-orange-400 bg-primary-orange whitespace-nowrap font-semibold text-white rounded-lg">
                  What to Expect
                </a>
              </div>
            </div>
          </Container>
        </div>

        <Container maxWidth="lg">
          <div className="p-6">
            {/* Section 1 */}
            <div id="section1" className="mb-10">
              <h1 className="text-xl text-primary-orange mb-2 font-semibold">What is TMS?</h1>
              <p className="mb-2 text-sm text-gray-700">
                Many mental health conditions like depression, anxiety, PTSD, and OCD are linked to specific parts of the brain not working as they should. When these areas of the brain are underactive, it can lead to constant and challenging symptoms that affect daily life.
              </p>
              <p className="mb-5 text-sm text-gray-700">
                Transcranial Magnetic Stimulation (TMS) offers a non-invasive way to address this issue. By using magnetic fields, TMS stimulates nerve cells in the brain areas responsible for mood regulation and mental health. Think of TMS as a method to these underactive parts of the brain, helping them to function normally again and improving overall mental health.
              </p>
              <div className="mb-10">
                <img src="/home/clinicImg.svg" alt="Clinic" />
              </div>
              <div className="flex justify-center mb-10">
                <Link href="/consultation/location" className="bg-primary-orange text-white font-semibold p-3 rounded-lg">
                  BOOK A CONSULTATION
                </Link>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section2" className="mb-10">
              <h1 className="text-xl text-primary-orange mb-4 font-semibold">How TMS Works:</h1>
              <div className="mb-6">
                {works.map((i, index) => (
                  <div key={index} className="flex justify-between p-5 mb-3 bg-primary-div rounded-lg md:w-[50%]">
                    <h1 className="text-primary-orange text-sm font-semibold">
                      {index + 1}. {i.title}
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#EF6623"
                      stroke="#EF6623"
                      strokeWidth="1"
                      className="bi bi-chevron-right ml-auto"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Link href="/consultation/location" className="bg-primary-orange text-white font-semibold rounded-lg p-3">
                  BOOK A CONSULTATION
                </Link>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section3" className="mb-10">
              <h1 className="text-center text-2xl font-semibold mb-3">Stages in TMS Therapy</h1>
              <p className="text-gray-700 text-center text-[13px] mb-6">
                What can I expect when receiving TMS therapy?
              </p>
              {stages.map((i, index) => (
                <div key={index} className="mb-6">
                  <h1 className="text-xl text-primary-orange mb-4 font-semibold">
                    {index + 1}. {i.title}
                  </h1>
                  <div className="md:flex flex-col justify-center items-center">
                    <div className="h-[201px] w-full md:w-[50%] rounded-lg mb-6 bg-primary-div border-orange-500 border-2"></div>
                    {i.subPoints.map((sp, subIndex) => (
                      <div key={subIndex} className="d-flex mb-3">
                        <p>
                          <span className="font-bold">{sp.paraTitle}: </span>
                          {sp.para}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex justify-center mb-10">
                <Link href="/consultation/location" className="bg-primary-orange text-white font-semibold p-3 rounded-lg">
                  BOOK A CONSULTATION
                </Link>
              </div>
            </div>

            {/* Go to Top Button */}
            <div className="flex justify-center mb-10">
              <a href="#top" className="bg-primary-orange text-white font-semibold p-3 rounded-lg">
                Go to Top
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TmsPage;



const prevContent = `
                   <div className='px-4'>

    <div className='flex justify-center p-6 items-center mb-6'>
        <Link className='mr' href={'/'}>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            // className="w-6 h-6"
            >
                <path d="M15 18l-6-6 6-6" />
            </svg> */}
        </Link>

        <div>
            <h1 className="text-2xl font-semibold "> TMS Treatment</h1>

        </div>


    </div>
    <div className='px-4'>

        <div className='mb-4'>
            <h1 className='text-xl text-primary-orange  mb-2 font-semibold'>What is TMS ?</h1>
            <p className='mb-2 text-sm text-gray-700'>Many mental health conditions like depression, anxiety, PTSD, and OCD are linked to specific parts of the brain not working as they should. When these areas of the brain are underactive, it can lead to constant and challenging symptoms that affect daily life.</p>
            <p className='mb-5 text-sm text-gray-700'>Transcranial Magnetic Stimulation (TMS) offers a non-invasive way to address this issue. By using magnetic fields, TMS stimulates nerve cells in the brain areas responsible for mood regulation and mental health. Think of TMS as a method to &apos;jump-start&apos; these underactive parts of the brain, helping them to function normally again and improving overall mental health. </p>
            <div>
                <img src='/home/clinicImg.svg' />
            </div>
        </div>
        <div className='mb-10'>
            <h1 className='text-xl text-primary-orange  mb-4 font-semibold '>How TMS Works:</h1>
            <div className='mb-6'>
                {
                    works?.map((i, index) => (
                        <div key={index} className='flex justify-between p-5 mb-3 bg-primary-div rounded-lg '>
                            <h1 className='text-primary-orange text-sm font-semibold'>{index + 1}. {i?.title}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" strokeWidth="1" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <Link href="/consultation/location" className='bg-primary-orange  text-white font-semibold  rounded-lg p-3'>BOOK A CONSULTATION</Link>
            </div>
        </div>

        <div className='mb-10'>
            <h1 className='text-center text-2xl font-semibold mb-3 '>Stages in TMS Therapy?</h1>
            <p className='text-gray-700 text-center text-[13px] mb-6'>What can I expect when receiving a TMS therapy? </p>
            {
                stages?.map((i, index) => (
                    <div key={index} className='mb-6'>
                        <h1 className='text-xl text-primary-orange  mb-4 font-semibold'>{index+1}. {i?.title}</h1>
                        <div>
                            <div className='h-[201px] w-full rounded-lg mb-4 bg-primary-div border-orange-500 border-2'></div>
                            {
                                i.subPoints?.map((sp, index)=> (
                                    <div key={index} className='d-flex mb-3'>
                                <p> <span className='font-bold '>{sp?.paraTitle}: </span>{sp?.para}</p>
                            </div>
                                ))
                            }
                            
                        </div>
                    </div>
                ))
            }
           
        </div>

        <div className='flex justify-center mb-10'>
            <Link href="/consultation/location" className='bg-primary-orange  text-white font-semibold p-3 rounded-lg '>BOOK A CONSULTATION</Link>
        </div>
    </div>
</div>
`

const works = [
  {
    id: 1,
    title: 'Identifying the Condition',
  },
  {
    id: 2,
    title: 'Activation of Brain Cells',
  },
  {
    id: 3,
    title: 'Release of Neurotransmitters',
  },
  {
    id: 4,
    title: 'Improved Brain Connections',
  }
]

const stages = [
  {
    id: 1,
    title: 'Initial Consultation',
    subPoints: [
      {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      },
      {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      }, {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      },

    ]
  },
  {
    id: 1,
    title: 'Initial Consultation',
    subPoints: [
      {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      },
      {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      }, {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      },

    ]
  },
  {
    id: 1,
    title: 'Initial Consultation',
    subPoints: [
      {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      },
      {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      }, {
        paraTitle: 'Evaluation',
        para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
      },

    ]
  },
]