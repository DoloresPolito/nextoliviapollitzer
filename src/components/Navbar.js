import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import Link from "next/link";
// import Image from "next/image";

import Menu from "./Menu";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const [width, setWidth] = useState(null);
  const [view, setView] = useState();
  
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("navbar");
  const handleClick = (l) => () => {
      push("/", undefined, { locale: l });
    };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setOpen] = useState(false);
  const medium = 1045;


  



  return (
    <>
      <NavbarSection mode={medium >= 1040 ? "absolute" : "fixed"}>
        <NavbarContainer>
          {width >= medium ? (
            <>
       

       <TabsBox mode='large'>
                <Link href="/">{translate("cero")}</Link>
                <Link href="/work"> {translate("one")}</Link>
                <Link href="/">{translate("two")}</Link>
                <Link href="/"> {translate("three")}</Link>
              </TabsBox>
              <section>
                {locales.map((l) => (
                  <LanguageButton key={l} onClick={handleClick(l)}>
                    {l} |
                  </LanguageButton>
                ))}
              </section>
            </>
          ) : (
            <>
              <div className="menu-box">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Menu open={isOpen} setOpen={setOpen} />
              </div>
            </>
          )}
        </NavbarContainer>
      </NavbarSection>
    </>
  );
};

const LogoContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 280px;
  width: 160px;

  img {
    cursor: pointer;
    position: absolute;
    left: -30px;
    top: -103px;
    height: 280px;
    width: 160px;
  }
`;

const InstaContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 60px;
  width: 60px;

  img {
    cursor: pointer;
    position: absolute;
    left: 0px;
    top: 3px;
    height: 60px;
    width: 60px;
  }
`;

const NavbarSection = styled.div`
  z-index: 100;

  background-color: ${(props) =>
    props.view === "oliviapollitzer" ||
    props.view === "oliviapollitzer?services"
      ? " #EAE9E5 !important"
      : "#f6f6f6 !important"};

  /* background-color: #EAE9E5 !important; */
  /* background-color: #EAEAEA; */
  /* position: ${(props) => props.mode}; */
  top: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 20px 80px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  .hamburger-react {
    position: relative;
    z-index: 3;
    color: #5f5f67;
  }

  section {
    background-color: transparent;
    border: none;
    color: #959985;
    font-weight: 900;
    font-size: 16px;
    line-height: 14px;

    /* font-family: "Bebas Neue", cursive; */
    font-family: var(--font-bebasneue);
    letter-spacing: 2px;
    margin-left: 25px;
  }

  @media only screen and (max-width: 1045px) {
    padding: 10px 50px;

    .hamburger-react {
      top: 12px;
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 10px 10px;
  }
`;

const Container = styled.div`
  /* margin: auto; */
  max-width: 1140px;

  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 24px;
    /* padding 24px 0;  */
  }
`;

const NavbarContainer = styled(Container)`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
`;

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  align-items: center;
  text-align: center;

  a {
    /* font-family: "Montserrat"; */
    font-family: var(--font-montserrat);

    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    color: #5f5f67;
    cursor: pointer;
    background: transparent;
    border: 0px solid;
    display: block;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 0 35px 0 0;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #5f5f67;

  img {
    margin-left: 35px;
    height: 22px;
    width: 22px;
  }
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
  /* font-family: "Bebas Neue", cursive; */
  font-family: var(--font-bebasneue);
  letter-spacing: 2px;
`;

export default Navbar;
