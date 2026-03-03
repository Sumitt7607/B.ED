import { useParams } from "react-router-dom";

const universityDetails = {
  central: {
    title: "Central Universities for B.Ed",
    description:
      "Central Universities are funded by the Government of India and offer affordable fee structure with high academic standards.",
   colleges: [
  {
    name: "University of Delhi",
    location: "Delhi",
    image: "https://www.educationworld.in/wp-content/uploads/2015/06/University-of-Delhi-North-Campus-Delhi.jpg",
    fees: "₹15,000 – ₹25,000 per year",
  },
  {
    name: "Banaras Hindu University",
    location: "Varanasi",
    image: "https://edge.ixigo.com/ixi-api/img/511a2cfce4b015f83687718b_600x315.jpg",
    fees: "₹20,000 – ₹30,000 per year",
  },
  {
    name: "Aligarh Muslim University",
    location: "Aligarh",
    image: "https://www.guidanceforever.org/wp-content/uploads/2023/10/aligarh-muslim-university-aligarh-featured-2.jpg",
    fees: "₹18,000 – ₹28,000 per year",
  },
  {
    name: "Jamia Millia Islamia",
    location: "Delhi",
    image: "https://kj1bcdn.b-cdn.net/media/64982/fghfgjf.jpg?width=1200",
    fees: "₹12,000 – ₹22,000 per year",
  },
  {
    name: "Jawaharlal Nehru University",
    location: "Delhi",
    image: "https://files.prokerala.com/news/photos/imgs/1024/jawaharlal-nehru-university-966893.jpg",
    fees: "₹10,000 – ₹20,000 per year",
  },
  {
    name: "University of Hyderabad",
    location: "Hyderabad",
    image: "https://tse3.mm.bing.net/th/id/OIP.ngYDhbAl-cr9NwWGqx98ygHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
    fees: "₹15,000 – ₹30,000 per year",
  },
  {
    name: "Pondicherry University",
    location: "Puducherry",
    image: "https://img.jagranjosh.com/images/2022/December/28122022/Pondicherry-University-Puducherry-Campus-View-2.png",
    fees: "₹18,000 – ₹35,000 per year",
  },
  {
    name: "Visva-Bharati University",
    location: "West Bengal",
    image: "https://tse4.mm.bing.net/th/id/OIP.REkTyQAiHUzY7oxFMOBITAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    fees: "₹12,000 – ₹25,000 per year",
  },
  {
    name: "North Eastern Hill University",
    location: "Shillong",
    image: "https://www.vidyavision.com/CollegeUploads/Photos/2022-11-1-17-59-30_NEHU1.jpg",
    fees: "₹10,000 – ₹22,000 per year",
  },
  {
    name: "Central University of Rajasthan",
    location: "Ajmer",
    image: "https://www.targetadmission.com/img/colleges/newc/50322-212486.jpg",
    fees: "₹18,000 – ₹40,000 per year",
  },
  {
    name: "Central University of Punjab",
    location: "Bathinda",
    image: "https://img.studyclap.com/img/institute/college/773x343/1386/1386_1cup1.png",
    fees: "₹20,000 – ₹35,000 per year",
  },
  {
    name: "Central University of Haryana",
    location: "Mahendragarh",
    image: "https://th.bing.com/th/id/OIP.1hW03DAwCqHluZZkZXwrbQHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    fees: "₹15,000 – ₹30,000 per year",
  },

  {
    name: "Central University of Kerala",
    location: "Kasaragod",
    image: "https://edufever.in/colleges/wp-content/uploads/2024/11/Central-University-of-Kerala.webp ",
    fees: "₹18,000 – ₹32,000 per year",
  },
  {
    name: "Central University of Tamil Nadu",
    location: "Thiruvarur",
    image: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/videos/2023/8/campus11221404148037.jpg ",
    fees: "₹20,000 – ₹38,000 per year",
  },
  {
    name: "Central University of Karnataka",
    location: "Kalaburagi",
    image: " https://th.bing.com/th/id/R.0f0691df9a1280d91dabac8771739ff6?rik=1uHXLQbfOteCpg&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f02%2f04%2f28%2f66_big.jpg&ehk=oX6Ibvdmeu66spCg3nEXMzEgv3ZfIz3NzmalLZTSr3g%3d&risl=&pid=ImgRaw&r=0",
    fees: "₹18,000 – ₹30,000 per year",
  },
  {
    name: "Central University of South Bihar",
    location: "Gaya",
    image: "https://edufever.in/colleges/wp-content/uploads/2024/12/Central-University-of-South-Bihar.webp ",
    fees: "₹15,000 – ₹28,000 per year",
  },
  {
    name: "Central University of Gujarat",
    location: "Gandhinagar",
    image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/09/19/733001-central-university-of-gujarat.jpg ",
    fees: "₹18,000 – ₹35,000 per year",
  },
  {
    name: "Central University of Jharkhand",
    location: "Ranchi",
    image: "https://media.getmyuni.com/azure/college-image/big/central-university-of-jharkhand-cuj-ranchi.webp ",
    fees: "₹12,000 – ₹25,000 per year",
  },
  {
    name: "Central University of Himachal Pradesh",
    location: "Dharamshala",
    image: "https://cuhimachal.ac.in/asset/images/abt.jpeg ",
    fees: "₹15,000 – ₹28,000 per year",
  },
  {
    name: "Central University of Odisha",
    location: "Koraput",
    image: "https://cuo.ac.in/Events-Images/77.jpg ",
    fees: "₹10,000 – ₹22,000 per year",
  },
{
  name: "Dr. Harisingh Gour Vishwavidyalaya",
  location: "Sagar, Madhya Pradesh",
  image: " https://www.vidyavision.com/CollegeUploads/Photos/2022-04-4-15-55-21_VIT%2015%20P.jpg ",
  fees: "₹15,000 – ₹30,000 per year",
},
{
  name: "Hemvati Nandan Bahuguna Garhwal University",
  location: "Srinagar, Uttarakhand",
  image: "https://tse1.mm.bing.net/th/id/OIP.T92pMWttOrmTpCbWnygZYgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹12,000 – ₹28,000 per year",
},
{
  name: "Indira Gandhi National Tribal University",
  location: "Amarkantak, MP",
  image: "https://tse2.mm.bing.net/th/id/OIP.6pNQPu_JZmqj-Q3PK0gpRwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹10,000 – ₹22,000 per year",
},
{
  name: "Mahatma Gandhi Central University",
  location: "Motihari, Bihar",
  image: " https://i0.wp.com/skilloutlook.com/wp-content/uploads/2021/08/Mahatma-Gandhi-Central-university-02-Aug-2021.jpg?fit=1500%2C500&ssl=1",
  fees: "₹18,000 – ₹35,000 per year",
},
{
  name: "Rajiv Gandhi University",
  location: "Itanagar, Arunachal Pradesh",
  image: " https://edufever.in/colleges/wp-content/uploads/2024/11/Rajiv-Gandhi-University-6.webp",
  fees: "₹15,000 – ₹30,000 per year",
},
{
  name: "Sikkim University",
  location: "Gangtok",
  image: "https://images.shiksha.com/mediadata/images/1623848614phpG9MBaT_1280x960.jpg ",
  fees: "₹12,000 – ₹25,000 per year",
},
{
  name: "Tripura University",
  location: "Agartala",
  image: "https://th.bing.com/th/id/OIP.60P12mpfN-d9uJMYCeJl2QHaD8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹10,000 – ₹22,000 per year",
},
{
  name: "Tezpur University",
  location: "Assam",
  image: "https://tse1.mm.bing.net/th/id/OIP.ZT4CdPQDkzQ8BpxIX37-8gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹18,000 – ₹32,000 per year",
},
{
  name: "Maulana Azad National Urdu University",
  location: "Hyderabad",
  image: "https://img.studyclap.com/img/institute/university/original/5217/manuu-hyderabad-d348eed1cc.jpg ",
  fees: "₹8,000 – ₹18,000 per year",
},
{
  name: "National Sanskrit University",
  location: "Tirupati",
  image: "https://www.collegeadmission.in/uploads/university/banner_image/national-sanskrit-university-nsu-tirupati-83.jpg ",
  fees: "₹6,000 – ₹15,000 per year",
},
{
  name: "Shri Lal Bahadur Shastri National Sanskrit University",
  location: "Delhi",
  image: "https://www.slbsrsv.ac.in/sites/default/files/styles/slider_880_317/public/SLBSNSU%20Front%20Picture.jpg?itok=cTu_llrv ",
  fees: "₹8,000 – ₹18,000 per year",
},
{
  name: "Central Sanskrit University",
  location: "Delhi",
  image: "https://th.bing.com/th/id/OIP.iInkyas0IPjWgF5P3ejEmgHaC7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹7,000 – ₹16,000 per year",
},
{
  name: "Guru Ghasidas Vishwavidyalaya",
  location: "Bilaspur, Chhattisgarh",
  image: "https://th.bing.com/th/id/OIP.17VCpW8v4iov6X6P_wAMrAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹15,000 – ₹28,000 per year",
},
{
  name: "Babasaheb Bhimrao Ambedkar University",
  location: "Lucknow",
  image: "https://images.shiksha.com/mediadata/images/1491299799phpR3HMtG_g.png ",
  fees: "₹12,000 – ₹25,000 per year",
},
{
  name: "Central University of Andhra Pradesh",
  location: "Anantapur",
  image: "https://edufever.in/colleges/wp-content/uploads/2024/11/Central-University-of-Andhra-Pradesh.webp ",
  fees: "₹5,000 – ₹30,000 per year",
},


]

  },

  state: {
    title: "State Universities for B.Ed",
    description:
      "State Universities are operated by state governments and provide affordable education.",
    colleges: [
      {
        name: "Chaudhary Charan Singh University",
        location: "Meerut",
        image:
          "https://www.edufever.com/wp-content/uploads/2017/10/Chaudary-Charan-Singh-University-Meerut.jpg",
        fees: "₹35,000 – ₹60,000 per year",
      },
      {
        name: "Lucknow University",
        location: "Lucknow",
        image:
          "https://th.bing.com/th/id/OIP.CAd5Yy_4LTRxLwVvAYn90AHaEw?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        fees: "₹40,000 – ₹70,000 per year",
      },
      {
        name: "Rajasthan University",
        location: "Jaipur",
        image:
          "https://media.getmyuni.com/azure/college-images-test/university-of-rajasthan-ur-jaipur/ce56a652c9ef42aab955ad93d96447f7.jpeg",
        fees: "₹30,000 – ₹55,000 per year",
      },
      {
        name: "Mumbai University",
        location: "Mumbai",
        image:
          "https://media.getmyuni.com/azure/college-image/big/university-of-mumbai-um-mumbai.jpg",
        fees: "₹45,000 – ₹75,000 per year",
      },
      {
  name: "Osmania University",
  location: "Hyderabad, Telangana",
  image: "https://tse3.mm.bing.net/th/id/OIP.bzvaR0B1ZSw-L4ifuPXxQAHaEG?rs=1&pid=ImgDetMain&o=7&rm=3",
  fees: "₹35,000 – ₹60,000 per year",
},
{
  name: "Andhra University",
  location: "Visakhapatnam, Andhra Pradesh",
  image: "https://thumbs.dreamstime.com/b/andhra-university-college-sciences-historic-89342630.jpg",
  fees: "₹30,000 – ₹55,000 per year",
},
{
  name: "Anna University",
  location: "Chennai, Tamil Nadu",
  image: "https://mettasurendhar.github.io/anna_univ/images/slide1.jpeg",
  fees: "₹40,000 – ₹70,000 per year",
},
{
  name: "University of Calcutta",
  location: "Kolkata, West Bengal",
  image: "https://th.bing.com/th/id/OIP.ehn4xDcpmY_7qe4rfktAswHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹25,000 – ₹50,000 per year",
},
{
  name: "Bangalore University",
  location: "Bengaluru, Karnataka",
  image: "https://tse4.mm.bing.net/th/id/OIP.mOyjUThN7qjvKL4rQE8dAgHaFA?w=538&h=364&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹35,000 – ₹65,000 per year",
},
{
  name: "University of Madras",
  location: "Chennai, Tamil Nadu",
  image: "https://i.pinimg.com/originals/83/28/e9/8328e9934092e9b4808afee04cc3bd2f.jpg ",
  fees: "₹30,000 – ₹60,000 per year",
},
{
  name: "Panjab University",
  location: "Chandigarh",
  image:  "https://tse2.mm.bing.net/th/id/OIP.GSDLjR8IZh7OfQ8g_VwwKwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹40,000 – ₹75,000 per year",
},
{
  name: "Gujarat University",
  location: "Ahmedabad, Gujarat",
  image: "https://leavestranscript.com/wp-content/uploads/2020/08/Gujarat-University-.jpg ",
  fees: "₹35,000 – ₹65,000 per year",
},
{
  name: "Savitribai Phule Pune University",
  location: "Pune, Maharashtra",
  image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_Qb4iWy_cEH.webp?tr=w-3840 ",
  fees: "₹40,000 – ₹75,000 per year",
},
{
  name: "Dr. B. R. Ambedkar University",
  location: "Agra, Uttar Pradesh",
  image: " https://alchetron.com/cdn/dr-b-r-ambedkar-university-afe83c64-daf1-4ce4-a6fc-9808ede8823-resize-750.jpg ",
  fees: "₹30,000 – ₹55,000 per year",
},
{
  name: "Kurukshetra University",
  location: "Kurukshetra, Haryana",
  image: " https://distanceeducationschool.com/wp-content/uploads/2024/12/kurukshetra-university-page.webp ",
  fees: "₹35,000 – ₹60,000 per year",
},
{
  name: "Maharshi Dayanand University",
  location: "Rohtak, Haryana",
  image: "https://tse1.mm.bing.net/th/id/OIP.8J2mdgyeTAZ43qhtmZjd1AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  fees: "₹35,000 – ₹60,000 per year",
},
{
  name: "University of Kashmir",
  location: "Srinagar, Jammu & Kashmir",
  image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/University-of-Kashmir-_Srinagar-_Jammu-and-Kashmir_HWlB2A8Io.webp?tr=w-3840 ",
  fees: "₹25,000 – ₹50,000 per year",
},
{
  name: "University of Jammu",
  location: "Jammu",
  image: "https://tse4.mm.bing.net/th/id/OIP.YVen3H3wSJb3D9YMe4R2sQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3  ",
  fees: "₹30,000 – ₹55,000 per year",
},
{
  name: "Patna University",
  location: "Patna, Bihar",
  image: "https://tse1.mm.bing.net/th/id/OIP.v-LEsUOjUdAjgVN20mr6BAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3  ",
  fees: "₹20,000 – ₹45,000 per year",
},
{
  name: "Ranchi University",
  location: "Ranchi, Jharkhand",
  image: "https://tse1.mm.bing.net/th/id/OIP.JRyP-YJKAl7AuKrwQh6LfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹25,000 – ₹50,000 per year",
},
{
  name: "Utkal University",
  location: "Bhubaneswar, Odisha",
  image: "https://utkaluniversity.ac.in/wp-content/uploads/2021/04/s-image-22.jpg ",
  fees: "₹25,000 – ₹50,000 per year",
},
{
  name: "Jadavpur University",
  location: "Kolkata, West Bengal",
  image: "https://studyatuniversity.com/wp-content/uploads/2023/12/Jadavpur-University-In-India.jpg ",
  fees: "₹30,000 – ₹60,000 per year",
},
{
  name: "Himachal Pradesh University",
  location: "Shimla, Himachal Pradesh",
  image: "https://th.bing.com/th/id/OIP.JcQ92siwOJ9IM5-J9UFQ1AHaEH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹25,000 – ₹45,000 per year",
},
{
  name: "Goa University",
  location: "Goa",
  image: "https://tse3.mm.bing.net/th/id/OIP.yaKM1t7Dy6NJM0OcxgriKgHaEn?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹35,000 – ₹60,000 per year",
},
    ],
  },
  deemed: {
  title: "Deemed Universities for B.Ed",
  description:
    "Deemed Universities are autonomous institutions recognized by UGC and offer quality education with modern infrastructure.",
  colleges: [
    {
      name: "Jamia Hamdard",
      location: "New Delhi",
      image:
        "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20231216125311.jpg",
      fees: "₹60,000 – ₹1,00,000 per year",
    },
    {
  name: "Amity University",
  location: "Noida, Uttar Pradesh",
  image: "https://tse2.mm.bing.net/th/id/OIP.9_23dmhF5kEoY8dlbr2lqAHaDO?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹1,00,000 – ₹1,80,000 per year",
},
{
  name: "Lovely Professional University (LPU)",
  location: "Phagwara, Punjab",
  image: "https://happenings.lpu.in/wp-content/uploads/2024/09/Lovely-Professional-University-LPU-campus-1-scaled.jpg ",
  fees: "₹90,000 – ₹1,60,000 per year",
},
{
  name: "Manipal Academy of Higher Education",
  location: "Manipal, Karnataka",
  image: "https://tse2.mm.bing.net/th/id/OIP.G87mBvtB5GlrGNRvdpWu1QHaE-?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹1,00,000 – ₹1,70,000 per year",
},
{
  name: "Shiv Nadar University",
  location: "Greater Noida, Uttar Pradesh",
  image: "https://tse4.mm.bing.net/th/id/OIP.Wq0WzvguzB_xPtFf34WwRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹1,20,000 – ₹2,00,000 per year",
},
{
  name: "Bharath Institute of Higher Education and Research",
  location: "Chennai, Tamil Nadu",
  image: "https://leavestranscript.com/wp-content/uploads/2020/07/Bharath-Institute-of-Higher-Education-and-Research-University.jpg ",
  fees: "₹80,000 – ₹1,50,000 per year",
},
{
  name: "SRM Institute of Science and Technology",
  location: "Chennai, Tamil Nadu",
  image: "https://tse2.mm.bing.net/th/id/OIP.3cSAsaHnWP8d6s-8vw881QHaDv?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹90,000 – ₹1,60,000 per year",
},
    {
      name: "Tata Institute of Social Sciences (TISS)",
      location: "Mumbai",
      image:
        "https://ik.imagekit.io/syustaging/SYU_PREPROD/Tata-Institute-of-Social-Sciences---_TISS_-_Mumbai-_Maharashtra_nwgiw5M8Vz.webp?tr=w-3840 ",
      fees: "₹70,000 – ₹1,20,000 per year",
    },
    {
      name: "GITAM University",
      location: "Visakhapatnam",
      image:
        "https://cache.careers360.mobi/media/article_images/2023/3/18/feature-image-gitam-university.jpg ",
      fees: "₹80,000 – ₹1,50,000 per year",
    },
    {
      name: "Banasthali Vidyapith",
      location: "Rajasthan",
      image:
        "https://th.bing.com/th/id/OIP.Mk41BJ57X_Q2hpQCfHASZgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
      fees: "₹90,000 – ₹1,40,000 per year",
    },
  ],
  
},
 private: {
    title: "Private Universities & B.Ed Colleges",
    description:
      "Private Universities and Colleges offering B.Ed programs.",
    colleges: [
      {
        name: "Sharda University",
        location: "Greater Noida, UP",
        image: "https://wedubd.com/wp-content/uploads/2025/03/Sharda-university.jpg",
        fees: "₹90,000 – ₹1,50,000 per year",
      },
      {
        name: "Amity University",
        location: "Noida, UP",
        image: "https://th.bing.com/th/id/OIP.9_23dmhF5kEoY8dlbr2lqAHaDO?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
        fees: "₹1,00,000 – ₹1,80,000 per year",
      },
      {
  name: "Galgotias University",
  location: "Greater Noida, UP",
  image: "https://th.bing.com/th/id/OIP.n66yJcymgPFRSYZC-DromAHaD1?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  fees: "₹70,000 – ₹1,20,000 per year",
},
{
  name: "Chandigarh University",
  location: "Punjab",
  image: "https://th.bing.com/th/id/OIP.2KY69mhwQEzThOcXiaTIewHaD4?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹80,000 – ₹1,40,000 per year",
},
{
  name: "Lovely Professional University (LPU)",
  location: "Punjab",
  image: "https://tse3.mm.bing.net/th/id/OIP.qtkxVk86M1U0rlFQt_-ZRgHaEV?rs=1&pid=ImgDetMain&o=7&rm=3",
  fees: "₹90,000 – ₹1,60,000 per year",
},
{
  name: "Parul University",
  location: "Vadodara, Gujarat",
  image: "https://tse1.mm.bing.net/th/id/OIP.DsyCk3IOv6UNw3NDwm_XfQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹60,000 – ₹1,10,000 per year",
},
{
  name: "UPES",
  location: "Dehradun, Uttarakhand",
  image: "https://tse4.mm.bing.net/th/id/OIP.AamV6XorooQviE4xprSoDQHaEA?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹1,00,000 – ₹1,80,000 per year",
},
{
  name: "SRM University",
  location: "Chennai, Tamil Nadu",
  image: "https://cdn1.byjus.com/wp-content/uploads/2018/11/jee/2016/08/04084239/Srm-university.png ",
  fees: "₹90,000 – ₹1,60,000 per year",
},
{
  name: "KIIT University",
  location: "Bhubaneswar, Odisha",
  image: "https://tse3.mm.bing.net/th/id/OIP.9GhNT-P3c0XobYjU3oOTmQHaEC?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹90,000 – ₹1,60,000 per year",
},
{
  name: "Amrita Vishwa Vidyapeetham",
  location: "Tamil Nadu",
  image: "https://images.shiksha.com/mediadata/images/articles/1587994716phpmjYKDq.jpeg ",
  fees: "₹1,00,000 – ₹1,80,000 per year",
},
{
  name: "Graphic Era University",
  location: "Dehradun",
  image: "https://th.bing.com/th/id/OIP.SfZL6VwxINNiLbGNVNqwBgHaE0?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹75,000 – ₹1,30,000 per year",
},
{
  name: "Bennett University",
  location: "Greater Noida, UP",
  image: "https://static.toiimg.com/photo/53631863.cms?imgsize=122060",
  fees: "₹1,20,000 – ₹2,00,000 per year",
},

// 🔵 Affiliated Private B.Ed Colleges
{
  name: "Rama College of Education",
  location: "Kanpur, UP",
  image: "https://tse1.mm.bing.net/th/id/OIP.rUmD9TJRC98r5cyFiPFVeQHaDd?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹50,000 – ₹80,000 per year",
},
{
  name: "Modern College of Education",
  location: "Pune, Maharashtra",
  image: "https://moderneducationcollege.com/images/about-person.jpg ",
  fees: "₹45,000 – ₹75,000 per year",
},
{
  name: "Arya College of Education",
  location: "Jaipur, Rajasthan",
  image: "https://aryacollegeharyana.com/images/default.jpg ",
  fees: "₹40,000 – ₹70,000 per year",
},
{
  name: "St. Soldier College of Education",
  location: "Punjab",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11113/2019/3/28/College%20Building%20of%20St%20Soldier%20College%20of%20Education%20Jalandhar_Campus-View.jpg ",
  fees: "₹50,000 – ₹85,000 per year",
},
{
  name: "Saraswati College of Education",
  location: "Haryana",
  image: "https://static.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/7789/2019/4/3/Buliding%20of%20Saraswati%20College%20Shegaon_Campus-View.png ",
  fees: "₹45,000 – ₹75,000 per year",
},
{
  name: "Delhi Institute of Advanced Studies",
  location: "Delhi",
  image:"https://tse2.mm.bing.net/th/id/OIP.rsO4zYWA4osF1H_BaDm-5QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹60,000 – ₹90,000 per year",
},
{
  name: "Ganga Institute of Education",
  location: "Haryana",
  image: " https://tse4.mm.bing.net/th/id/OIP.-Dgo4yw3hwdJrxwo0eazvgHaCi?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹50,000 – ₹85,000 per year",
},



{
  name: "Maharaja College of Education",
  location: "Uttarakhand",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/15670/2020/2/18/Campus%20View%20of%20Maharajas%20College%20Mysore_Campus-View.jpg ",
  fees: "₹45,000 – ₹80,000 per year",
},
{
  name: "Sunrise College of Education",
  location: "Alwar, Rajasthan",
  image: "https://sunrisecollege.ac.in/public/img/images/og-image.jpg ",
  fees: "₹50,000 – ₹85,000 per year",
},
{
  name: "Vivekananda College of Education",
  location: "Karnataka",
  image: "https://th.bing.com/th/id/OIP.bYtu86by8250uqiY01BT2QHaDV?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹40,000 – ₹70,000 per year",
},
{
  name: "Gurukul College of Education",
  location: "Maharashtra",
  image: "https://tse1.mm.bing.net/th/id/OIP.ETFh4H7Ge8KG7YBXJ1KyjAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3 ",
  fees: "₹40,000 – ₹70,000 per year",
},
    ],
  },


};

const UniversityDetail = () => {
  const { slug } = useParams();
  const university = universityDetails[slug];

  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">University Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen section-padding bg-background">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-gradient-saffron text-center">
          {university.title}
        </h1>

        <p className="text-lg text-muted-foreground mb-10 text-center">
          {university.description}
        </p>

        {/* 4 Cards Per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {university.colleges.map((college, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Image Cover */}
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  {college.name}
                </h3>

                <p className="text-sm mb-1">
                  <strong>Location:</strong> {college.location}
                </p>

                <p className="text-sm">
                  <strong>Fees:</strong> {college.fees}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UniversityDetail;