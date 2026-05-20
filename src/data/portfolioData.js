import screenshot1 from '../assets/Screenshot1.png'
import screenshot2 from '../assets/Screenshot2.png'
import screenshot3 from '../assets/Screenshot3.png'
import screenshot4 from '../assets/Screenshot4.png'
import screenshot5 from '../assets/Screenshot5.png'
import screenshot6 from '../assets/Screenshot6.png'
import screenshot7 from '../assets/Screenshot7.png'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import pandiyanCert from '../assets/pandiyan certificate.png'
import slaCert from '../assets/slacertificate.png'

export const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Education', target: 'education' },
  { label: 'Projects', target: 'projects' },
  { label: 'Certificates', target: 'certificates' },
  { label: 'Contact', target: 'contact' },
]

export const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'PHP'],
  Database: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Canva', 'Excel', 'CapCut'],
}

export const projects = [
  {
    title: 'College Management / PHP Project',
    description:
      'A web-based college management system developed using PHP and MySQL to manage student data and records.',
    tech: ['PHP', 'MySQL', 'XAMPP'],
    image: screenshot1,
    galleryImages: [
      screenshot1,
      screenshot2,
      screenshot3,
      screenshot4,
      screenshot5,
      screenshot6,
      screenshot7,
    ],
    live: '#',
    github: 'https://github.com/codearifx/Alpha_php.git',
    primaryBtn: 'View Gallery',
  },
  {
    title: 'Gym website',
    description:
      'A productivity app with drag-and-drop task boards, authentication, and real-time status tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: web1,
    live: 'https://glittering-profiterole-3ab6c7.netlify.app',
    github: 'https://github.com/codearifx/Elite_gym.git',
  },
  {
    title: 'TrendyWear E-Commerce',
    description:
      'A modern online clothing store with product filtering, secure checkout flow, and admin dashboard.',
    tech: ['React', 'Tailwind', 'Express', 'MongoDB'],
    image: web2,
    live: 'https://precious-lily-46c239.netlify.app',
    github: 'https://github.com/codearifx/trendywear.git',
  },
  
]

export const certificates = [
  {
    title: 'Pandiyan Certificate',
    platform: 'Pandiyan Institute',
    description: 'Certification of completion for extensive training in web technologies and software development practices.',
    year: '2024',
    image: pandiyanCert,
    link: '#',
  },
  {
    title: 'SLA Certificate',
    platform: 'SLA Institute',
    description: 'Advanced certification in modern full-stack development, covering MERN stack architecture and deployment.',
    year: '2025',
    image: slaCert,
    link: '#',
  },
]
