import EcoSwapProject from "../assets/Eco-swap-project.png";
import FaceSearch from "../assets/face-search.png";
import PortfolioImg from "../assets/portfolio-img.png";
import AiInterview from "../assets/ai-interview.png";
import TallyIntegration from "../assets/TallyIntegrationProject/TallyIntegration.png";
import ReplyWiseProject from "../assets/ReplyWiseProject/ReplyWiseAI.png";
import NeuralNook from "../assets/NeuralNookProject/NeuralNook.png";
import RakshaBandhan from "../assets/RakshaBandhanWebsite/RakshaBandhanWebsite.png";
import JobPortal from "../assets/JobPortalApp/JobPortalWeb.png";

 const projects = [

    {
    title: 'ReplyWise AI',
    description:
      'ReplyWise AI is a privacy-focused AI assistant that transforms unstructured messages into actionable insights such as summaries, priorities, deadlines, action items, and suggested replies. Built with Spring Boot, React.js, and a locally hosted LLM using Ollama.',
    bgGradient: 'blue-purple',
    subtitle: 'ReplyWise AI – Message-to-Action Assistant',
    tagline: 'Turn messages into actionable tasks with AI',
    sourceUrl: 'https://github.com/AKashAMode/replywise-ai',
    liveUrl: '',
    image: ReplyWiseProject,
    skills: [
      'Java 21',
      'Spring Boot',
      'React.js',
      'JavaScript',
      'Ollama',
      'REST APIs',
      'Maven',
      'Vite',
      'Axios',
      'HTML/CSS',
      'Git'
    ]
  },

  {
    title: 'NeuralNook',
    description:
      'NeuralNook is a full-stack blogging platform with JWT authentication, role-based access control, and complete CRUD functionality for blogs, drafts, and comments. Built using React, Node.js, Express.js, MongoDB, and Tailwind CSS.',
    bgGradient: 'purple-pink',
    subtitle: 'NeuralNook – Full-Stack Blogging Platform',
    tagline: 'A secure full-stack platform for modern blogging',
    sourceUrl: 'https://github.com/AKashAMode/NeuralNook',
    liveUrl: '',
    image: NeuralNook,
    skills: [
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'REST APIs',
      'JWT',
      'MD5',
      'HTML/CSS',
      'Git'
    ]
  },

  {
    title: 'Raksha Bandhan Website',
    description:
      'A responsive festive web application created to celebrate Raksha Bandhan, featuring custom React components, dynamic layouts, reusable UI elements, and unified gradient styling. Built with Next.js, TypeScript, React, and Tailwind CSS and deployed on Vercel.',
    bgGradient: 'pink-orange',
    subtitle: 'Raksha Bandhan – Festive Web Experience',
    tagline: 'A modern interactive experience for Raksha Bandhan',
    sourceUrl: '',
    liveUrl: '',
    image: RakshaBandhan,
    skills: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'JavaScript',
      'CSS',
      'Vercel',
      'Git'
    ]
  },

  {
    title: 'Job Portal Web Application',
    description:
      'A responsive frontend job portal built with React and Vite, featuring reusable components, modern UI layouts, optimized application structure, and a smooth user experience. Deployed using Vercel with ESLint-based code quality checks.',
    bgGradient: 'blue-cyan',
    subtitle: 'Job Portal – React Web Application',
    tagline: 'A modern and responsive job search interface',
    sourceUrl: '',
    liveUrl: '',
    image: JobPortal,
    skills: [
      'JavaScript',
      'React.js',
      'Vite',
      'HTML5',
      'CSS3',
      'Vercel',
      'Git',
      'ESLint'
    ]
  },

  {
    title: 'Sutra Cut',
    description:
      'Sutra Cut is an AI-powered video auto-editor for Hindi, English, and mixed-language videos. It generates transcriptions, allows transcript and timeline editing, matches visual assets from stock providers, creates styled captions, and renders downloadable MP4 videos using an asynchronous processing pipeline.',
    bgGradient: 'orange-red',
    subtitle: 'Sutra Cut – AI Video Auto-Editor',
    tagline: 'Transform raw videos into edited content with AI',
    sourceUrl: '',
    liveUrl: '',
    image: AiInterview,
    skills: [
      'Java',
      'Spring Boot',
      'Python',
      'FastAPI',
      'Faster-Whisper',
      'FFmpeg',
      'React',
      'Vite',
      'REST APIs',
      'Docker',
      'Video Processing'
    ]
  },

  {
    title: 'Tally Integration',
    description:
      'A full-stack Tally integration application that provides company-specific dashboards, user authentication, sales and purchase report management, ledger search, date-based filtering, analytics, and PDF report generation. The Spring Boot backend supports multi-tenant database routing, Excel imports using Apache POI, and REST APIs for financial data, while the React frontend provides interactive dashboards and reporting features.',
    bgGradient: 'green-blue',
    subtitle: 'Tally Integration – Full-Stack Accounting Dashboard',
    tagline: 'Company-wise accounting data and reporting platform',
    sourceUrl: '',
    liveUrl: '',
    image: TallyIntegration,
    skills: [
      'Java 17',
      'Spring Boot 3.4.1',
      'Spring Data JPA',
      'Spring Security',
      'MySQL',
      'React.js',
      'JavaScript',
      'React Router',
      'REST APIs',
      'Apache POI',
      'Chart.js',
      'PDF Generation',
      'Excel/CSV',
      'Multi-Tenant Architecture',
      'Git'
    ]
    },
    
    {
      title: 'EcoSwap Market Place',
      description: 'EcoSwap is a responsive online marketplace that promotes sustainable shopping by connecting buyers and sellers of pre-loved items. Built with HTML, CSS, and JavaScript, the platform makes it easy to trade second-hand products—from fashion and electronics to collectibles—at affordable prices. Designed to encourage eco-friendly practices, EcoSwap provides a seamless user experience where one person’s unused item becomes another’s valuable find.',
      bgGradient: 'purple-pink',
      subtitle: 'EcoSwap – A sustainable marketplace',
      tagline: 'EcoSwap is a responsive online marketplace',
      sourceUrl: 'https://github.com/AKashAMode/icp9.0-javascript-github-group-project-3',
      liveUrl: 'https://quiet-muffin-a46fa4.netlify.app/',
      image: EcoSwapProject,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'FaceSearch AI ',
      description: 'An AI-powered platform designed to let users search for their look-alikes worldwide. Currently featuring a sleek UI interface with an integrated Stripe payment gateway for subscription testing, including a fully functional subscription plan card.',
      bgGradient: 'blue-purple',
      subtitle: 'Discover Your Digital Twin',
      tagline: 'Explore the world to find your look-alike ',
      sourceUrl: 'https://github.com/AKashAMode/faceSearchAi-web',
      liveUrl: 'https://sage-kringle-c3ed44.netlify.app/',
      image: FaceSearch,
      skills: ['HTML', 'CSS', 'JavaScript','Stripe']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern and responsive personal portfolio website built to showcase my skills, projects, and experience. Designed with a clean UI, smooth navigation, and minimal aesthetics to create a professional first impression. Integrated iconography using Lucide React and implemented smooth scrolling for a better user experience.',
      bgGradient: 'green-blue',
      subtitle: 'Personal Portfolio Website ',
      tagline: 'A sleek and modern portfolio that speaks for my skills before I do.',
      sourceUrl: 'https://github.com/AKashAMode/Akash-Portfolio',
      liveUrl: 'https://akash-portfolio-smoky.vercel.app/',
      image: PortfolioImg,
      skills: ['React', 'CSS', 'Lucide React Icons']
    },
    {
  title: 'AI Interview Platform',
  description: 'An AI-powered interview platform where users can practice and evaluate their knowledge through real-time interviews. Built with ReactJS for the frontend and Spring Boot with MySQL for backend data management. Integrated AssemblyAI API for live voice transcription, enabling candidates to see their responses in real-time. Deployed using Render and Railway for scalability and reliability.',
  bgGradient: 'purple-pink',
  subtitle: 'AI Interview Practice Platform',
  tagline: 'Practice. Perform. Perfect – Your AI-driven interview coach.',
  sourceUrl: 'https://github.com/AKashAMode/Interview-platform-frontend',
  liveUrl: 'https://interview-platform-frontend-henna.vercel.app/',
  image: AiInterview,
  skills: ['ReactJS', 'CSS', 'Spring Boot', 'MySQL', 'Render', 'Railway', 'AssemblyAI API']
  }

  ];

  export default projects;