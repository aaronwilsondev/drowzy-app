import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, SubTitle, TextWrapper, TopLine } from './InfoElements'

export default function InfoSection({
    lightBg, id, imgStart, topLine, lightText,
    headline, darkText, description, buttonLabel, img, alt,
    primary, dark
}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
               <InfoWrapper>
                   <InfoRow imgStart={imgStart} >
                       <Column1>
                           <TextWrapper>
                               <TopLine>{topLine}</TopLine>
                               <Heading lightText={lightText} >{headline}</Heading>
                               <SubTitle darkText={darkText} >{description}</SubTitle>
                               <BtnWrap>
                                   <Button 
                                   smooth={true}
                                   duration={500}
                                   spy={true}
                                   exact={true}
                                   offset={-80}
                                   primary={primary}
                                   dark={dark}
                                   to="home">{buttonLabel}</Button>
                               </BtnWrap>
                           </TextWrapper>
                       </Column1>
                       <Column2>
                           <ImgWrap>
                               <Img src={img} alt={alt} />
                           </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
            </InfoContainer>
        </>
    )
}
