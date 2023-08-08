import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Parallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import plus from "../../public/assets/icons/services/plus-blue.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Services = ({ info }) => {
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { t: translate } = useTranslation("services");
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (inView) {
      animation3.start({
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
      });
      animation2.start({
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeIn",
        },
      });

      animation1.start({
        x: 0,
        transition: {
          duration: 0.75,
          bounce: 0.5,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation3.start({
        opacity: 0,
      });
      animation2.start({
        opacity: 0,
      });

      animation1.start({
        x: "20%",
      });
    }
  }, [inView]);

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
  return (
    <>
   
        {width >= 1160 ? (
          <>
             <ServiceSection>
            <Box>
              <Content>
                <H2>{translate("title")}</H2>
                <BoldLine />
                <motion.p>{translate("subtitle")}</motion.p>
              </Content>
            </Box>
            </ServiceSection>
          </>
        ) : (
          <>
              <ServiceSection>
            <Box>
              <Content>
                <H2>{translate("title")}</H2>
                <BoldLine />
                <motion.p>{translate("subtitle")}</motion.p>
              </Content>
            </Box>
            </ServiceSection>
          </>
        )}


      {width >= 1160 ? (
        <>
          {/* <ServicesContainer>
            <div className="hoverable-container">
              <div className="hoverable">
                <h4>{translate("editionTitle")}</h4>
                <p>{translate("editionText")}</p>

                <div className="overlay">
               
                </div>
              </div>

              <div className="hoverable">
                <h4>{translate("writingTitle")}</h4>
                <p>{translate("writingText")}</p>

                <div className="overlay">
               
                </div>
              </div>
            </div>
          </ServicesContainer> */}
        </>
      ) : (
        <>
        
        <ServiceContainerMobile>
            <div>
            <h4>{translate("editionTitle")}</h4>
                <p>{translate("editionText")}</p>
            </div>
            <MobileLine/>

            <div>
            <h4>{translate("writingTitle")}</h4>
                <p>{translate("writingText")}</p>
            </div>

        </ServiceContainerMobile>
        
        </>
      )}
    </>
  );
};

const ServiceSection = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f6f6f6;
  color: #5f5f67;
  display: flex;
  flex-direction: row !important;
  align-items: center;

  @media only screen and (max-width: 1160px) {
    flex-wrap: wrap;
    align-items: start;
    height: auto;
  }
`;
const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 370px;
  background-color: #a6aa97;

  @media only screen and (max-width: 1160px) {
    width: 100%;
    height: 320px;
  }

  @media only screen and (max-width: 500px) {
    height: 400px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 1160px) {
    width: 70%;
  }

  p {
    font-size: 14px;
    /* font-family: "Montserrat", sans-serif; */
    font-family: var(--font-montserrat);
    letter-spacing: 1.1px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 500;
    margin-top: 25px;
    text-align: left;
  }
`;
const H2 = styled(motion.h2)`
  color: #ffffff;
  font-family: var(--font-bebasneue);
  /* font-family: "Bebas Neue", cursive; */
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 50px;
  font-family: var(--font-bebasneue);
`;
const ServicesContainer = styled.div`
  width: 550px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: 180px; */
  background-color: red;
  p {
    font-weight: 500;
    color: #5f5f67;
  }

  .hoverable-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .hoverable {
    position: relative;
    width: 500px;
    height: 190px;
    /* margin: 5px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1.5px solid #5f5f67;
    height: 97%;
  }

  .hoverable p {
    margin: 0;
    text-align: center;
    /* font-family: "Montserrat", sans-serif; */
    font-family: var(--font-montserrat);
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1px;
    font-weight: 500;
    color: #5f5f67;
    width: 500px;
    text-align: left;
    padding-bottom: 20px;
  }

  .hoverable h4 {
    color: #5f5f67;
    font-size: 25px;
    /* font-family: "Bebas Neue", cursive; */
    font-family: var(--font-bebasneue);
    font-weight: 600;
    letter-spacing: 1.8px;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    background-color: transparent;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    transition: max-height 0.8s ease-in-out, opacity 0.5s ease-in-out;
  }

  .hoverable:hover .overlay {
    max-height: 200px;
    opacity: 1;
  }

  .overlay p {
    margin: 0;
    margin-bottom: 10px;
  }

  .overlay a {
    color: #fff;
    text-decoration: underline;
    display: block;

    cursor: pointer;
  }

  .overlay a img {
    height: 30px;
    width: 30px;
    margin-bottom: 3px;
  }
`;
const BoldLine = styled(motion.div)`
  border-top: 4px solid #ffffff;
  height: 2px;
  max-width: 120px;
  margin-top: -45px;
  margin-bottom: 15px;
`;
const ServiceContainerMobile = styled(motion.div)`
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 70%;
    height: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    h4 {
      color: #5f5f67;
      font-size: 25px;
      /* font-family: "Bebas Neue", cursive; */
      font-family: var(--font-bebasneue);
      font-weight: 600;
      letter-spacing: 1.8px;
    }

    p {
      /* font-family: "Montserrat", sans-serif; */
      font-family: var(--font-montserrat);
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 1px;
      font-weight: 500;
      color: #5f5f67;
      text-align: left;
      margin-top: -10px;

      @media only screen and (max-width: 700px) {
        font-size: 13px;
      }
    }
  }
`;
const MobileLine = styled.div`
  border-top: 1.5px solid #5f5f67;
  width: 100%;
  height: 2px !important;
  margin-top: 10px !important;

  @media only screen and (max-width: 500px) {
    margin-top: 30px !important;
  }

  @media only screen and (max-width: 380px) {
    margin-top: 70px !important;
  }

  @media only screen and (max-width: 310px) {
    margin-top: 70px !important;
  }
`;

export default Services;