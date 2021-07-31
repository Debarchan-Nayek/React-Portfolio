import { v4 as uuidv4 } from 'uuid';
import EcommerceImg from '../images/ecommerce.jpg';
import BankingImg from '../images/banking.png';
import DrumKitImg from '../images/drum-kit.png';
import Covid_TrackerImg from '../images/covid-tracker.jpg';
import ChatAppImg from '../images/chat-app.png';


const projects = [
    {
        id: uuidv4(),
        name: 'E-Mart',
        desc: 'A MERN Stack Ecommerce Website with different admin and user interface.',
        img: EcommerceImg
    },
    {
        id: uuidv4(),
        name: 'Covid-Tracker',
        desc: 'An application which gives the graphical and numerical statistics of covid cases in different countries of the world.',
        img: Covid_TrackerImg
    },
    {
        id: uuidv4(),
        name: 'Chat-Mate',
        desc: 'A Realtime Chat Application where you can chat with multiple people in a room.',
        img: ChatAppImg
    },
    {
        id: uuidv4(),
        name: 'Public Bank of India',
        desc: 'MongoDB database integrated basic banking system with different CRUD operations.',
        img: BankingImg
    },
    {
        id: uuidv4(),
        name: 'Drum-Kit',
        desc: 'A beginner level Javascript project which plays different drum sounds on mouse click and key press.',
        img: DrumKitImg
    }
];

export default projects;