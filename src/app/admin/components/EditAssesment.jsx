"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const EditAssessment = ({ allSection, setAllSection }) => {

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
        {/* <Tab className="font-semibold text-md" label="Section 2" />
        <Tab className="font-semibold text-md" label="Section 3" /> */}
      </Tabs>

      {/* SECTION 1 */}
      <TabPanel value={selectedTab} index={0}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Header</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section1?.header || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section1: {
                      ...allSection?.section1,
                      header: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Paragraph</label>
              <textarea
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[200px]"
                value={allSection?.section1?.para1 || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section1: {
                      ...allSection?.section1,
                      para1: e.target.value,
                    },
                  });
                }}
              />
            </div>
            {/* Available Tests */}
            {allSection?.section1?.AvailableTest?.map((test, index) => (
              <div key={index} className="flex border-2 border-gray-400 bg-blue-50 rounded-xl p-2 flex-col w-full mb-6">
                <div className="mb-8">

                  <label className="text-lg font-semibold">Test Title {index + 1}</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={test?.title2 || ""}
                    onChange={(e) => {
                      const updatedTests = allSection.section1.AvailableTest.map((t, i) =>
                        i === index ? { ...t, title2: e.target.value } : t
                      );
                      setAllSection({
                        ...allSection,
                        section1: {
                          ...allSection.section1,
                          AvailableTest: updatedTests,
                        },
                      });
                    }}
                  />
                </div>
                <div className="mb-8">

                  <label className="text-lg font-semibold">Test Img</label>
                  <div className="flex  gap-4 border-2 border-gray-400 bg-gray-100 rounded-xl p-2">
                  <input type="file" className=" rounded-xl p-2 text-xl border-gray-400 outline-none" />
                  <div className="h-[80px] w-[80px]">
                    <img className="h-100 w-100" src={test?.img} alt="test" />
                  </div>
                  </div>
                </div>
                  <div>
                    <label className="text-lg font-semibold">Test Link</label>
                    <input
                    disabled
                      type="text" className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                      value={test?.link || ""}
                      onChange={(e) => {
                        const updatedTests = allSection.section1.AvailableTest.map((t, i) =>
                          i === index ? { ...t, link: e.target.value } : t
                        );
                        setAllSection({
                          ...allSection,
                          section1: {
                            ...allSection.section1,
                            AvailableTest: updatedTests,
                          },
                        });
                      }}
                    />
                  </div>

              
              </div>
            ))}
          </div>
        </div>
      </TabPanel>

      {/* SECTION 2 */}
      {/* <TabPanel value={selectedTab} index={1}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Header</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.header || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      header: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Paragraph</label>
              <textarea
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[200px]"
                value={allSection?.section2?.para || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      para: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Default Test Title</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.defaultTest?.title || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      defaultTest: {
                        ...allSection?.section2?.defaultTest,
                        title: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Default Test Paragraph</label>
              <textarea
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[100px]"
                value={allSection?.section2?.defaultTest?.para || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      defaultTest: {
                        ...allSection?.section2?.defaultTest,
                        para: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel> */}

      {/* SECTION 3 */}
      {/* <TabPanel value={selectedTab} index={2}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Blogs</label>
              {allSection?.section3?.blogs.map((blog, index) => (
                <div key={index} className="flex flex-col mb-4">
                  <label className="text-md font-semibold">Title {index + 1}</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={blog?.title || ""}
                    onChange={(e) => {
                      const updatedBlogs = allSection.section3.blogs.map((b, i) =>
                        i === index ? { ...b, title: e.target.value } : b
                      );
                      setAllSection({
                        ...allSection,
                        section3: {
                          ...allSection.section3,
                          blogs: updatedBlogs,
                        },
                      });
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button Text</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section3?.button?.text || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section3: {
                      ...allSection?.section3,
                      button: {
                        ...allSection?.section3?.button,
                        text: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel> */}
    </>
  );
};

export default EditAssessment;

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
