import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import text from "../../public/assets/icons/workprogress/edit-green.png";
// import dialogo from "../../public/assets/icons/workprogress/chat-green.png";
// import book from "../../public/assets/icons/workprogress/openbook-green.png";
// import computer from "../../public/assets/icons/workprogress/computer-green.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Image from "next/image";
import { useTranslation } from "next-i18next";
import AnimatedDiv from "@/newcomponents/AnimatedDiv";

const WorkProgress = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const { t: translate } = useTranslation("workprogress");

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <>
      <WorkProgressSection 
      // ref={ref}
      >
<AnimatedDiv>
        <Content 
        // animate={shouldAnimate ? animation : {}}
        >
          <div>
            {/* <Icons>

              <Image src={dialogo} alt='chat'/>
            </Icons> */}
            <Numbers>
              <p>1.</p>
            </Numbers>
            <Titles>
              <p>{translate("title1")}</p>
            </Titles>
            <Texts>
              <p>{translate("text1")}</p>
            </Texts>
          </div>
          <div>
            {/* <Icons>
            <Image src={computer} alt='computer'/>
            </Icons> */}
            <Numbers>
              <p>2.</p>
            </Numbers>
            <Titles>
              <p>{translate("title2")}</p>
            </Titles>
            <Texts>
              <p>{translate("text2")}</p>
            </Texts>
          </div>
          <div>
            {/* <Icons>
            <Image src={text} alt='text'/>
            </Icons> */}
            <Numbers>
              <p>3.</p>
            </Numbers>
            <Titles>
              <p>{translate("title3")}</p>
            </Titles>
            <Texts>
              <p>{translate("text3")}</p>
            </Texts>
          </div>
          <div>
            {/* <Icons>
            <Image src={book} alt='book'/>
            </Icons> */}
            <Numbers>
              <p>4.</p>
            </Numbers>
            <Titles>
              <p>{translate("title4")}</p>
            </Titles>
            <Texts>
              <p>{translate("text4")}</p>
            </Texts>
          </div>
        </Content>
        </AnimatedDiv>
      </WorkProgressSection>
    </>
  );
};


const WorkProgressSection = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  color: #5f5f67;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1160px) {
    height: auto;
    padding-top: 50px;
  }

  /* @media only screen and (max-width: 799px) {
background-color: red;
  } */
`;
const Content = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  /* border: 1px solid grey; */
  @media only screen and (max-width: 1160px) {
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    :hover {
      scale: 1.05;
      /* background-color: #f9f9f9 !important; */
    }
    @media only screen and (max-width: 1160px) {
      width: 400px;
      padding: 3px;
    }

    @media only screen and (max-width: 799px) {
      :hover {
        scale: 1;
        /* background-color: #f9f9f9 !important; */
      }
    }
  }
`;
// const Icons = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   width: 80%;
//   img {
//     height: 50px;
//     width: 50px;

//     @media only screen and (max-width: 1160px) {
//       height: 45px;
//       width: 45px;
//     }
//   }
// `;
const Titles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
  @media only screen and (max-width: 1160px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 799px) {
    margin-top: 15px;
  }

  p {
    font-family: "Bebas Neue", cursive;
    font-family: 'EditorialMedium', sans-serif;
    /* font-family: var(--font-bebasneue); */
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 2px;
    font-weight: 600;
    color: #5f5f67;
    /* text-align: center; */
    width: 250px;
    @media only screen and (max-width: 1160px) {
      /* font-size: 16px; */
      line-height: 10px;
    }
  }
`;
const Numbers = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
  @media only screen and (max-width: 1160px) {
    margin-top: 5px;
  }

  @media only screen and (max-width: 799px) {
    display: none !important;
  }

  p {
    font-family: "Inter", sans-serif;
    /* font-family: var(--font-montserrat); */
    font-size: 40px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 300;
    color: #5f5f67;
    text-align: center;
    width: 250px;

    @media only screen and (max-width: 1160px) {
      /* font-size: 20px; */
      line-height: 15px;
    }
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;
  height: 180px;
  width: 80%;
  padding: 5px;

  p {
    font-family: "Montserrat", sans-serif;
    font-family: 'NeueThin', sans-serif;
    /* font-family: var(--font-montserrat); */
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    color: #5f5f67;
    /* text-align: center; */
    width: 230px;

    @media only screen and (max-width: 1160px) {
      width: 350px;
      /* font-size: 12px; */
    }
  }
`;

export default WorkProgress;
