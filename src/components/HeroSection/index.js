import React, {useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from "../../videos/video.mp4";
import { Button } from '../ButtonElement';

export default function HeroSection() {

const [hover, setHover] = useState(false);

const onHover = () => {
    setHover(!hover);
}

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="vide/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Achieve Deeper Better Sleep
                </HeroH1>
                <HeroP>
                    Download today and reap the benifits of a Good nights rest Tonight
                </HeroP>
                <HeroBtnWrapper>
                    <Button primary to="download" onMouseEnter={onHover} onMouseLeave={onHover} >
                        Download {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
