import React from "react";

import styles from "./styles.module.scss";

import logo from "../../../../assets/logo.svg";

// Module 1:
// * add logo.svg as a logo image
// ** TASK DESCRIPTION ** -
// https://ebook.learn.epam.com/react-fundamentals/docs/module-1/home-task/components#logo-component

export const Logo = () => <img className={styles.logo} alt="logo" src={logo} />;
