import React from "react";
import Header from './../components/Header';
import Footer from './../components/Footer';
import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
