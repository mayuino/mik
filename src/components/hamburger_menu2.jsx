import Gaiyou from "@/pages/gaiyou";
import Link from "next/link";
import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { AiOutlineMenu } from "react-icons/ai";
import mobileStyles from "@/styles/mobile.module.css";
import "@/styles/mobile.module.css";

export const HamburgerMenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "50px",
      left: "36px",
      top: "36px",
      display: "none",
    },
    bmBurgerBars: {
      background: "#FFF",
    },
    bmBurgerBarsHover: {
      background: "#FFF",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      width:"200px",
      height: "100%",
    },
    bmMenu: {
      width:"200px",
      boxSizing:"content-box",
      background: "rgba(255, 255, 255, 0.9)",
      padding: "8px",
      fontSize: "1.15em",
      height: "auto",
      borderRadius: "3%",
      border: "3px solid #ddd",
    },
    bmMorphShape: {
      fill: "rgba(0, 0, 0, 0.3)",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "10px",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.0)",
    },
  };

  return (
    <>
      <AiOutlineMenu size={40} onClick={handleMenuOpen} />
      <Menu isOpen={isOpen} right width={"34%"} styles={styles}>
        <ul>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/start"}>MIKではじめよう</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/people"}>MIKの人々</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/charge_up"}>収入アップ実績</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/different"}>他の派遣会社との違い</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/constitution"}>MIKの構成</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/flow"}>採用までの流れ</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/internal_line"}>社内LINE</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/system"}>独自制度</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/sns"}>SNS</Link>
          </li>
          <li className={mobileStyles.ham2_menu_item}>
            <Link href={"/blog"}>ブログ</Link>
          </li>
        </ul>
      </Menu>
    </>
  );
};

