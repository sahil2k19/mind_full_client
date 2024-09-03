import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HomePage from '@/app/component/HomePage'
import axios from 'axios';
import {HomePageSections} from "@/example"

// const currentSection = {
//     heroSection: {
//         banner: "/home/banner01.png",
//         title: "You Deserve to Feel Better ",
//         para: `Get the best care from our experienced psychologists, TMS experts and psychiatrists for help with depression,OCD and more.
// With empathy and confidence, our professionals will guide you through every challenge.`,
//         button: {
//             text: "SCHEDULE CONSULTATION",
//             link: "/consultation/location",
//         }
//     },
//     section2: {
//         para1: `Not sure what you need?`,
//         para2: `These tests can help identify
// what you may have and need`,
//         para2: `Take a FREE TEST to identify your symptoms`,
//         html1: `
        

//                     <h1 class='text-2xl text-center text-gray-800'>
//                         Take a <span class="font-semibold">FREE TEST</span> to identify your symptoms
//                     </h1>`,
//         button: {
//             text: "FREE TEST",
//             link: "/assesment",
//         }
//     },
//     section3: {
//         title: "TMS Treatment",
//         para1: `A new approach to treat depression, anxiety, OCD and more.`,
//         box: {
//             banner: "/home/doctor.png",
//             para: `<p class='font-bold mb-3 text-gray-700 text-md'>NON-INVASIVE</p>
//                     <p class='font-bold mb-3 text-gray-700 text-md'>NO MEDICATION</p>
//                     <p class='font-bold mb-3 text-gray-700 text-md'>SAFE</p>
//                     <p class='font-bold mb-3 text-gray-700 text-md'>US FDA Approved</p>`
//         },
//         para2: `<p style="font-size: 15px; color: #3A3A3A; text-align: center">At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.</p>

//         <p style="font-size: 15px; color: #3A3A3A; text-align: center">Is TMS for me? Learn how it works and if it is the right option for you. </p>`,
//         button: {
//             text: "MORE ABOUT TMS",
//             link: "/pages/tmsPage",
//         }

//     },
//     section4:{
//         header:`<h1 class='text-2xl font-[30px] text-center '>
//                     Why choose <span class='font-semibold'>MindfulTMS?</span>
//                 </h1>`,
//         para:`<p class='text-center'>
//                     Your well being is our mission.
//                 </p>`,
//         services:[
//             {
//                 icon:'/home/medical.svg',
//                 text:'Personalized care',
//             },
//             {
//                 icon:'/home/handshake.svg',
//                 text:'Trust',
//             },
//             {
//                 icon:'/home/group.svg',
//                 text:'Safe',
//             },
//             {
//                 icon:'/home/heart.svg',
//                 text:'Holistic',
//             },
//         ]
//     },
//     section5:{
//         header:'Services we offer',
//         services:[
//             {
//                 array:[
//                     {
//                         img:"",
//                         name:'Therapy (Psychology)',
//                     },
//                     {
//                         img:"",
//                         name:'Psychiatry ',
//                     },
//                     {
//                         img:"",
//                         name:'Assessments',
//                     },
//                     {
//                         img:"",
//                         name:'TMS',
//                     },
//                 ],
//                 button:{
//                     text:'LEARN MORE',
//                     link:'/services/Therapy Services'
//                 }
//             }, 
//         ]
//     },
//     section6:{
//         header:'Our Locations',
//         para:`Lorem ipsum dolor sit amet`,
//         locations:[
//            {
//             title:'Bangalore',
//             locationArray:[
//                 {
//                     title:"Aster CMI",
//                     address:"Bangalore North",
//                 },
//                 {
//                     title:"Whitefield",
//                     address:"Bangalore East",
//                 },
//             ]
//            },
//            {
//             title:'Delhi',
//             locationArray:[
//                 {
//                     title:"Greater Kailash",
//                     address:"Delhi",
//                 },
                
//             ]
//            },
//         ]
//     },
//     section7:{
//         header:'Our Experts',
//         expertArray:[
//             {
//                 img:'/home/doctor1.png',
//                 name:'Dr.Sheela Rao',
//                 desig:'Clinical Psychologist',
//                 location:'Bangalore',
//             },
//             {
//                 img:'/home/doctor1.png',
//                 name:'Dr.Sheela Rao',
//                 desig:'Clinical Psychologist',
//                 location:'Bangalore',
//             },
//             {
//                 img:'/home/doctor1.png',
//                 name:'Dr.Sheela Rao',
//                 desig:'Clinical Psychologist',
//                 location:'Bangalore',
//             },
//             {
//                 img:'/home/doctor1.png',
//                 name:'Dr.Sheela Rao',
//                 desig:'Clinical Psychologist',
//                 location:'Bangalore',
//             },
//             {
//                 img:'/home/doctor1.png',
//                 name:'Dr.Sheela Rao',
//                 desig:'Clinical Psychologist',
//                 location:'Bangalore',
//             },
//             {
//                 img:'/home/doctor1.png',
//                 name:'Dr.Sheela Rao',
//                 desig:'Clinical Psychologist',
//                 location:'Bangalore',
//             },
         
//         ]
//     }
// }
const currentSection = HomePageSections;
export default async function Home() {

    let allSection = {};
  
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}homeSection/getHomeSection`);
      allSection = res.data;
    } catch (error) {
      console.error('Failed to fetch home section data:', error);
      // You can also handle what to render in case of an error
    }

  return (
   <>
    <HomePage allSection={currentSection} />
   </>
  );
}
