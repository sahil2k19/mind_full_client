"use client"

import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    active: '/',
  },
  {
    id: 2,
    title: 'Blogs',
    path: '/blogs',
    active: '/blogs',
  },
  {
    id: 3,
    title: 'Services',
    path: '/service',
    active: '/service',
    child: [
      {
        id: 1,
        title: 'Therapy ',
        path: '/services/Therapy Services',
        active: '/services/Therapy%20Services',
      },
      {
        id: 2,
        title: 'Psychiatry',
        path: '/services/TMS Treatment Services',
        active: '/services/TMS%20Treatment%20Services',
      },
    ]
  },
  {
    id: 13,
    title: 'Self Assessment',
    path: '/assesment',
    active: '/assesment',
  },
  {
    id: 4,
    title: 'Our Clinic Locations',
    path: '/location',
    active: '/location',
  },
  {
    id: 5,
    title: 'Our Experts',
    path: '/location',
    active: '/location',
  },
  {
    id: 51,
    title: 'Health Library',
    path: '/contact-us',
    active: '/contact-us',
  },
]
function Navbar() {
  const router = useRouter();
  const location = { pathname: usePathname() }
  // const location = router
  // console.log("JJLKJLKJ", location)
  
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
//   const [showModal, setShowModal] = useState(false);
//   const [showslidebar, setslidebarl] = useState(false);
  const [open, setOpen] = useState(false);


  const toggleDrawer = (open) => (event) => {

    setOpen(open);
  };

  const [activePage, setActivePage] = useState("");

  const handleNavigate = (path) => {
    setActivePage(path);
    // navigate(path);
    router.push(path);
  };

  useEffect(() => {
    setCurrentLocation(location.pathname)
    console.log('currentlocation', currentLocation, "laksjdfl", currentLocation)
    window.scrollTo(0, 0);
  }, [location.pathname])


  return (
    <div className='sticky bg-white p-0 top-0 left-0 right-0 z-10'>

      <div className="select-none">
        <header className="flex items-center justify-between px-6 py-0">
          <div onClick={() => setOpen(true)} className="cursor-pointer">
            <img src="/home/menu.svg" />
          </div>
          <div onClick={() => router.push("/")} className="cursor-pointer w-[129px] h-[90px]">
            <img className="cursor-pointer w-full h-full" src="/home/logoMain.svg" />
          </div>

        </header>
        <Drawer open={open} onClose={toggleDrawer(false)} className="">
          <div className="w-[261px] px-2 py-6 select-none">
            <div className="flex justify-end">
              <img
                onClick={() => setOpen(false)}
                className="w-[30px] h-[30px] cursor-pointer"
                src="/home/close.svg"
              />
            </div>
            <div className="py-4 ">
              {
                links.map((link, index) => (
                  <div
                    className={`flex cursor-pointer justify-between px-8 py-4 mb-2 ${(link.active === currentLocation) ? "font-bold bg-[#F8A51C] rounded-lg  text-white" : ""}`}
                    key={index}
                    onClick={() => {
                      if(link?.child){
                        return ;
                      }
                      handleNavigate(link.path)
                    }}
                  >
                    <div className="">
                      <p >{link.title}</p>
                      {
                        link?.child?.map((c,index)=>(
                            <div key={index} onClick={() => {handleNavigate(c.path)}} className={`ml-5 mt-4  ${c?.active===currentLocation?"font-bold bg-[#F8A51C] rounded-lg px-10 py-2 w-full  text-white":""}`}>
                              <p className="mb-2"><span className={`${c?.active===currentLocation?"":""}text-[#EF6623]`}>{`${c.active===currentLocation?"":""}`} </span>{c?.title}</p>
                            </div>
                        )) 
                      }
                    </div>

                    {link?.active === currentLocation ? <p>{">"}</p>

                      : null}

                  </div>
                ))
              }
              {/* <div className={`flex justify-between px-8 py-4 mb-2 ${ true?"font-bold bg-[#F8A51C] rounded-lg  text-white":""}`}>
              <p>Home</p>{true?<p>{">"}</p>:null}
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>TMS</p>
            </div>
            <div className="  px-8 py-3 mb-2 ">
              <p className="mb-4">Services</p>
              <div className="ml-5 ">
                <p className="mb-2"><span className="text-[#EF6623]">-- </span>Therapy</p>
                <p><span className="text-[#EF6623]">-- </span>Psychiatry</p>
              </div>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p> Self Assessment</p>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>Our Clinic Locations</p>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>Our Experts</p>
            </div>
            <div className="flex justify-between  px-8 py-3 mb-2 ">
              <p>Health Library</p>
            </div> */}
            </div>

            <div>
              <div className=" mb-4">
                <button className="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg w-full py-3 mb-4 text-white text-sm font-semibold">
                  SCHEDULE CONSULTATION
                </button>
                <button onClick={() => router.push("/contactUs")} className="bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg w-full py-3 text-white text-sm font-semibold">
                  CONTACT US
                </button>
              </div>

            </div>
          </div>
        </Drawer>

      </div>
    </div>

  );
}

export default Navbar;
