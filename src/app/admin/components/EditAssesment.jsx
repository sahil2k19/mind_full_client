"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";


const EditAssesment = ({ allSection, setAllSection }) => {

  const [selectedTab, setSelectedTab] = useState(0);



  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };


  return (
    <>
    <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Home Page Sections"
      >
        <Tab className="font-semibold text-md" label="Section 1" />

      </Tabs>

      
    {/* SECTION 1 */}
      <TabPanel value={selectedTab} index={0}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Title</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.heroSection?.title || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    heroSection: {
                      ...allSection?.heroSection,
                      title: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para</label>
              <textarea
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[200px]"
                value={allSection?.heroSection?.para || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    heroSection: {
                      ...allSection?.heroSection,
                      para: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.heroSection?.button?.text || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    heroSection: {
                      ...allSection?.heroSection,
                      button: {
                        ...allSection?.heroSection?.button,
                        text: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel>


    </>
  )
}

export default EditAssesment


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}