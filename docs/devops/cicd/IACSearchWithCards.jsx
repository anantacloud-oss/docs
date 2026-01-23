import React, { useState } from "react";
import styles from "./Styles.module.css";
import { FiSearch } from "react-icons/fi";
import Cardsiac from "./Cardsiac";

export default function IACSearchWithCards() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.iacPageWrapper}>
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
      <Cardsiac searchTerm={searchTerm} />
    </div>
  );
}

