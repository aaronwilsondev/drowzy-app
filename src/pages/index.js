import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Features from '../components/Features/index';
import Footer from '../components/Footer';

export default function Home() {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
}

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Features />
            <InfoSection {...homeObjThree} />
            <Footer/>
        </>
    )
}
