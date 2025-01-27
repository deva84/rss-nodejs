import React from "react";
import { PuffLoader } from "react-spinners";

import styles from "./styles.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <PuffLoader color="#3f51b5" />
    </div>
  );
};
