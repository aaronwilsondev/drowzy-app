import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";

export default function Footer() {

    const todaysDate = new Date().getFullYear();

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="contact">How it works</FooterLink>
                                <FooterLink to="contact">Testimonials</FooterLink>
                                <FooterLink to="contact">Careers</FooterLink>
                                <FooterLink to="contact">Investors</FooterLink>
                                <FooterLink to="contact">Terms of Service</FooterLink>                     
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="contact">Contact</FooterLink>
                                <FooterLink to="contact">Support</FooterLink>
                                <FooterLink to="contact">Sponsorships</FooterLink>
                                <FooterLink to="contact">Destinations</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="contact">Submit Video</FooterLink>
                                <FooterLink to="contact">Ambassadors</FooterLink>
                                <FooterLink to="contact">Agency</FooterLink>
                                <FooterLink to="contact">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="contact">Instagram</FooterLink>
                                <FooterLink to="contact">Facebook</FooterLink>
                                <FooterLink to="contact">YouTube</FooterLink>
                                <FooterLink to="contact">Twitter</FooterLink>
                                <FooterLink to="contact">LinkdIn</FooterLink>                     
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            DrowZy
                        </SocialLogo>
                        <WebsiteRights>DrowZy © {todaysDate}</WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkdIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}
