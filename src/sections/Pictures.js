import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import picture1 from "../../public/assets/pictures/pic1extralow.JPG";
import picture2 from "../../public/assets/pictures/pic2extralow.JPG";
import picture3 from "../../public/assets/pictures/pic3extralow.JPG";
import picture6 from "../../public/assets/pictures/pic4extralow.jpg";
import Image from "next/image";

const InstaResume = () => {
  const animation1 = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });
  const [width, setWidth] = useState(null);
  const small = 572;

  useEffect(() => {
    if (inView) {
      animation1.start({
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation1.start({
        opacity: 0,
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
      <InstaResumeSection>
        <div>
          <ResumeGallery>
            <>
              {width >= small ? (
                <>
                  <ImageContainer>
                  <Image src={picture1} className="gallery-image" alt="picture1" />
                  </ImageContainer>
                  <ImageContainer>
                  <Image src={picture2} className="gallery-image" alt="picture2" />
                  </ImageContainer>
                  <ImageContainer>
                  <Image src={picture6} className="gallery-image" alt="picture3" />
                  </ImageContainer>
                  <ImageContainer>
                  <Image src={picture3} className="gallery-image" alt="picture4" />
                  </ImageContainer>
                </>
              ) : (
                <>
                  <Row>
                    <ImageContainer>
                    <Image src={picture3} className="gallery-image" alt="picture1" />
                    </ImageContainer>
                    <ImageContainer>
                    <Image src={picture6} className="gallery-image" alt="picture2" />
                    </ImageContainer>
                  </Row>
                </>
              )}
            </>
          </ResumeGallery>
        </div>
      </InstaResumeSection>
    </>
  );
};

const InstaResumeSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  height: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #faf9f8;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const ImageContainer = styled.div`
  margin: 5px;
  height: 350px;
  width: 250px;

  @media only screen and (max-width: 1100px) {
    height: 280px;
    width: 200px;
  }
  img {
    /* padding: 5px; */

    @media only screen and (max-width: 799px) {
      /* padding: 10px; */
    }
  }

  .gallery-image {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */

    opacity: 1;
  }
  .gallery-image:hover {
    opacity: 0.7;
  }
`;

const ResumeGallery = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  /* @media only screen and (max-width: 800px) {
    width: 70%;
  } */

  /* div {
    height: 350px;
    width: 250px;
    @media only screen and (max-width: 1100px) {
      height: 280px;
      width: 200px;
    }
    img {
      padding: 5px;

      @media only screen and (max-width: 799px) {
        padding: 10px;
      }
    }
  } */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  width: 350px !important;
  justify-content: center;

  @media only screen and (max-width: 350px) {
    width: 300px !important;
  }

  @media only screen and (max-width: 300px) {
    width: 280px !important;
  }

  div {
    @media only screen and (max-width: 1100px) {
      height: 240px;
      width: 170px !important;
      /* background-color: red; */
    }
    img {
      /* padding: 5px; */

      @media only screen and (max-width: 799px) {
        /* padding: 10px; */
      }
    }
  }
`;

export default InstaResume;
