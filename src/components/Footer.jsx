"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
const locations = [
  {
    name: "Aster CMI",
    area: "Bangalore North",
    bgColor: "bg-primary-orange",
    location: "Banglore Aster CMI",
    whatsapp: +919663095632,
    call: +919663095632,
  },
  {
    name: "Whitefield",
    area: "Bangalore North",
    bgColor: "bg-[#F8A51C]",
    location: "Banglore Whitefield",
    whatsapp: +919663095632,
    call: +919663095632,
  },
  {
    name: "Greater Kailash 1",
    area: "Delhi",
    bgColor: "bg-primary-orange",
    location: "Delhi",
    whatsapp: +919663095632,
    call: +919663095632,
  }
];


function Footer() {
  const router = useRouter();
  const [requestModal, setRequestModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    location: '',
    message: '',
    whatsapp: ''
  });
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours >= 10 && hours < 18) {
        setIsBusinessHours(true);
      } else {
        setIsBusinessHours(false);
      }
    };
    checkBusinessHours();
  }, []);
  useEffect(() => {
    const handlePopState = () => {
      if (requestModal) {
        setRequestModal(false);
      }
    };

    if (requestModal) {
      window.history.pushState(null, '');
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [requestModal]);

  const cardClick = (data) => {
    setFormData(prev => ({
      ...prev,
      location: data?.location,
      whatsapp: data?.whatsapp
    }))
    setRequestModal(true)
  }
  useEffect(() => {
    const whatsappNumber = locations.find(location => location.location === formData.location)?.whatsapp;
    if (whatsappNumber) {
      setFormData(prev => ({
        ...prev,
        whatsapp: whatsappNumber
      }));
    }
    // console.log("new whatsapp number", formData.whatsapp);
  }, [formData.location])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggleRequestModal();
  }

  const toggleRequestModal = () => {
    setRequestModal(prev => !prev);
    setFormData({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      location: '',
      message: '',
      preferredTime: ''
    });
  }

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && formData.location;
  }
  const [isBusinessHours, setIsBusinessHours] = useState(false);
  // Dynamic data for call and WhatsApp sections

  const MobileFooter = () => {

    return (
      <>
        <div className=''>
          <div className="flex justify-center">
            <img
              className="h-[129px] w-[185px]"
              alt="Footer Logo"
              src="/home/footerLogo.svg"
            />
          </div>

          {/* Call Us Section */}
          <div className='mb-8'>
            <div>
              <h2 className='text-center text-2xl font-bold text-primary-orange'>Call Us</h2>
            </div>
          
            <div className='p-4 flex items-center overflow-x-scroll gap-4 md:justify-center'>
              {locations.map((location, index) => (
                <div key={index} className={`bg-gray-shades py-3 px-3 rounded-lg shadow-lg cursor-pointer select-none min-w-[170px]`}>
                  <div className='flex justify-center mb-3'>
                  <div className='w-[48px] cursor-pointer'>
                      <a href={`tel:${location?.call}`}>
                        <svg
                          viewBox="0 0 96 96"
                         fill='#946b6b'
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title />
                          <g data-name="Layer 2" id="Layer_2">
                            <g data-name="Layer 2" id="Layer_2-2">
                              <path d="M48,0A48,48,0,1,0,96,48,48,48,0,0,0,48,0Zm2.71,25.64c10.69.33,19.93,10,19.8,20.37a4.15,4.15,0,0,0,.05.79c0,.85-.05,1.73-1.23,1.7-1.34,0-1.15-1.32-1.23-2.33V45.9c-1.43-11-6.55-16.21-17.71-17.9-.93-.11-2.33.05-2.3-1.13C48.22,25.09,49.86,25.78,50.71,25.64ZM65,45.49a.86.86,0,0,1-.85.88c-1.21.22-1.4-.49-1.48-1.29a5.23,5.23,0,0,0-.08-.93C61.41,37.46,59,35,52.14,33.48c-1-.22-2.58-.11-2.3-1.62s1.65-1,2.74-.85c6.85.85,12.48,6.69,12.45,13.13C65,44.53,65.05,45.08,65,45.49Zm-5.7-.88a1.31,1.31,0,0,1-.6.16,1.07,1.07,0,0,1-.93-.36,1.9,1.9,0,0,1-.33-.93,4.94,4.94,0,0,0-4.61-4.8c-.85-.14-1.7-.44-1.29-1.53.27-.77,1-.85,1.7-.85,3-.08,6.61,3.51,6.55,6.61A1.86,1.86,0,0,1,59.27,44.61Zm11.38,19.3c-1.18,3.24-5.24,6.55-8.72,6.5a12.59,12.59,0,0,1-2.33-.63C47.15,64.55,37.5,56.54,30.94,45.57a59,59,0,0,1-4-8c-2.11-5.07.08-9.35,5.43-11.13a4.53,4.53,0,0,1,2.82,0c2.3.85,8.06,8.61,8.17,10.94.08,1.78-1.12,2.74-2.36,3.54A3.77,3.77,0,0,0,39,44.39a6.35,6.35,0,0,0,.58,2.19,20.55,20.55,0,0,0,11,10.5c1.78.8,3.51.71,4.74-1.1,2.17-3.21,4.85-3,7.79-1.07,1.43,1,3,2,4.36,3.1C69.39,59.56,71.8,60.76,70.65,63.91Z" />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center text-white'>
                    <p className='font-semibold text-sm'>{location.name}</p>
                    <h1 className='text-lg font-semibold'>{location.area}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Us Section */}
          <div>
            <div>
              <h2 className='text-center text-2xl font-bold text-primary-orange'>WhatsApp Us</h2>
            </div>
            <div className='p-4 flex items-center overflow-x-scroll gap-4 md:justify-center'>
              {locations.map((location, index) => (
                <div key={index} onClick={() => cardClick(location)} className={`bg-gray-shades py-3 cursor-pointer px-3 rounded-lg shadow  min-w-[170px]`}>
                  <div className='flex justify-center mb-3'>
                    <div className='w-[40px]'>
                      <Image src='/home/whatsapp2.svg' width={100} height={100} alt="WhatsApp" />
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center text-white'>
                    <p className='font-semibold text-sm'>{location.name}</p>
                    <h1 className='text-lg font-semibold'>{location.area}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <Dialog open={requestModal} onClose={toggleRequestModal}>
          <DialogTitle className='text-center font-semibold'>WhatsApp Us</DialogTitle>
          <DialogContent>
            {!isFormValid() && <div>
              <p className='text-center text-red-600 font-semibold'>Please fill in the form below to request an appointment.</p>
            </div>}
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="phone"
              label="Phone Number"
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Banglore Whitefield">Banglore Whitefield</MenuItem>
                <MenuItem value="Banglore Aster CMI">Banglore Aster CMI</MenuItem>
              </Select>
              <div className='py-4 flex flex-col justify-center items-center gap-5'>
                <div className='w-full mb-3'>
                  {!isBusinessHours &&

                    <>
                      <TextField
                        margin="dense"
                        name="preferredTime"
                        label="Preferred Time for Callback"
                        type="time"
                        fullWidth
                        value={formData.preferredTime}
                        onChange={handleChange}
                      />

                      {
                        (!formData?.preferredTime || !isFormValid()) && <p className='text-center text-sm underline font-semibold text-red-500'>Provide  Time For Callback</p>
                      }
                    </>
                  }
                </div>


                {isBusinessHours ? (
                  <button
                    className={`select-none flex gap-2 w-full items-center justify-center text-white rounded-lg px-4 py-2 font-semibold text-center ${isFormValid() ? 'cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500' : 'cursor-not-allowed bg-gray-300'}`}
                    disabled={!isFormValid()}
                    onClick={() => window.open(`https://wa.me/${formData?.whatsapp}?text=${encodeURIComponent(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Location: ${formData.location}, Message: ${formData.message}`)}`, "_blank")}
                  >
                    Contact on <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </button>
                ) : (
                  <>

                    <button
                      className={`select-none flex w-full  gap-2 justify-center items-center text-white rounded-lg px-4 py-3  font-semibold text-center ${isFormValid() && formData?.preferredTime ? 'cursor-pointer active:shadow-xl active:bg-blue-600 bg-blue-500' : 'cursor-not-allowed bg-gray-300'}`}
                      disabled={!isFormValid() || !formData?.preferredTime}
                      onClick={handleSubmit}
                    >
                      Request a Callback
                    </button>

                  </>
                )}
              </div>
            </FormControl>
          </DialogContent>

        </Dialog>
      </>
    )
  }


  const DesktopFooter = () => {

    return (
      <>
        <div className=''>
          <div className="flex justify-center">
            <img
              className="h-[129px] w-[185px]"
              alt="Footer Logo"
              src="/home/footerLogo.svg"
            />
          </div>

          {/* Call Us Section */}
          <div className='mb-8'>

            <div className='p-4 flex items-center overflow-x-scroll gap-4 md:justify-center'>
              {locations.map((location, index) => (
                <div key={index} style={{ backgroundColor: location.bgColor }} className={`bg-gray-shades py-3 px-3 rounded-lg shadow-lg  select-none min-w-[270px]`}>
                  <div className='flex justify-center gap-6 mb-3'>
                    <div className='w-[48px] cursor-pointer' onClick={() => cardClick(location)}>
                      <Image src='/home/whatsapp2.svg' width={100} height={100} alt="WhatsApp" />
                    </div>
                    <div className='w-[48px] cursor-pointer'>
                      <a href={`tel:${location?.call}`}>
                        <svg
                          viewBox="0 0 96 96"
                         fill='#946b6b'
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title />
                          <g data-name="Layer 2" id="Layer_2">
                            <g data-name="Layer 2" id="Layer_2-2">
                              <path d="M48,0A48,48,0,1,0,96,48,48,48,0,0,0,48,0Zm2.71,25.64c10.69.33,19.93,10,19.8,20.37a4.15,4.15,0,0,0,.05.79c0,.85-.05,1.73-1.23,1.7-1.34,0-1.15-1.32-1.23-2.33V45.9c-1.43-11-6.55-16.21-17.71-17.9-.93-.11-2.33.05-2.3-1.13C48.22,25.09,49.86,25.78,50.71,25.64ZM65,45.49a.86.86,0,0,1-.85.88c-1.21.22-1.4-.49-1.48-1.29a5.23,5.23,0,0,0-.08-.93C61.41,37.46,59,35,52.14,33.48c-1-.22-2.58-.11-2.3-1.62s1.65-1,2.74-.85c6.85.85,12.48,6.69,12.45,13.13C65,44.53,65.05,45.08,65,45.49Zm-5.7-.88a1.31,1.31,0,0,1-.6.16,1.07,1.07,0,0,1-.93-.36,1.9,1.9,0,0,1-.33-.93,4.94,4.94,0,0,0-4.61-4.8c-.85-.14-1.7-.44-1.29-1.53.27-.77,1-.85,1.7-.85,3-.08,6.61,3.51,6.55,6.61A1.86,1.86,0,0,1,59.27,44.61Zm11.38,19.3c-1.18,3.24-5.24,6.55-8.72,6.5a12.59,12.59,0,0,1-2.33-.63C47.15,64.55,37.5,56.54,30.94,45.57a59,59,0,0,1-4-8c-2.11-5.07.08-9.35,5.43-11.13a4.53,4.53,0,0,1,2.82,0c2.3.85,8.06,8.61,8.17,10.94.08,1.78-1.12,2.74-2.36,3.54A3.77,3.77,0,0,0,39,44.39a6.35,6.35,0,0,0,.58,2.19,20.55,20.55,0,0,0,11,10.5c1.78.8,3.51.71,4.74-1.1,2.17-3.21,4.85-3,7.79-1.07,1.43,1,3,2,4.36,3.1C69.39,59.56,71.8,60.76,70.65,63.91Z" />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>

                  </div>
                  <div className='flex flex-col justify-center items-center text-white'>
                    <p className='font-semibold text-sm'>{location.name}</p>
                    <h1 className='text-lg font-semibold'>{location.area}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Us Section */}


        </div>
        <Dialog open={requestModal} onClose={toggleRequestModal}>
          <DialogTitle className='text-center font-semibold'>WhatsApp Us</DialogTitle>
          <DialogContent>
            {!isFormValid() && <div>
              <p className='text-center text-red-600 font-semibold'>Please fill in the form below to request an appointment.</p>
            </div>}
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="phone"
              label="Phone Number"
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Banglore Whitefield">Banglore Whitefield</MenuItem>
                <MenuItem value="Banglore Aster CMI">Banglore Aster CMI</MenuItem>
              </Select>
              <div className='py-4 flex flex-col justify-center items-center gap-5'>
                <div className='w-full mb-3'>
                  {!isBusinessHours &&

                    <>
                      <TextField
                        margin="dense"
                        name="preferredTime"
                        label="Preferred Time for Callback"
                        type="time"
                        fullWidth
                        value={formData.preferredTime}
                        onChange={handleChange}
                      />

                      {
                        (!formData?.preferredTime || !isFormValid()) && <p className='text-center text-sm underline font-semibold text-red-500'>Provide  Time For Callback</p>
                      }
                    </>
                  }
                </div>


                {isBusinessHours ? (
                  <button
                    className={`select-none flex gap-2 w-full items-center justify-center text-white rounded-lg px-4 py-2 font-semibold text-center ${isFormValid() ? 'cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500' : 'cursor-not-allowed bg-gray-300'}`}
                    disabled={!isFormValid()}
                    onClick={() => window.open(`https://wa.me/${formData?.whatsapp}?text=${encodeURIComponent(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Location: ${formData.location}, Message: ${formData.message}`)}`, "_blank")}
                  >
                    Contact on <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </button>
                ) : (
                  <>

                    <button
                      className={`select-none flex w-full  gap-2 justify-center items-center text-white rounded-lg px-4 py-3  font-semibold text-center ${isFormValid() && formData?.preferredTime ? 'cursor-pointer active:shadow-xl active:bg-blue-600 bg-blue-500' : 'cursor-not-allowed bg-gray-300'}`}
                      disabled={!isFormValid() || !formData?.preferredTime}
                      onClick={handleSubmit}
                    >
                      Request a Callback
                    </button>

                  </>
                )}
              </div>
            </FormControl>
          </DialogContent>

        </Dialog>
      </>
    )
  }
  return (
    <footer className="py-6 footer-gradient">
      <div className='hidden md:block'>
        <DesktopFooter />
      </div>
      <div className='md:hidden'>
        <MobileFooter />
      </div>
    </footer>
  );
}

export default Footer;