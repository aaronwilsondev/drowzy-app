import React, {useState, useEffect} from 'react';
import { FaBars } from "react-icons/fa";
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements.js'
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from "react-scroll";


export default function Navbar({ toggle }) {

const [scrollNav, setScrollNav] = useState(false);

const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
};

useEffect(() => {
    window.addEventListener("scroll", changeNav)
},[]);

const toggleHome = () => {
    scroll.scrollToTop();
}

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    DrowZy
                </NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        to="about">About</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        to="contact">Research</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        to="features">Features</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        to="download">Download</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact">
                    Contact
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}
