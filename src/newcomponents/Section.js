import styled from 'styled-components';
import Image from 'next/image';
import Background from '../../public/assets/pictures/5.JPG';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const SectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 5vw;
  /* mix-blend-mode: difference; */
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopText = styled.p`
  width: 50vw;
  font-size: 2vw;
  align-self: flex-start;
  text-transform: uppercase;
  /* mix-blend-mode: difference; */
  color:white;
  font-family: 'EditorialUltralight', sans-serif;
`;

const BottomText = styled.p`
  font-size: 2vw;
  text-transform: uppercase;
  /* mix-blend-mode: difference; */
  font-family: 'EditorialMedium', sans-serif;
`;

const FixedImageContainer = styled.div`
  position: fixed;
  top: -10vh;
  left: 0;
  height: 120vh;
  width: 100%;
`;

const StyledMotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <SectionContainer ref={container}>
      <ContentContainer>
       
       
        {/* <BottomText>SERVICIOS</BottomText>  
        <TopText>Nos dedicamos a las palabras. Observamos textos para ajustar sus gestos y matices y también construimos, desde el principio, textos nuevos. Te invitamos a conocer nuestros servicios editoriales.</TopText>
      */}
      </ContentContainer>
      <FixedImageContainer>
        <StyledMotionDiv style={{ y }}>
          <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
        </StyledMotionDiv>
      </FixedImageContainer>
    </SectionContainer>
  );
}