import React, { useState } from "react";
import styles from "./Styles.module.css";
import { FiSearch } from 'react-icons/fi';
import WorkflowCards from "./WorkflowCards";

export default function CICDWorkflowHub() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className={styles.workflowHeader}>
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
      </div>
      <WorkflowCards searchTerm={searchTerm} />
    </>
  );
}
