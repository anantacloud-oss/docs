import React, { useState } from "react";
import styles from "./Styles.module.css";
import { FiSearch } from "react-icons/fi";
import Cardsversion from "./Cardsversion";

export default function VersionControlSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search workflows"
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Cardsversion searchTerm={searchTerm} />
    </>
  );
}


