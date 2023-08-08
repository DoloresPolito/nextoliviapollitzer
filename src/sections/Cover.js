import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import logo from "../../public/assets/logos/cover/logocover.png";
import Image from "next/image";

const Cover = () => {
  const [width, setWidth] = useState(null);
  const medium = 800;
  const small = 450;

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
      {width >= small ? (
        <>
          <CoverSection width={width}>
            <Image src={logo} alt="logo" className="logo" />
          </CoverSection>
        </>
      ) : (
        <>
          <CoverSectionMobile width={width}></CoverSectionMobile>
        </>
      )}
    </>
  );
};

// const Page = styled.div`
//   height: 100%;
//   width: 100%;
// `;

// const Logo = styled.img`
//   position: absolute;
//   height: 600px;
//   width: 600px;
//   top: 40px;

//   @media only screen and (max-width: 1160px) {
//     height: 500px;
//     width: 500px;
//     top: 80px;
//   }

//   @media only screen and (max-width: 700px) {
//     height: 400px;
//     width: 400px;
//     top: 110px;
//   }

//   @media only screen and (max-width: 450px) {
//     height: 350px;
//     width: 350px;
//     top: 15vh !important;
//   }

//   @media only screen and (max-width: 350px) {
//     height: 300px;
//     width: 300px;
//     top: 15vh !important;
//   }
// `;
const CoverSection = styled.div`
  width: 100%;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  /* height: auto; */
  background-image: url("/assets/pictures/heroextralow.jpg");
  background-size: cover;
  background-position: center;
  .logo {
    position: absolute;
    height: 600px;
    width: 600px;
    top: 70px;

    @media only screen and (max-width: 1160px) {
      height: 500px;
      width: 500px;
      top: 80px;
    }

    @media only screen and (max-width: 700px) {
      height: 400px;
      width: 400px;
      top: 110px;
    }

    @media only screen and (max-width: 450px) {
      height: 350px;
      width: 350px;
      top: 15vh !important;
    }

    @media only screen and (max-width: 350px) {
      height: 300px;
      width: 300px;
      top: 15vh !important;
    }
  }

  @media only screen and (max-width: 450px) {
    height: 500px !important;
  }
`;
const CoverSectionMobile = styled.div`
  width: 100%;
  /* height: 100vh !important; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  background-image: url("/assets/pictures/heroextralowmobile.png");
  background-size: cover;
  /* height: calc(100vh - 100px); */
  height: 80vh;
`;

export default Cover;
