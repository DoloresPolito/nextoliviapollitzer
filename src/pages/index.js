import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WorkProgress from "../sections/WorkProgress";
import Services from "../sections/Services";
import Pictures from "../sections/Pictures";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";
import Cover from "../sections/Cover";

const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <Services />
      <WorkProgress />
      <Pictures />
      <Footer />
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
