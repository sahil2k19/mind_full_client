// "use client"
import React from 'react'
import ImageGallary from './ImageGallary';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
// import PractoWidget from './PractoWidget';
import RequestAppointment from './RequestAppointment';
import ClinicAddress from './ClinicAddress';
import ClinicLocationDoctors from '@/app/component/ClinicLocationDoctors';

const MobileComponent = ({ data, images, city }) => {
    

    return (
        <div className='px-4 py-3'>
            <div className='mb-6'>
                <h1 className='text-2xl text-primary-orange text-center font-[700]'>{data?.addressTitle}</h1>
            </div>

            <div className='mb-8'>
                <ImageGallary images={images} />
            </div>

           <div className='mb-11'>
            <ClinicLocationDoctors city={city}/>
           </div>

            <div className='mb-11'>
                <RequestAppointment city={city} />
            </div>
            <div className='mb-11'>
                <ClinicAddress images={images} data={data} />
            </div>

         
        </div>
    );
}

export default MobileComponent;

