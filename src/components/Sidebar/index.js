import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

export default function Sidebar({ toggle, isOpen }) {
    return (
        <SidebarContainer isOpen={isOpen}  >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about">
                        About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="download">
                        Download
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="contact">
                        Contact
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="features">
                        Features
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toggle} >
                        Download
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
