import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: 'https://i.imgur.com/ffy7csd.jpeg',
    url: 'https://odyssey-mp.vercel.app',
    github: 'https://github.com/miguel-p-alves/miguel-p-alves.github.io',
    title: 'Odyssey',
    text: 'A bicycle e-commerce platform where users can easily browse through different categories of bikes, learn about insurance options, contact customer support, and request a quote, all within a visually appealing and highly functional interface.',
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/k2j0jOD.jpeg',
    url: 'https://mp-backroads.netlify.app',
    github: 'https://github.com/miguel-p-alves/backroads',
    title: 'Backroads',
    text: 'A project for a fictional tour company built using React, allowing me to apply my knowledge, particularly in the development and management of components, while creating a dynamic and interactive user experience.',
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/noGu4Gv.jpeg',
    url: 'https://patas-e-pelos.vercel.app',
    github: 'https://github.com/miguel-p-alves/patas-e-pelos',
    title: 'Patas&Pelos',
    text: 'A website built using HTML, CSS, and JavaScript, where I was able to deepen my understanding of JS concepts, integrate a Bitcoin API, and work with an internal API to enhance functionality and provide real-time data.',
  },
]
