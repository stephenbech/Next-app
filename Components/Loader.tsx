import React from "react";
import styles from "../styles/components-style/spinner.module.css";
import { BeatLoader } from "react-spinners";
export default function LoadingSpinner() {
  return (
    <>
          {/* <div className={styles.spinner}>
            <div className={styles.loading}>
            </div>
          </div> */}
       <BeatLoader  size={7} color={'blue'}/>
     </>
  );
}