import React from "react";
import Image from "next/image";
import Background from "../../public/assets/pictures/8.JPG";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import logo from "../../public/assets/logos/logocover.png";

const ScreenContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative; 
`;

const MotionDiv = styled(motion.div)`
  position: relative;

  width: 100%;
  height: 100%;
`;

const LogoContainer = styled(motion.div)`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the element */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px; /* Set desired width */
  height: 600px; /* Set desired height */
`;

export default function Intro() {
  // const container = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start start', 'end start']
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <ScreenContainer>
      <MotionDiv
      // style={{ y }}
      // ref={container}
      >
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
           <LogoContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image src={logo} fill alt="image" style={{ objectFit: "cover" }} />
        </LogoContainer>
      </MotionDiv>
    </ScreenContainer>
  );
}
