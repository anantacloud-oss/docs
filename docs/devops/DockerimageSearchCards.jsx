import React, { useState } from "react";
import styles from "./cicd/Styles.module.css";
import { FiSearch } from "react-icons/fi";
import CardsDockerimage from "./CardsDockerimage";

export default function DockerimageSearchCards() {
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
      <CardsDockerimage searchTerm={searchTerm} />
    </>
  );
}
