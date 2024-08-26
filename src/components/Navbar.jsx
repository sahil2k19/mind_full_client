"use client"

import React, { useEffect, useState } from "react";
import Drawer from '@mui/material/Drawer';
import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    active: '/',
  },
  // {
  //   id: 2,
  //   title: 'Blogs',
  //   path: '/blogs',
  //   active: '/blogs',
  // },
   {
    id: 2,
    title: 'TMS',
    path: '/pages/tmsPage',
    active: '/pages/tmsPage',
  },
  {
    id: 3,
    title: 'Services',
    path: '/service',
    active: '/service',
    child: [
      {
        id: 1,
        title: 'Therapy',
        path: '/services/Therapy Services',
        active: '/services/Therapy%20Services',
      },
      {
        id: 2,
        title: 'TMS Treatment Page',
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
    child: [
      {
        id: 1,
        title: 'New Delhi',
        path: '/clinicLocation/New-Delhi',
        active: '/clinicLocation/New-Delhi',
      },
      {
        id: 2,
        title: 'Bengaluru Whitefield',
        path: '/clinicLocation/Bengaluru-Whitefield',
        active: '/clinicLocation/Bengaluru-Whitefield',
      },
      {
        id: 3,
        title: 'Bengaluru Hebbal',
        path: '/clinicLocation/Bengaluru-Hebbal',
        active: '/clinicLocation/Bengaluru-Hebbal',
      },
    ]
  },
  {
    id: 5,
    title: 'Our Experts',
    path: '/pages/ourExpert',
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
  const location = { pathname: usePathname() };
  
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  const [open, setOpen] = useState(false);
  const [activeParent, setActiveParent] = useState(null); // Track which parent link is expanded

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const handleNavigate = (path, hasChildren, id) => {
    if (hasChildren) {
      setActiveParent(activeParent === id ? null : id); // Toggle the active parent link
    } else {
      router.push(path);
      setOpen(false); // Close the drawer after navigation
    }
  };

  useEffect(() => {
    setCurrentLocation(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='sticky bg-white p-0 top-0 left-0 right-0 z-50'>
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
              {links.map((link) => (
                <div key={link.id}>
                  <div
                    className={`flex cursor-pointer justify-between px-8 py-4 mb-2 ${(link.active === currentLocation) ? "font-bold bg-[#F8A51C] rounded-lg text-white" : "text-gray-500"}`}
                    onClick={() => handleNavigate(link.path, link.child, link.id)}
                  >
                    <div>
                      <p className="font-semibold ">{link.title}</p>
                    </div>
                    {link.child && <p>{activeParent === link.id ? "v" : ">"}</p>}
                  </div>
                  {link.child && activeParent === link.id && (
                    <div className=" ml-11 flex flex-col">
                      {link.child.map((child) => (
                        <span
                          key={child.id}
                          onClick={() => handleNavigate(child.path, false)}
                          className={`mb-2  cursor-pointer ${(child.active === currentLocation) ? "font-bold bg-[#F8A51C] rounded-lg p-2  text-white" : "text-gray-400"}`}
                        >
                          <span className="text-sm whitespace-nowrap "><span className="font-bold text-xl">-</span>{child.title}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mb-4">
              <button className="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg w-full py-3 mb-4 text-white text-sm font-semibold">
                SCHEDULE CONSULTATION
              </button>
              <button onClick={() => router.push("/contactUs")} className="bg-[#F8A51C] hover:bg-yellow-500 active:bg-yellow-600 rounded-lg w-full py-3 text-white text-sm font-semibold">
                CONTACT US
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
