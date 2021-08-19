import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './FeaturesElements'
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";

export default function Features() {
    return (
        <ServicesContainer id="features">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Lorum Ipsum</ServicesH2>
                    <ServicesP>ipsu ip sumlor em w o lorem ipsum</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Lorum Ipsum</ServicesH2>
                    <ServicesP>ipsu ip sumlor em w o lorem ipsum</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Lorum Ipsum</ServicesH2>
                    <ServicesP>ipsu ip sumlor em w o lorem ipsum</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}
