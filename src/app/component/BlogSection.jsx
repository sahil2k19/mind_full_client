// components/BlogSection.jsx

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const BlogSection = ({ section }) => {
  const router = useRouter()
  switch (section.type) {
    case 'header':
      return (
        <div className="">
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      );
    case 'content':
      return (
        <div className="">
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      );
    case 'image':
      return (
        <div className="  w-full ">
          <img src={section.content} alt="section" className="w-full rounded-xl object-fit-cover h-full" />
        </div>
      );

    case 'button':
      return (
        <div className="flex justify-center items-center ">
          <button onClick={() => router.push(section.link)} className='bg-primary-orange hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 text-white text-sm font-semibold'>{section.text}</button>
        </div>
      );

    case 'accordion':
      return (
        <div className="">
          <Accordion className='shadow-none'>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-primary-div rounded-xl"
            >
              <h3 className="text-lg text-primary-orange font-semibold">Accordion</h3>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
              {section.sections.map((nestedSection, index) => (
                <div key={index} className="p-4">
                  <BlogSection section={nestedSection} />
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      );
    default:
      return null;
  }
};

export default BlogSection;
