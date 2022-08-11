//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/2gocash.png';
import Project1l from './assets/img/projects/2gocash_big.png';
import Project2 from './assets/img/projects/irent.png';
import Project2l from './assets/img/projects/irent_big.png';
import Project3 from './assets/img/projects/we-care.png';
import Project3l from './assets/img/projects/we-care_big.png';
import Project4 from './assets/img/projects/brad.png';
import Project4l from './assets/img/projects/brad_big.png';
import Project5 from './assets/img/projects/moa.png';
import Project5l from './assets/img/projects/moa_big.png';
import Project6 from './assets/img/projects/neclip.png';
import Project6l from './assets/img/projects/neclip_big.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/danielcode/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/danwebguy/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/danielufeli/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    limage: Project1l,
    name: '2goCash',
    category: 'Web Development',
    description: 'A DIGITAL BANKING EXPERIENCE for Immigrants, international students, and Visitors living or Preparing to live in the US.',
    tech: 'JavaScript, React, NextJS, MySQL, WordPress',
    url: 'https://2gocash.com',
  },
  {
    id: '2',
    image: Project2,
    limage: Project2l,
    name: 'IRent',
    category: 'web development',
    description: 'A Web application that allows users to signin and make reservations for a house of their choice',
    tech: 'JavaScript, React, Redux, Ruby on Rails, PostGreSQL',
    url: 'https://github.com/danielufeli/irentapp-frontend-capstone',
  },
  {
    id: '3',
    image: Project3,
    limage: Project3l,
    name: 'We Care Initiatives',
    category: 'Web Development',
    description: 'We Care Initiatives is a non-profit organization based in the US. We provide humanitarian services in the areas of Education, Healthcare and Environment, climate change and helping victims of terrorism, kidnapping, banditry, rape and child trafficking.',
    tech: 'JavaScript, React, MySQL, WordPress',
    url: 'https://wecareini.org',
  },
  {
    id: '4',
    image: Project4,
    limage: Project4l,
    name: 'Brad Capital',
    category: 'Web Development',
    description: 'Bradcapital assists retail and institutional investors in using forex and other instruments as an asset class and part of their investment objectives.',
    tech: 'Laravel/PHP, MySQL, HTML, CSS',
    url: 'https://bradcapitalgroup.com/',
  },
  {
    id: '5',
    image: Project5,
    limage: Project5l,
    name: 'MOA Solutions',
    category: 'web development',
    description: 'M.O.A Unique Solutions is a comprehensive Procurement and Engineering services Company, registered as a private limited company in Nigeria.',
    tech: 'HTML, CSS, JavaScript',
    url: 'https://moasolutionsng.com',
  },
  {
    id: '6',
    image: Project6,
    limage: Project6l,
    name: 'Neclip',
    category: 'web development',
    description: 'Neclip is a social media network for sharing “hyper-local” information- news, gossip, reviews, or just about anything in the text, photo, and video forms with a cryptocurrency-based monetization system.',
    tech: 'Flutter, Dart, Laravel/PHP, MySQL, HTML, CSS',
    url: 'https://play.google.com/store/apps/details?id=com.organization.neclip',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I help develop a custom layout for your business or a simple one for your personal use.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'I help develop web applications that are robust and user-friendly using the latest technologies and frameworks.',
  },
  {
    icon: <FiPenTool />,
    name: 'Project Management',
    description:
      'I help manage your projects and deliver the best results for your business.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'I help improve the visibility of your website or a web page to search engines.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'David',
    authorPosition: '',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Aisha',
    authorPosition: '',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Clementina',
    authorPosition: '',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at danielufeli@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Lagos, Nigeria',
    description: 'Serving clients worldwide',
  },
];
