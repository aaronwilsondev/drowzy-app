import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './FeaturesElements'
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";

export default function Features() {
    return (
        <ServicesContainer id="features">
            <ServicesH1>Our Features</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Expand Your Mind</ServicesH2>
                    <ServicesP>Browse our peer reviewed sleep studies</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Better Sleep Anywhere</ServicesH2>
                    <ServicesP>Download your sessions so you can sleep soundly anywhere</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Waking Action</ServicesH2>
                    <ServicesP>Use daytime meditation to achieve waking peace</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}
