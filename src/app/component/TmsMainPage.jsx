import { Container } from '@mui/material';
import React from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';

const TmsMainPage = () => {
    const fourConditions = [
        {
            _id: 2,
            name: "Obsessive-compulsive disorder"
        },
        {
            _id: 3,
            name: "Migraines"
        },
        {
            _id: 4,
            name: "Chronic pain"
        },
        {
            _id: 5,
            name: "Smoking cessation"
        },
        {
            _id: 1,
            name: "Major depressive disorder"
        },
    ];

    const allConditions = [
        {
            _id: 6,
            name: "Addictions"
        },
        {
            _id: 7,
            name: "Anxiety"
        },
        {
            _id: 8,
            name: "Alzheimer’s disease."
        },
        {
            _id: 9,
            name: "Bipolar disorder."
        },
        {
            _id: 11,
            name: "Eating disorders."
        },
        {
            _id: 12,
            name: "Essential tremor."
        },
        {
            _id: 13,
            name: "Fibromyalgia."
        },
        {
            _id: 14,
            name: "Parkinson’s disease."
        },
        {
            _id: 16,
            name: "Schizophrenia."
        },
        {
            _id: 17,
            name: "Stroke complications."
        },
        {
            _id: 18,
            name: "Tinnitus and auditory hallucinations."
        },
        {
            _id: 19,
            name: "Traumatic brain injury."
        },
        {
            _id: 10,
            name: "Borderline personality disorder (BPD)."
        },
        {
            _id: 15,
            name: "Post-traumatic stress disorder (PTSD)."
        },
    ];

    return (
        <div className="min-h-screen">
            <div className="">
                {/* TMS Introduction Section */}
                <div className=" p-6 lg:p-10 mb-10">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 sm:text-xl">
                        {`Transcranial Magnetic Stimulation (TMS)`}
                    </h3>
                    <div className="mb-5 md:h-[360px]">
                        <img src="/tmsPage/tms1.png" className="object-cover h-full" />
                    </div>
                    <p className="text-gray-700 text-md">
                        {`Transcranial magnetic stimulation (TMS) is a non-invasive treatment that involves using a magnetic coil to influence your brain’s natural electrical activity. This treatment sees widespread use for a variety of mental health and brain-related conditions.`}
                    </p>
                </div>

                {/* Is TMS for me Section */}
                <div className="bg-white bg-primary-div  px-4 py-8 lg:p-10 mb-10">
                    <h3 className="text-2xl text-center font-bold text-gray-800 mb-3 sm:text-xl">
                        {`Is TMS for me?`}
                    </h3>
                    <div className="mb-5 md:h-[360px]">
                        <img src="/tmsPage/tms2.png" className="object-cover h-full" />
                    </div>
                    <p className="text-gray-700 text-l sm:text-base">
                        {`TMS is often a treatment that can help when other treatment options are unsuccessful. It’s also an important option if you're considering a non-invasive option that does not involve medication. TMS can also offer an alternative to treatments that are riskier like electroconvulsive therapy (ECT).`}
                    </p>
                   <div className='flex justify-center mt-5'>
                   <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] hover:bg-orange-500 uppercase active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold "}/>
                   </div>
                </div>

                {/* Conditions Section */}
                <div className=" pb-10 px-4 ">
                    {/* FDA Approved Conditions */}
                    <div className='mb-10'>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4 leading-tight">
                            {`TMS has US FDA approval to treat four conditions:`}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3 ">
                            {fourConditions.map((condition) => (
                                <div
                                    key={condition.name}
                                    className="flex items-center bg-green-100 text-sm text-green-700 px-3 py-1.5 rounded-full "
                                >
                                    <span className='font-semibold'>{condition.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Off-label Conditions */}
                    <div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4 leading-tight">
                            {`In addition to the approved conditions, research is ongoing. Several off-label TMS treatments have been done to help with:`}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2 ">
                            {allConditions.map((condition) => (
                                <div
                                    key={condition.name}
                                    className="flex items-center  bg-green-100 text-sm text-green-700 px-3 py-1.5 rounded-full "
                                >
                                    <span className='font-semibold'>{condition.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Book Consultation Button */}
                    <div className='flex justify-center mt-5'>
                   <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"}/>
                   </div>
                </div>

                {/* How TMS Works Section */}
                <div className=" p-6 lg:p-10 mb-10 bg-primary-div">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                        {`How TMS Works`}
                    </h3>
                    <div className="space-y-4 mb-6">
                        <p className="text-gray-700 text-lg font-bold">
                            {`During a TMS treatment session:`}
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700 text-md">
                            <li className='mb-5'>
                               <strong>{`Setup:`}</strong> {` A healthcare professional places the TMS coil on your head, targeting the specific brain area based on your condition.`}
                            </li>
                            <li className='mb-5'>
                                 <strong>{`Sending Pulses:`}</strong>{` The coil sends magnetic pulses into your brain.`}
                            </li>
                            <li className='mb-5'>
                                <strong>{`Brain Stimulation:`}</strong> {` These pulses stimulate the neurons in the targeted area, helping to balance brain activity and improve your symptoms.`}
                            </li>
                            <li className='mb-5'>
                                <strong>{`Session Duration:`}</strong> {` Each session takes about 20-37 minutes, and you typically have treatments 5 days a week for 5-6 weeks.`}
                            </li>
                        </ul>
                    </div>
                    <div className="mb-5 md:h-[360px]">
                        <img src="/tmsPage/tms3.png" className="object-cover h-full" />
                    </div>
                    <p className='text-md'>{`There are two parts involved in the process: the TMS coil and the magnetic pulses protocol (or 'recipe') used.`}</p>
                </div>

                {/* TMS Coil Section */}
                <div className=" p-6 lg:p-10 mb-10 ">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
                        {`The TMS Coil`}
                    </h3>
                    <div className="space-y-4">
                        <ul className="list-decimal list-inside space-y-2 text-gray-700 text-md">
                            <li className='mb-5'>
                                <strong>{`Creates Magnetic Fields:`}</strong> {` The coil makes strong magnetic fields that are directed to specific parts of your brain that need treatment.`}
                            </li>
                            <li className='mb-5'>
                               <strong>{`Targets Specific Brain Areas:`}</strong>  {` The shape of the coil helps focus the magnetic fields on exact areas of your brain related to your condition (like depression, OCD, or anxiety).`}
                                <ul className="list-disc list-inside ml-4">
                                    <li>{`This precise targeting ensures the treatment is effective.`}</li>
                                </ul>
                            </li>
                            <div className="mb-5 md:h-[360px]">
                                <img src="/tmsPage/tms4.png" className="object-cover h-full" />
                            </div>
                            <li className='mb-5'>
                               <strong>{`Non-Invasive Application:`}</strong> 
                                <ul className="list-disc list-inside ml-4">
                                    <li>{`The coil is placed against your scalp near the area being treated.`}</li>
                                    <li>{`The treatment is done from outside your head.`}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Magnetic Pulses Section */}
                <div className=" p-6 lg:p-10 mb-10 bg-primary-div">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center ">
                        {`What Do the Magnetic Pulses Do?`}
                    </h3>
                    <p className="text-gray-700 text-md font-semibold  mb-4">
                        {`Magnetic pulses are what make TMS effective. Here's how they work:`}
                    </p>
                    <div className="space-y-6">
                        <ul className="list-decimal list-inside space-y-4 text-gray-700 text-md">
                            <li className='mb-5'> <strong>{`Stimulate Brain Cells:`}</strong>
                                {` The magnetic pulses help activate or regulate the brain cells (neurons) in those regions where the coil is targeted.`}
                                <div className="mb-5 md:h-[360px] mt-5">
                                    <img src="/tmsPage/tms5.png" className="object-cover h-full" />
                                </div>
                            </li>
                            <li className='mb-5'> <strong>{`Boost Brain Activity:`}</strong>
                                {` For conditions like Major Depressive Disorder (MDD), some brain areas may be less active. The pulses help increase activity in these areas, improving your mood.`}
                                <ul className="list-disc list-inside ml-4">
                                    <li>{`For Obsessive-Compulsive Disorder (OCD) or Generalized Anxiety Disorder (GAD), a different protocol (or recipe) is used where the pulses can calm down overactive brain areas, reducing anxiety and unwanted thoughts.`}</li>
                                </ul>
                                <div className="mb-5 md:h-[360px] mt-5">
                                    <img src="/tmsPage/tms6.png" className="object-cover h-full" />
                                </div>
                            </li>
                            <li className='mb-5'> <strong>{`Promote Brain Flexibility:`}</strong>
                                {` Your brain can change and adapt, a feature called neuroplasticity, but it takes time.`}
                                <ul className="list-disc list-inside ml-4">
                                    <li>{`By giving 25-30 sessions over 5-6 weeks, the magnetic pulses encourage your brain to form new, healthier connections and maintain them, which can help reduce symptoms of your condition.`}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center mt-5'>
                   <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"}/>
                   </div>
                </div>

               
            </div>
        </div>
    );
};

export default TmsMainPage;
