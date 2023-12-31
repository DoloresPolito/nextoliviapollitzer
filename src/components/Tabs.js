import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Tabs = ({ mode, open, setOpen }) => {
  const { t: translate } = useTranslation("navbar");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TabsBox>
        <Link href="/">{translate("cero")}</Link>

        <div>
          <Link href="/editing">{translate("sublink1")}</Link>

          <Link href="/writing">{translate("sublink2")}</Link>
        </div>

        <Link href="/work" onClick={() => handleClose()}>
          {translate("one")}
        </Link>
        <Link href="/bio" onClick={() => handleClose()}>
          {translate("two")}
        </Link>
        <Link href="/contact" onClick={() => handleClose()}>
          {translate("three")}
        </Link>
      </TabsBox>
    </>
  );
};

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 5;
  margin-top: 40px;
  /* position: relative; */

  a {
    font-family: "Montserrat";
    /* font-family: var(--font-montserrat); */
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: #5f5f67;
    cursor: pointer;
    padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")};
    border: 0px solid;
    display: flex;
    align-items: center;
    width: 100px;

    height: 40px;
    padding: 10px;
    margin: 0px 35px 0 0;
    &:hover,
    &:active,
    &:focus {
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    a {
      height: 15px;
    }
  }
`;

export default Tabs;
