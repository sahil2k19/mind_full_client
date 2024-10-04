"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
const locations = [
  {
    name: "Aster CMI",
    area: "Bangalore North",
    bgColor: "bg-primary-orange",
    location: "Banglore Aster CMI",
    redirect: "Bengaluru-Hebbal",
    whatsapp: +919663095632,
    call: +919663095632,
    officeOpen:10, 
    officeClose:18,
  },
  {
    name: "Whitefield",
    area: "Bangalore North",
    bgColor: "bg-[#F8A51C]",
    location: "Banglore Whitefield",
    redirect: "Bengaluru-Whitefield",
    whatsapp: +919663095632,
    call: +919663095632,
    officeOpen:10, 
    officeClose:18,
  },
  {
    name: "Greater Kailash 1",
    area: "Delhi",
    bgColor: "bg-primary-orange",    
    redirect: "New-Delhi",
    location: "Delhi",
    whatsapp: +919663095632,
    call: +919663095632,
    officeOpen:10, 
    officeClose:18,
  }
];


function Footer() {
  const router = useRouter();
  const [requestModal, setRequestModal] = useState(false);
  // const [locations, setLocations] = useState(locations);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    location: '',
    message: '',
    whatsapp: '',
    officeOpen: null,
    officeClose: null,
  });

  // const getLocationData = () => {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}clinicLocation/getAllContactDetails`)
  //     .then(res => {
  //       const details = res?.data?.map((item) => {
  //         return item.details;
  //       });
  //       setLocations(details)
        
  //       console.log('details', res?.data)
  //     }).catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   getLocationData();
  // }, [])


  const checkBusinessHours = () => {
    const now = new Date();
    const hours = now.getHours();

    const officeOpen = formData?.officeOpen ?? 10; // Default to 10 if formData?.officeOpen is undefined
    const officeClose = formData?.officeClose ?? 11; // Default to 11 if formData?.officeClose is undefined

    if (hours >= officeOpen && hours < officeClose) {
      // console.log('inside', hours, officeOpen, officeClose);
      setIsBusinessHours(true);
    } else {
      console.log('outside', hours, officeOpen, officeClose);
      setIsBusinessHours(false);
    }
  };

  useEffect(() => {

    checkBusinessHours();
  }, [formData]);
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
    const data = locations.find(location => location.location === formData.location);
    if (data) {
      setFormData(prev => ({
        ...prev,
        whatsapp: data?.whatsappNumber,
        officeOpen: data?.officeOpen,
        officeClose: data?.officeClose
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
                <div key={index} className={` ${location?.bgColor} py-3 px-3 rounded-lg shadow-lg cursor-pointer select-none min-w-[150px]`}>
                  <div className='flex justify-center mb-3'>
                    <div className='w-[48px] cursor-pointer'>
                      <a href={`tel:${location?.call}`}>
                        <img src='/home/call1.svg' width={100} height={100} alt='Call' />
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center text-white'>
                    <p className='font-semibold text-[12px]'>{location.name}</p>
                    <h1 className='text-[18px] whitespace-nowrap font-semibold'>{location.area}</h1>
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
                <div key={index} onClick={() => cardClick(location)} className={`${location?.bgColor} py-3 cursor-pointer px-3 rounded-lg shadow  min-w-[150px]  `}>
                  <div className='flex justify-center mb-3'>
                    <div className='w-[40px]'>
                      <Image src='/home/whatsapp2.svg' width={100} height={100} alt="WhatsApp" />
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center text-white'>
                    <p className='font-semibold text-[12px]'>{location.name}</p>
                    <h1 className='text-[18px] whitespace-nowrap font-semibold'>{location.area}</h1>
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
                <div key={index} style={{ backgroundColor: location.bgColor }} className={`${location?.bgColor} py-3 px-3 rounded-lg shadow-lg  select-none min-w-[270px]`}>
                <div className='flex flex-col justify-center items-center text-white mb-2'>
                    <h1 className='text-2xl font-semibold'>{location.area}</h1>
                    <p className='font-semibold text-sm'>{location.name}</p>
                  </div>
                  <div className='flex justify-center gap-6 mb-5'>
                    <div className='w-[48px] cursor-pointer' onClick={() => cardClick(location)}>
                      <Image src='/home/whatsapp2.svg' width={100} height={100} alt="WhatsApp" />
                    </div>
                    <div className='w-[48px] cursor-pointer'>
                      <a href={`tel:${location?.call}`}>
                        <img src='/home/call1.svg' width={100} height={100} alt='Call' />
                      </a>
                    </div>

                  </div>
                
                  <div className='flex justify-center '>
                   <button onClick={()=>router.push(`/clinicLocation/${location?.redirect}`)} className='text-white border-2 border-white flex gap-3 items-center px-4 py-2 rounded-lg hover:opacity-90 shadow-lg hover:shadow-none'>
                   Learn More 
                   <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><g data-name="Circle kanan"><path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" /><path d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z" /></g></svg>
                   </button>
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

  const MobileFooter2 = () => {

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
                <div key={index} style={{ backgroundColor: location.bgColor }} className={`${location?.bgColor} py-3 px-3 rounded-lg shadow-lg  select-none min-w-[190px]`}>

                  <div className='flex flex-col justify-center items-center mb-4 text-white'>
                    <h1 className='text-xl font-semibold'>{location.area}</h1>
                    <p className='font-semibold text-sm'>{location.name}</p>
                  </div>
                  <div className='flex justify-center gap-6 mb-3'>
                    <div className='w-[48px] cursor-pointer' onClick={() => cardClick(location)}>
                      <Image src='/home/whatsapp2.svg' width={100} height={100} alt="WhatsApp" />
                    </div>
                    <div className='w-[48px] cursor-pointer'>
                      <a href={`tel:${location?.call}`}>
                        <img src='/home/call1.svg' width={100} height={100} alt='Call' />
                      </a>
                    </div>

                  </div>
                  <div className='flex justify-center '>
                   <button onClick={()=>router.push(`/clinicLocation/${location?.redirect}`)} className='text-white border-2 border-white flex gap-3 items-center px-4 py-2 rounded-lg hover:opacity-90 shadow-lg hover:shadow-none'>
                   Learn More 
                   <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><g data-name="Circle kanan"><path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" /><path d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z" /></g></svg>
                   </button>
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
        <MobileFooter2 />
      </div>
      <div className='flex justify-center'>
        <p className='text-primary-orange text-center'>Copyright © 2024 MindfulTMS <br/> All rights reserved. Powered by InsideOut</p>
      </div>
    </footer>
  );
}

export default Footer;