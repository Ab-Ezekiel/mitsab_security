import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail, MdReportProblem, MdSupportAgent } from "react-icons/md";
import { FaYoutube,FaInstagram, FaEye, FaShieldAlt, FaUserShield, FaFileAlt, FaExclamationTriangle, FaUsers, FaGavel, FaVideo, FaTools, FaSearch, FaHome, FaLock} from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";




import { 
         member1, member2, member3, member4,building_5,building_6,
         rusal_logo, nepn_logo, frontier_logo, oando_logo, alscon_logo,
       
        fireservice,
       
        fireservice2,
        fireservice6,
        fireservice5,
        fireservice4,
        fireservice3,
        security,
        security2,
        security3} from "./assets";


export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    
    {name:"Team",id:'team'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];


export const services = [
  {
    name: "Surveillance & Monitoring",
    icon: <FaEye />,
    description: `Our trained security personnel actively observe, report,
      and respond to alarms while investigating disturbances
      to ensure the safety of our clients' premises.`,
  },
  {
    name: "Patrol Services",
    icon: <FaShieldAlt />,
    description: `We conduct regular patrols of industrial and commercial
      sites to prevent and detect signs of intrusion, ensuring the
      security of all access points, including doors, windows,
      and gates.`,
  },
  {
    name: "Access Control",
    icon: <FaLock />,
    description: `Our team monitors and regulates access to authorized
      personnel only, managing the movement of employees
      and visitors to mitigate risks of theft and ensure overall
      security.`,
  },
  {
    name: "Incident Reporting",
    icon: <FaFileAlt />,
    description: `We maintain detailed reports of daily activities and
      irregularities, documenting instances of equipment
      damage, theft, unauthorized individuals, and unusual
      occurrences.`,
  },
  {
    name: "Emergency Response",
    icon: <FaExclamationTriangle />,
    description: `In the event of emergencies such as fires or unauthorized
      presence, we are equipped to contact relevant
      authorities promptly.`,
  },
  {
    name: "Public Safety",
    icon: <FaUsers />,
    description: `Our security personnel engage with visitors, patrons, and
      employees to preserve order and safety while
      protecting property.`,
  },
  {
    name: "Rule Enforcement",
    icon: <FaGavel />,
    description: `We take proactive measures to address rule infractions,
      utilizing appropriate force when necessary to
      apprehend or evict violators.`,
  },

  {
  name: "Security Screening",
  icon: <FaSearch />,
  description: `Utilizing advanced detection devices, we screen individuals 
    to prevent the entry of prohibited items into restricted areas.`,
},
{
  name: "Personal Protection",
  icon: <FaUserShield />,
  description: `Our trained professionals can operate motor vehicles to 
    transport individuals to specified locations while providing personal protection as needed.`,
},
{
  name: "Technical Support",
  icon: <FaTools />,
  description: `Our in-house technical department swiftly addresses technical issues, 
    performing thorough assessments of security systems and recommending enhancements 
    to ensure optimal protection for our clients.`,
},
{
  name: "Surveillance Services",
  icon: <FaVideo />,
  description: `We provide comprehensive surveillance solutions, including Rights of Way (RoW) 
    surveys and monitoring tailored to client specifications.`,
},
{
  name: "Residential & Commercial Protection",
  icon: <FaHome />,
  description: `Our suite of services extends to homes and offices, offering robust monitoring 
    and protection measures to safeguard our clients' assets.`,
}

];


export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"",
    image:fireservice,
    description:``,
  },
  {
     title:"",
    image:fireservice2,
    description:``,
  },
  {
    title:"",
    image:fireservice3,
    description:``,
  },
  {
    title:"",
    image:fireservice4,
    description:``,
  },
  {
    title:"",
    image:fireservice5,
    description:``,
  },
  {
   title:"",
    image:fireservice6,
    description:``,
  },
];



export const testimonial = [
  {
    icon: <FaUserShield />,
    title: "Experienced Professionals",
    
      review:"A dedicated team of experienced professionals committed to safety and security.",
  },
  {
    icon: <FaUserShield />,
    title: "Tailored Security Solutions",
    
    review:"Comprehensive security solutions tailored to specific client needs.",
  },
  {
    icon: <FaUserShield />,
    title: "Rapid Incident Response",
    
    review:"Quick and efficient responses to incidents and technical issues.",
  },
  {
    icon: <FaUserShield />,
    title: "24/7 Support & Maintenance",
    
    review:"Ongoing support and maintenance for all deployed security systems.",
  },
  
  

];


export const blogs = [
  {
      title:"Cutting-Edge Technologies Revolutionizing Modern Surveillance Systems",
      image:security,
      category:"Safety and Sustainabilty",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"The Importance of Precision and Readiness in Security Operations",
      image:security2,
      category:"Precision",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"AI-Powered Surveillance: Enhancing Real-Time Threat Detection and Response",
      image: security3,
      category:"Technology",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
  
];



export const contacts = [
 {
    name:"Email",
    value1:"mit-sabresources@outlook.com",
    value2:"info@mitsabresourcesglobal.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value1:"+2348023851800",
    value2:"+2347067912527",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value1:"REGISTERED OFFICE:89 University Road,Use Offot, Nwaniba Road, Uyo,Akwa Ibom State,Nigeria",
    value2:"OPERATIONAL OFFICE: 35 Terminal Jetty Road, Inua Eyet Ikot, Ibeno L.G.A, Akwa Ibom State,Nigeria",
    icon:<IoLocationOutline/>,
  },
]



export const footer = [
    {
      name:"Explore",
      routes:[
        { name: "Privacy Policy", id: "privacy" },
        { name: "Terms and Conditions", id: "terms" },
        { name: "Cookie Policy", id: "cookies" },
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


