'use client'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomePage from '@/app/component/HomePage'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });




const EditHomePage = ({ allSection, setAllSection }) => {
  const [content, setContent] = useState('');


  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];


  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };


  return (
    <>
      <Accordion className=''>
        <AccordionSummary >
          <h1 className='text-2xl font-semibold'>Section 1</h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className='px-10 '>
            <div className='flex flex-col items-center '>
              <div className='flex flex-col w-full mb-6'>
                <label className='text-lg font-semibold'>Title</label>
                <input type='text' className='border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none' value={allSection?.heroSection?.title} onChange={(e) => {
                  setAllSection({ ...allSection, heroSection: { ...allSection?.heroSection, title: e.target.value } })
                }} />
              </div>
              <div className='flex flex-col w-full mb-6'>
                <label className='text-lg font-semibold'>Para</label>
                <textarea className='border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[200px]' value={allSection?.heroSection?.para} onChange={(e) => {
                  setAllSection({ ...allSection, heroSection: { ...allSection?.heroSection, para: e.target.value } })
                }} />
              </div>
              <div className='flex flex-col w-full mb-6'>
                <label className='text-lg font-semibold'>Button</label>
                <input type='text' className='border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none' value={allSection?.heroSection?.button?.text} onChange={(e) => {
                  setAllSection({ ...allSection, heroSection: { ...allSection?.heroSection, button: { ...allSection?.heroSection?.button, text: e.target.value } } })
                }} />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary >
          <h1 className='text-2xl font-semibold'>Section 2</h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className='px-10 '>
            <div className='flex flex-col items-center '>
              <div className='flex flex-col w-full mb-6'>
                <label className='text-lg font-semibold'>Para1</label>
                <input type='text' className='border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none' value={allSection?.section2?.para1} onChange={(e) => {
                  setAllSection({ ...allSection, section2: { ...allSection?.section2, para1: e.target.value } })
                }} />
              </div>
              <div className='flex flex-col w-full mb-6'>
                <label className='text-lg font-semibold'>Para2</label>
                <textarea className='border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[200px]' value={allSection?.section2?.html1} onChange={(e) => {
                  setAllSection({ ...allSection, section2: { ...allSection?.section2, html1: e.target.value } })
                }} />
                <QuillEditor
                  value={allSection?.section2?.html1}
                  onChange={(e)=>{setAllSection({ ...allSection, section2: { ...allSection?.section2, html1: e } })}}
                  modules={quillModules}
                  formats={quillFormats}
                  className="w-full h-[70%] mt-10 bg-white"
                />
              </div>
              <div className='flex flex-col w-full mb-6'>
                <label className='text-lg font-semibold'>Button</label>
                <input type='text' className='border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none' value={allSection?.section2?.button?.text} onChange={(e) => {
                  setAllSection({ ...allSection, section2: { ...allSection?.section2, button: { ...allSection?.section2?.button, text: e.target.value } } })
                }} />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <div className="h-full w-[90vw]">
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="w-full h-[70%] mt-10 bg-white"
        />
      </div>
    </>
  )
}

export default EditHomePage