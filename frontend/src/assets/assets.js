import logo from './logo.png'
import profile_icon from './profile_icon.png'
import item0 from './item-0.png'
import item1 from './item-1.png'
import item2 from './item-2.png'
import item3 from './item-3.png'
import item4 from './item-4.png'
import item5 from './item-5.png'
import item6 from './item-6.png'
import item7 from './item-7.png'
import item8 from './item-8.png'
import welcome1 from './welcome-1.jpeg'
import welcome2 from './welcome-2.jpeg'
import welcome3 from './welcome-3.png'
import introduction from './introduction.jpeg'
import star from './star-shape.svg'
import creditstar from './star.png'
import favicon1 from './features-icon-1.svg'
import favicon2 from './features-icon-2.svg'
import favicon3 from './features-icon-3.svg'
import favicon4 from './features-icon-4.svg'
import portfolio1 from './portfolio-1.jpeg'
import portfolio2 from './portfolio-2.jpeg'
import portfolio3 from './portfolio-3.jpeg'
import portfolio4 from './portfolio-4.jpeg'
import about1 from './about-image-1.jpg'
import about2 from './about-image-2.jpg'
import sample from './sample.jpg'
import genimg from './genImg.jpg'
import prompt from './prompt.jpg'
import download from './downloading.jpg'
import about3 from './about-1.jpeg'
import about4 from './about-2.jpeg'
import about5 from './about-5.jpeg'

export const assets = {
  logo,
  item0,
  item1, item2, item3, item4,
  item5, item6, item7, item8,
  welcome1, welcome2, welcome3,
  introduction, profile_icon,
  star, favicon1, favicon2, favicon3, favicon4,
  portfolio1, portfolio2, portfolio3, portfolio4,
  about1, about2, creditstar, sample, about3, about4,about5
}

export const featuresData = [
  {
    title: 'Excellent support',
    description: 'Marketing execution is the process of carrying out the.',
    icon: favicon1,
  },
  {
    title: 'Reliable experts',
    description: 'Marketing execution is the process of carrying out the.',
    icon: favicon2,
  },
  {
    title: 'Endless possibilities',
    description: 'Marketing execution is the process of carrying out the.',
    icon: favicon3,
  },
  {
    title: 'Unique technology',
    description: 'Marketing execution is the process of carrying out the.',
    icon: favicon4,
  },

];

export const generateImage = [
  {
    image: prompt,
    heading: 'Type the Prompt',

    text: "With our AI your the can makes the never before seen images fores New"
  },
  {
    image: genimg,
    heading: 'Click on Generate',

    text: "With our AI your the can makes the never before seen images fores New"
  },
  {
    image: download,
    heading: "Download image",
    text: "With our AI your the can makes the never before seen images fores New"
  },
]

export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced',
    price: 50,
    credits: 500,
    desc: 'Best for business use.'
  },
  {
    id: 'Business',
    price: 250,
    credits: 5000,
    desc: 'Best for enterprise use.'
  },
]