"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import QuillEditorComponent from "@/components/QuillEditorComponent";
import axios from "axios";
import Image from "next/image";

const EditHomePage = ({ allSection, setAllSection }) => {
  const [content, setContent] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChangeImage = () => {
    // Handle image change logic here
  };

  const handleSave = () => {
    if (allSection) {
      axios
        .put(
          process.env.NEXT_PUBLIC_API_URL + "homeSection/udpateHomeSection",
          allSection
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Home Page Sections"
      >
        <Tab className="font-semibold text-xl" label="Section 1" />
        <Tab className="font-semibold text-xl" label="Section 2" />
        <Tab className="font-semibold text-xl" label="Section 3" />
        <Tab className="font-semibold text-xl" label="Section 4" />
        <Tab className="font-semibold text-xl" label="Section 5" />
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

    {/* SECTION 2 */}
      <TabPanel value={selectedTab} index={1}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para1</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.para1 || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      para1: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para2</label>
              <QuillEditorComponent
                value={allSection?.section2?.html1 || ""}
                onChange={(e) =>
                  setAllSection({
                    ...allSection,
                    section2: { ...allSection?.section2, html1: e },
                  })
                }
                className="w-full h-[70%] mt-10 bg-white"
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.button?.text || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      button: {
                        ...allSection?.section2?.button,
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

      {/* SECTION 3 */}
      <TabPanel value={selectedTab} index={2}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Title</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section3?.title || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section3: {
                      ...allSection?.section3,
                      title: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para 1</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section3?.para1 || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section3: {
                      ...allSection?.section3,
                      para1: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <div className="border-2 border-gray-400 rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-4">Box</h3>
                <div className="flex">
                  <input
                    type="file"
                    className=""
                    onChange={handleChangeImage}
                  />
                  {allSection?.section3?.box?.banner && (
                    <Image
                      src={allSection.section3.box.banner}
                      width={100}
                      height={100}
                      alt="Banner Image"
                    />
                  )}
                </div>
                <div>
                  <div className="flex flex-col w-full mb-6">
                    <label className="text-lg font-semibold">Para2</label>
                    <QuillEditorComponent
                      value={allSection?.section3?.box?.para || ""}
                      onChange={(e) =>
                        setAllSection({
                          ...allSection,
                          section3: {
                            ...allSection?.section3,
                            box: { ...allSection?.section3?.box, para: e },
                          },
                        })
                      }
                      className="w-full h-[70%] mt-10 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para2</label>
              <QuillEditorComponent
                value={allSection?.section3?.para2 || ""}
                onChange={(e) =>
                  setAllSection({
                    ...allSection,
                    section3: { ...allSection?.section3, para2: e },
                  })
                }
                className="w-full h-[70%] mt-10 bg-white"
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
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

            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button Link</label>
              <input
                type="text" className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none" 
                value={allSection?.section3?.button?.link || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section3: {
                      ...allSection?.section3,
                      button: {
                        ...allSection?.section3?.button,
                        link: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel>

      {/* SECTION 4 */}
      <TabPanel value={selectedTab} index={3}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Title</label>
              <QuillEditorComponent
                value={allSection?.section4?.header || ""}
                onChange={(e) =>
                  setAllSection({
                    ...allSection,
                    section4: { ...allSection?.section4, header: e },
                  })
                }
                className="w-full h-[70%] mt-10 bg-white"
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para 1</label>
              <QuillEditorComponent
                value={allSection?.section4?.para || ""}
                onChange={(e) =>
                  setAllSection({
                    ...allSection,
                    section4: { ...allSection?.section4, para: e },
                  })
                }
                className="w-full h-[70%] mt-10 bg-white"
              />
            </div>

          </div>
        </div>
      </TabPanel>

      {/* SECTION 5 */}
      <TabPanel value={selectedTab} index={4}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Header</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section5?.header || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section5: {
                      ...allSection?.section5,
                      header: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="w-full mb-6">
              <h3 className="text-2xl font-semibold text-center">Services</h3>
              <div className="border-2 p-6  border-gray-400 rounded-xl">
                <div>
                  {allSection?.section5?.services?.map((service, serviceIndex) => (
                    <div className="flex flex-col w-full mb-6" key={serviceIndex}>
                      <label className="text-lg font-semibold">Service Title</label>
                      <input
                        type="text"
                        className="border-2  rounded-xl p-2 text-xl border-gray-400 outline-none"
                        value={service?.title || ""}
                        onChange={(e) => {
                          const updatedServices = [...allSection.section5.services];
                          updatedServices[serviceIndex] = {
                            ...updatedServices[serviceIndex],
                            title: e.target.value,
                          };

                          setAllSection({
                            ...allSection,
                            section5: {
                              ...allSection.section5,
                              services: updatedServices,
                            },
                          });
                        }}
                      />

                      {service?.array?.map((item, itemIndex) => (
                        <div className="mt-4 ml-10" key={itemIndex}>
                          <label className="text-lg font-semibold">Name {itemIndex + 1}</label>
                          <input
                            type="text"
                            className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            value={item?.name || ""}
                            onChange={(e) => {
                              const updatedServices = [...allSection.section5.services];
                              updatedServices[serviceIndex] = {
                                ...updatedServices[serviceIndex],
                                array: updatedServices[serviceIndex].array.map((arrayItem, arrayIndex) =>
                                  arrayIndex === itemIndex
                                    ? { ...arrayItem, name: e.target.value }
                                    : arrayItem
                                ),
                              };

                              setAllSection((prevState) => ({
                                ...prevState,
                                section5: {
                                  ...prevState.section5,
                                  services: updatedServices,
                                },
                              }));
                            }}
                          />
                        </div>
                      ))}


                      <div className="flex flex-col ml-6 mt-7 w-full mb-6">
                        <label className="text-lg font-semibold">Button</label>
                        <input
                          type="text"
                          className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                          value={allSection?.section5?.services[serviceIndex]?.button?.text || ""}
                          onChange={(e) => {
                            const newServices = [...allSection.section5.services];
                            newServices[serviceIndex] = {
                              ...newServices[serviceIndex],
                              button: {
                                ...newServices[serviceIndex].button,
                                text: e.target.value,
                              },
                            };

                            setAllSection((prevState) => ({
                              ...prevState,
                              section5: {
                                ...prevState.section5,
                                services: newServices,
                              },
                            }));
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.button?.text || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      button: {
                        ...allSection?.section2?.button,
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
  );
};

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

export default EditHomePage;
