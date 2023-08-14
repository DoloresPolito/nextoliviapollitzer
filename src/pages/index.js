import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WorkProgress from "../sections/WorkProgress";
import Services from "../sections/Services";
import Pictures from "../sections/Pictures";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";
import Cover from "../sections/Cover";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <Navbar />
      <Cover />
      <Services />
      <WorkProgress />
      <Pictures />
      <Footer />
      </motion.div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "about",
        "workprogress",
        "services",
        "footer",
        "navbar",
      ])),
    },
  };
}

export default Home;
