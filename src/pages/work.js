import { motion } from "framer-motion";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";

const Work = () => {

  const { t: translate } = useTranslation("work");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <Page>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Navbar />

          <WorkSection>
            <motion.ul
              style={{ listStyle: "none" }}
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={item}>
                <WorkLi>
                  <WorkDate>
                    <p>{translate("one.year")}</p>
                  </WorkDate>
                  <Content>
                    <WorkTitle>{translate("one.title")}</WorkTitle>
                    <More>{translate("one.subtitle")}</More>
                  </Content>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkDate>
                    <p>{translate("two.year")}</p>
                  </WorkDate>
                  <Content>
                    <WorkTitle>{translate("two.title")}</WorkTitle>
                    <More>{translate("two.subtitle")}</More>
                  </Content>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkDate>
                    <p>{translate("three.year")}</p>
                  </WorkDate>
                  <Content>
                    <WorkTitle>{translate("three.title")}</WorkTitle>
                    <More>{translate("three.subtitle")}</More>
                  </Content>
                </WorkLi>
              </motion.li>

              <motion.li variants={item}>
                <WorkLi>
                  <WorkDate>
                    <p>{translate("four.year")}</p>
                  </WorkDate>
                  <Content>
                    <WorkTitle>{translate("four.title")}</WorkTitle>
                    <More>{translate("four.subtitle")}</More>
                  </Content>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkDate>
                    <p>{translate("five.year")}</p>
                  </WorkDate>
                  <Content>
                    <WorkTitle>{translate("five.title")}</WorkTitle>
                    <More>{translate("five.subtitle")}</More>
                  </Content>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkDate>
                    <p>{translate("six.year")}</p>
                  </WorkDate>
                  <Content>
                    <WorkTitle>{translate("six.title")}</WorkTitle>
                    <More>{translate("six.subtitle")}</More>
                  </Content>
                </WorkLi>
              </motion.li>
            </motion.ul>
          </WorkSection>
        </motion.div>
      </Page>
    </>
  );
};

const Page = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
`;

const WorkSection = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: auto; */
  background-color: #eae9e5;
  @media only screen and (max-width: 580px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
`;

const WorkLi = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  border-bottom: 1px solid #6a6f58;

  @media only screen and (max-width: 580px) {
    width: 80%;
  }
`;

const WorkDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #6a6f58;
    /* font-family: "Bebas Neue", cursive; */
    font-family: var(--font-bebasneue);
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 18px;

    @media only screen and (max-width: 700px) {
      font-size: 16px;
    }
  }

  /* margin-top: 60px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
const WorkTitle = styled.h4`
  /* font-family: "Montserrat", sans-serif; */
  font-family: var(--font-montserrat);
  font-size: 28px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: #6a6f58;
  margin: 0;

  @media only screen and (max-width: 700px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 580px) {
    font-size: 20px;
  }
`;

const More = styled.p`
  /* font-family: "Montserrat", sans-serif; */
  font-family: var(--font-montserrat);
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["work", "footer", "navbar"])),
    },
  };
}

export default Work;
