import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "../sections/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Editing2 = () => {
  const { t: translate } = useTranslation("editing");

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Navbar  />
        <WritingSection>
          <section>
            <H2
              initial={{ y: "20%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              {translate("title")}
            </H2>
            <BoldLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            />

            <Parrafo>
              <div>
                <BoxText> {translate("text3")}</BoxText>{" "}
              </div>
              <motion.p
                   initial={{ y: "10%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 0.8, delay: 0 }}
              > {translate("text")}</motion.p>
            </Parrafo>

            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Text3
                initial={{ x: "-10vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  bounce: 0.1,
                }}
              >
                {translate("text2")}
              </Text3>
            </Link>
          </section>
        </WritingSection>
      </motion.div>
      <Footer view="editing" />
    </Page>
  );
};



const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const WritingSection = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  color: #5f5f67;
  height: auto;
  background-color: #f6f6f6;
  justify-content: center;

  section {
    width: 80%;
    margin: 0 auto;
  }

  /* 
  div {
    width: 70%;
    display: flex;
    flex-direction: column;
 
  } */
`;

const H2 = styled(motion.h2)`
  color: #959985;
  font-family: "Bebas Neue", cursive;
  /* font-family: var(--font-bebasneue); */
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 30px;
  margin-left: 20px;
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #959985;
  height: 2px;
  max-width: 120px;
  margin-top: -45px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

export const Text1 = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  /* font-family: var(--font-montserrat); */
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 1.2px;
  font-weight: 500;
  padding-top: 10px;
  color: #5f5f67;
  text-align: justify;
  margin-top: 50px;

  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 32px;
  }
`;

export const Text3 = styled(motion.p)`
  font-family: "Bebas Neue", cursive;
  /* font-family: var(--font-bebasneue); */
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
  font-weight: 400;
  padding-top: 10px;
  color: #959985;
  width: 600px;
  text-align: justify;
  margin-top: 30px;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  max-width: 100%;
  margin-left: 20px;

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }

  :hover {
    font-weight: 500;
  }
`;

export const Text3Bold = styled(motion.p)`
  font-weight: 700;
`;

const BoxText = styled.p`
  font-family: "Montserrat", sans-serif;
  /* font-family: var(--font-montserrat); */
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 600;
  padding-top: 0px;
  color: #fefefe;
  text-align: left;
  text-transform: uppercase;
  padding: 15px;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const Parrafo = styled.div`
  width: 1040;
  height: 440;
  padding: 20px 20px;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 5px;

  font-family: "Montserrat", sans-serif;
  /* font-family: var(--font-montserrat); */
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 1.2px;
  font-weight: 500;
  padding-top: 10px;
  color: #5f5f67;
  margin-right: 200px;

  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 32px;
    margin-right: 0px;
  }

  div {
    width: 250px;
    height: auto;
    float: right !important;
    background-color: #959985;
    color: white;
    margin: 10px;

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "editing",
          "footer",
          "navbar",
        ])),
      },
    };
  }

export default Editing2;
