import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Tabs from "./Tabs";

const Menu = ({ open, setOpen }) => {



    const { locale, locales, push } = useRouter();

    const handleClick = (l) => () => {
      push("/", undefined, { locale: l });
    };

    return(<>
      <StyledMenu open={open} >

      <Tabs open={open} setOpen={setOpen} />

      <section>
        {locales.map((l) => (
          <LanguageButton key={l} onClick={handleClick(l)}>
            {l} |
          </LanguageButton>
        ))}
      </section>
      </StyledMenu>
    </>)
}



export const StyledMenu = styled.nav`
section {
  position: absolute;
  margin-top: 360px;
  left: 11px;
  align-self: center;
  font-size: 14px;
}
display: flex;
flex-direction: column;
justify-content: flex-start;
background-color: white;
text-align: left;
padding: 150px 100px 30px 30px;
position: fixed;
z-index: 1;
top: 0;
right: 0;
bottom: 0;
transition: transform 0.3s ease-in-out;
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;
const LanguageButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
color: #959985;
/* font-family: "Montserrat"; */
font-weight: 900;
font-size: 16px;
line-height: 14px;
text-decoration: none;
font-family: "Bebas Neue", cursive;
/* font-family: var(--font-bebasneue); */
letter-spacing: 2px;
`;

export default Menu;
