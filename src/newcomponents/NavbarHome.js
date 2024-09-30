import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import logo from "../../public/assets/logos/navbar/logo.png";
import instagram from "../../public/assets/icons/socialmedia/instagram-blue.png";

const NavbarHome = ({section}) => {
  const [width, setWidth] = useState(null);
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
      <NavbarSection 

      >
        <NavbarContainer>
          <Link href="/">
            <LogoContainer>
              <Image src={logo} alt="logo" />
            </LogoContainer>
          </Link>
          {width >= medium ? (
            <>
              <TabsBox mode="large">
                <div className="sub">
                  <Link href="/">{translate("cero")}</Link>
                  <a data-sublinks>
                    <Link href="/editing">{translate("sublink1")}</Link>

                    <Link href="/writing">{translate("sublink2")}</Link>
                  </a>
                </div>

                <Link href="/work"> {translate("one")}</Link>
                <Link href="/bio">{translate("two")}</Link>
                <Link href="/contact"> {translate("three")}</Link>
                <Circle>
                  <a
                    href="https://www.instagram.com/olipollitzer/"
                    target="_blank"
                  >
                    <Image src={instagram} className="social" alt="instagram" />
                  </a>
                </Circle>
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

const NavbarSection = styled.div`
  z-index: 1000;
  background-color: transparent;
z-index: 10;
  top: 0;
  width: 100%;
  /* height: 80px; */
  box-sizing: border-box;
  padding: 20px 80px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  position: absolute;

  
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

    font-family: "Bebas Neue", cursive;
    /* font-family: var(--font-bebasneue); */
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
  position: relative;

  a {
    font-family: "Montserrat";
    /* font-family: var(--font-montserrat); */

    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    color: #ffffff;
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

  /* ... your existing styles ... */

  /* Needed for positioning the sublinks */

  div {
    &:hover a[data-sublinks] {
      display: block;
    }
  }

  /* Hide sublinks by default */
  a[data-sublinks] {
    display: none;
    position: absolute;
    top: 100%; /* Position sublinks below the main link */
    left: 0;
    /* background-color: white; */
    /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); */
    z-index: 10; /* Ensure sublinks appear above other content */
    height: 80px;
    width: 95px;
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
  color: #ffffff;
  /* font-family: "Montserrat"; */
  font-weight: 900;
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  font-family: "Bebas Neue", cursive;
  /* font-family: var(--font-bebasneue); */
  letter-spacing: 2px;
`;

export default NavbarHome;
