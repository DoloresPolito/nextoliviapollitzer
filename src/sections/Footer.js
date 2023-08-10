import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../public/assets/logos/footer/footer-olivia.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instagram from "../../public/assets/icons/footer/instagram-white.png";
import linkedin from "../../public/assets/icons/footer/linkedin-white.png";
import mail from "../../public/assets/icons/footer/email-white.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [width, setWidth] = useState(null);
  const [view, setView] = useState();

  const { t: translate } = useTranslation("footer");

  useEffect(() => {
    //     setView(window.location.href.split("/")[3]);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <FooterSection mode={width}>
        {width > 800 ? (
          <>
            <FooterContainer mode={width} ref={ref}>
              <motion.div>
                <ImageDiv>
                  <Image src={logo} alt="logo" />
                </ImageDiv>
              </motion.div>
            </FooterContainer>

            <Column1 animate={animation}>
              <FooterTitle>{translate("title")}</FooterTitle>
              <section>
                <Circle>
                  <a href="mailto:oliviapollitzer@gmail.com">
                    <Image src={mail} alt="mail" />
                  </a>
                </Circle>
                <Circle>
                  <a
                    href="https://www.instagram.com/olipollitzer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={instagram} alt="instagram" />
                  </a>
                </Circle>
                <Circle>
                  <a
                    href="https://www.linkedin.com/in/olivia-pollitzer-31396817a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="linkedin" />
                  </a>
                </Circle>
              </section>
            </Column1>

            <Column2 animate={animation}>
              <ul className="list">
                <Link href="/">
                  <li>{translate("services")}</li>
                </Link>
                <Link href="/work">
                  <li>{translate("work")}</li>
                </Link>
        
                <Link href="/bio">
                  <li>{translate("about")}</li>
                </Link>
                <Link href="/contact">
                  <li>{translate("contact")}</li>
                </Link>
              </ul>
            </Column2>

            <CopyRight>
              <p>{translate("rights")}</p>
            </CopyRight>
          </>
        ) : (
          <>
            <MobileSection>
              <MobileContainer>
                <Div>
                  <div>
                    <FooterTitle>{translate("title")}</FooterTitle>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Circle>
                        <a href="mailto:oliviapollitzer@gmail.com">
                          <Image src={mail} alt="mail" />
                        </a>
                      </Circle>
                      <Circle>
                        <a
                          href="https://www.instagram.com/olipollitzer/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={instagram} alt="instagram" />
                        </a>
                      </Circle>
                      <Circle>
                        <a
                          href="https://www.linkedin.com/in/olivia-pollitzer-31396817a/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={linkedin} alt="linkedin" />
                        </a>
                      </Circle>
                    </div>
                  </div>

                  <ul className="list">
                    <Link href="/">
                      <li>{translate("services")}</li>
                    </Link>
                    <Link href="/work">
                      <li>{translate("work")}</li>
                    </Link>
               
                    <Link href="/bio">
                      <li>{translate("about")}</li>
                    </Link>
                    <Link href="/contact">
                      <li>{translate("contact")}</li>
                    </Link>
                  </ul>
                </Div>

                <div>
              {" "}
              {/* <Logo2 src={logo} alt="logo" /> */}
            </div>

                <CopyRight2>
                  {" "}
                  <p>{translate("rights")}</p>
                </CopyRight2>
              </MobileContainer>
            </MobileSection>
          </>
        )}
      </FooterSection>
    </>
  );
};

const FooterSection = styled.div`
  height: 300px;
  background-color: #5f5f67;
  color: #f6f6f6;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  height: ${(props) => (props.mode > 800 ? "300px" : "400px")};



  @media only screen and (max-width: 450px) {
  }
`;
const FooterContainer = styled(motion.div)`
  display: flex;
  height: 200px;
  width: 85%;
  margin: auto;
  flex-direction: row;

  /* position: relative; */


  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
const Logo = styled.img`
  position: relative;
  left: 20px;
  width: 380px;
  top: 10px;

  @media only screen and (max-width: 1150px) {
    width: 300px;
    top: 30px;
  }
`;
const ImageDiv = styled.div`
  /* position: relative; */
  width: 10px;
  height: 10px;
  /* left: 20px;
  width: 40px; */
  /* top: 10px; */

  img {
    width: 330px;
    height: 180px;
  }

  @media only screen and (max-width: 1150px) {
    width: 300px;
    top: 30px;
  }
`;
const Logo2 = styled.img`
  width: 240px;
`;
const Column1 = styled(motion.div)`


  display: flex;
  flex-direction: column;

  margin-top: 35px;
  margin-right: 10px;
  position: absolute;
  right: 310px;

  section {
    display: flex;
    flex-direction: row;
    /* padding: 10px; */
    margin-left: -20px;

    a {
      /* margin: 5px; */
      /* margin-left: 25px; */
    }
  }

  img {
    height: 20px;
    width: 20px;
    /* margin-top: 10px; */
  }

  @media only screen and (max-width: 1150px) {
    right: 160px;
    ul {
      font-size: 13px;
    }
  }
`;
const Column2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-right: 10px;
  position: absolute;
  right: 120px;

  ul {
    font-family: "Montserrat", sans-serif;
    /* font-family: var(--font-montserrat); */
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
  }

  li {
    text-decoration: underline #5f5f67;
    color: #f6f6f6;
    font-weight: 400;
    margin: 10px;
    height: 20px;
  }

  @media only screen and (max-width: 1150px) {
    right: 30px;
    ul {
      font-size: 13px;
    }
  }
`;
const FooterTitle = styled.h4`
  font-family: "Bebas Neue", cursive;
  /* font-family: var(--font-bebasneue); */
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 2px;
  margin-left: 5px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 38px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 17px;
  }
`;
const CopyRight = styled(motion.div)`
  position: absolute;
  left: 170px;
  margin-top:230px;


  p {
    font-size: 13px;
    font-family: "Montserrat", sans-serif;
    /* font-family: var(--font-montserrat); */
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1150px) {
    left: 130px;
  }
`;
const CopyRight2 = styled.div`
  display: flex;

  p {
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
    /* font-family: var(--font-montserrat); */
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;
const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Div = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-left: 50px;

  ul {
    font-family: "Montserrat", sans-serif;
    /* font-family: var(--font-montserrat); */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
    margin-right: 40px;

    @media only screen and (max-width: 450px) {
      font-size: 13px;
      margin-right: 0px;
    }
  }

  li {
    text-decoration: underline #5f5f67;
    color: #f6f6f6;
    font-weight: 400;
    margin: 10px;
    height: 20px;

    @media only screen and (max-width: 450px) {
      margin: 3px;
    }
  }

  img {
    height: 20px;
    width: 20px;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    /* margin-left: -20px; */

    div {
      /* margin-left: -30px; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      margin-top: 10px;
      @media only screen and (max-width: 450px) {
      }

      a {
        /* margin: 5px;
        margin-left: 25px; */
      }
    }
  }
  @media only screen and (max-width: 450px) {
    margin-left: -10px;
    margin-bottom: 20px;
  }
`;
const MobileSection = styled.div`
  display: flex;
  justify-content: center !important;
  margin: 0 auto;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #ffffff;
  margin-left: 10px;


  img {
    margin-left: 0px;
  }

  @media only screen and (max-width: 800px) {

    width: 20px;
  height: 20px;

    img {
      margin-top: 0px;

    }
  }
`;
export default Footer;
