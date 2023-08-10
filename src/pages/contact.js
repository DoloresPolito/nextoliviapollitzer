import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { Parallax } from "react-scroll-parallax";
// import { Ring } from "@uiball/loaders";
import SocialMedia from "../components/SocialMedia";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ColorRing } from "react-loader-spinner";

const Contact = () => {
  const { t: translate } = useTranslation("contact");

  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);
    try {
      axios.post("./api/send-email", formData);
      // alert("Correo enviado correctamente.");
      setSending(false);
      setMessageSent(true);
      // setMessageSent(true);
    } catch (error) {
      alert("Error al enviar el correo.");
      setSending(false);
    
      // setMessageError(true);
      console.error(error);
    }
  };

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar />
        <ContactSection style={{ backgroundColor: "#EAE9E5" }}>
          {messageSent ? (
            <SentSection>
              <h2 style={{ color: "#6A6F58" }}> {translate("thankyou")}</h2>
              <h4 style={{ color: "#6A6F58" }}> {translate("messageSent")}</h4>
              <SocialMedia />
            </SentSection>
          ) : (
            <>
              <Column1
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* <Parallax speed={-3}> */}
                <h4
                  as={motion.h2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                >
                  {translate("subtitle2")}
                </h4>
                {/* </Parallax> */}
                <SocialMedia />
              </Column1>
              <Column2
                initial={{ x: "30px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <>
                  {sending ? (
                  <RingContainer>
                  {/* <div> */}
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  {/* </div> */}
                </RingContainer>
                  ) : (
                    <FormContainer>
                      <Form2
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <Input2
                          className="form-item"
                          placeholder={translate("fullname")}
                          type="text"
                          required
                          value={contact.name}
                          name="name"
                          onChange={handleChange}
                        />

                        <Input2
                          className="form-item"
                          placeholder={translate("email")}
                          value={contact.email}
                          onChange={handleChange}
                          name="email"
                          type="text"
                          required
                        />

                        <Input2
                          className="form-item"
                          placeholder={translate("message")}
                          value={contact.message}
                          onChange={handleChange}
                          name="message"
                          type="text"
                          required
                        />

                        <button
                          type="submit"
                          className="bottom-form"
                          style={{ fontSize: "16px", cursor: "pointer" }}
                        >
                          {translate("send")}
                        </button>
                      </Form2>
                    </FormContainer>
                  )}

                  {/* <Parallax speed={2}></Parallax> */}
                </>
              </Column2>
            </>
          )}
        </ContactSection>
      </motion.div>
      <Footer view="contact" />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "contact",
        "footer",
        "navbar",
      ])),
    },
  };
}

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const ContactSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 1230px) {
    height: auto;
    padding-top: 20px;
  }
`;

const Column2 = styled(motion.div)`
  width: 700px;
  height: 400px;
  margin-top: 20px;
`;

const Column1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  margin-left: 30px;

  @media only screen and (max-width: 535px) {
    width: 80%;
  }

  h4 {
    display: flex;
    justify-content: center;
    color: #6a6f58;
    font-family: "Bebas Neue", cursive;
    /* font-family: var(--font-bebasneue); */
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 50px;
    margin-top: 50px;

    @media only screen and (max-width: 700px) {
      font-size: 40px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 35px;
      width: auto;
    }
  }
`;

const RingContainer = styled.div`
  position: relative;
  top: 100px;
  left: 50%;
`;

const FormContainer = styled.div`
  width: 500px;
  margin-left: 90px;
  margin-top: -40px;

  @media only screen and (max-width: 1045px) {
    width: 500px;
  }

  @media only screen and (max-width: 1230px) {
    margin-top: -80px;
  }

  @media only screen and (max-width: 700px) {
    margin: -80px auto;
  }

  @media only screen and (max-width: 535px) {
    width: 80%;
  }
`;

const Form2 = styled(motion.form)`
  list-style: none;
  text-decoration: none !important;
  font-size: 20px !important;
  text-align: center;
  align-items: center;
  padding-top: 100px;
  max-width: 1000px;
  font-weight: 300;
  letter-spacing: 2px;
  vertical-align: middle !important;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }

  @media only screen and (max-width: 535px) {
    width: 100%;
    margin: -50px auto;
  }

  button {
    margin-top: 30px;
    width: 80px;
    padding: 10px;
    color: #dad6cc;
    background-color: #6a6f58;
    border-radius: 20px;
    border: 1px solid #6a6f58;
    font-family: "Bebas Neue", cursive;
    /* font-family: var(--font-bebasneue); */
    letter-spacing: 1.2px;

    :hover {
      scale: 1.03;
      opacity: 0.8;
    }
  }
`;

const Input2 = styled.input`
  padding: 20px;
  width: 100%;
  height: 12px;
  margin: 0.5rem;
  background-color: #eae9e5;
  border-radius: 20px;
  border: 1px solid #6a6f58;
  margin-bottom: 12px;
`;

const SentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
  margin-top: -30px;


  @media only screen and (max-width: 700px) {

    }

    @media only screen and (max-width: 440px) {

      justify-content: flex-start;
      height:auto;
    margin-bottom: 40px;
    }

  h2 {
 
    font-family: "Montserrat";
    /* font-family: "Bebas Neue", cursive; */
    @media only screen and (max-width: 700px) {
      margin-top: 80px;
    }
    @media only screen and (max-width: 440px) {
      margin-top: 100px;
      font-size: 14px;
    }
  }

  h4 {
    display: flex;
    justify-content: center;
    color: #6a6f58;
    font-family: "Bebas Neue", cursive;
    /* font-family: "Montserrat"; */
    /* font-family: var(--font-bebasneue); */
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 50px;
    margin-top: 50px;
    width: 600px;
    align-self: center;
    text-align: center;

    @media only screen and (max-width: 700px) {
      font-size: 40px;
      width: 400px;
  
    }

    @media only screen and (max-width: 440px) {
      font-size: 35px;
      width: 300px;
    }
  }
`;

export default Contact;
