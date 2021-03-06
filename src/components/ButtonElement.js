import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
border-radius: 50px;
background: ${({ primary }) => (primary ? "#5A3AC7" : "#fff")};
white-space: nowrap;
padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
color: ${({ dark }) => (dark ? "#5A3AC7" : "#fff")};
font-size: ${({ big }) => (big ? "20px" : "16px")};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#5A3AC7")};
    color: ${({ dark }) => (dark ? "#fff" : "#5A3AC7")};

}
`

