import React, { useState } from "react";
import styles from "./devops/cicd/Styles.module.css";
import { FiSearch } from "react-icons/fi";
import Cardsclouds from "./Cardsclouds";


export default function CloudSearchCards() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Modules"
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Cardsclouds searchTerm={searchTerm} />
    </>
  );
}

