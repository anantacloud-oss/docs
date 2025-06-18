import React, { useState } from "react";
import Link from '@docusaurus/Link';
import styles from "./Styles.module.css";
import {
  FaShieldAlt,
  FaCogs,
  FaCloud,
  FaCodeBranch,
  FaDatabase,
  FaDocker,
  FaLock,
  FaUserShield,
  FaSignature,     
  FaBug,          
  FaSearch,
  FaTools,
} from "react-icons/fa";

const categorizedCards = [
   {
    category: "Deployment",
    items: [
      {
        title: "Security",
        subtitle: "By DevSecOps",
        icon: <FaShieldAlt />,
        text: "End-to-end security from code to cloud.",
        buttonText: "Configure",
        status: "Security",
        statusColor: "#28a745",
        isCustom: true,
      },
      {
        title: "Secrets Mgmt",
        subtitle: "By Vault",
        icon: <FaLock />,
        text: "Securely manage sensitive credentials.",
        buttonText: "Enable",
        status: "Secrets",
        statusColor: "#c0392b",
        isCustom: true,
      },
      {
        title: "Access Control",
        subtitle: "By RBAC",
        icon: <FaUserShield />,
        text: "Set roles and permissions for your team.",
        buttonText: "Set Roles",
        status: "Access",
        statusColor: "#9c27b0",
        isCustom: true,
      },
    ],
  },
  {
    category: "Security",
    items: [
     {
        title: "Cosign",
        subtitle: "By Sigstore",
        icon: <FaSignature />,
        text: "Sign and verify container images",
        buttonText: "Verify",
        status: "Image Signing",
        statusColor: "#007acc",
        isCustom: true,
     },
     {
        title: "Trivy",
        subtitle: "By Aqua Security",
        icon: <FaBug />,
        text: "Scan containers, IaC, and source code for vulnerabilities",
        buttonText: "Scan",
        status: "Scanner",
        statusColor: "#e67e22",
        isCustom: true,
     },
     {
        title: "Clair",
        subtitle: "By Quay",
        icon: <FaSearch />,
        text: "Static analysis for vulnerabilities in OCI images",
        buttonText: "Analyze",
        status: "Security",
        statusColor: "#8e44ad",
        isCustom: true,
     },

    ],
  },
  {
    category: "Continuous Integration",
    items: [
      {
        title: "CI/CD Pipeline",
        subtitle: "By GitHub Actions",
        icon: <FaCogs />,
        text: "Automate your build and deployment workflows.",
        buttonText: "Setup",
        status: "CI/CD",
        statusColor: "#ff9800",
        isCustom: true,
      },
      {
        title: "Docker Build",
        subtitle: "By Docker Hub",
        icon: <FaDocker />,
        text: "Build and push Docker images to registry.",
        buttonText: "Configure",
        status: "Docker",
        statusColor: "#0db7ed",
        isCustom: true,
      },
      {
        title: "Source Control",
        subtitle: "By Git Integration",
        icon: <FaCodeBranch />,
        text: "Version control with Git-based workflows.",
        buttonText: "Connect",
        status: "Git",
        statusColor: "#8e44ad",
        isCustom: true,
      },
    ],
  },
  {
    category: "Automation",
    items: [
      {
        title: "Cloud Infrastructure",
        subtitle: "By Terraform",
        icon: <FaCloud />,
        text: "Provision infrastructure across cloud providers.",
        buttonText: "Deploy",
        status: "Infra",
        statusColor: "#3a86ff",
        isCustom: true,
      },
      {
        title: "Database Ops",
        subtitle: "By DBaaS",
        icon: <FaDatabase />,
        text: "Easily provision and manage your databases.",
        buttonText: "Launch",
        status: "Database",
        statusColor: "#00796b",
        isCustom: true,
      },
      {
        title: "Tooling",
        subtitle: "By Dev Tools",
        icon: <FaTools />,
        text: "Utilize CLI, monitoring, and integrations.",
        buttonText: "Explore",
        status: "Tools",
        statusColor: "#2c3e50",
        isCustom: true,
      },
    ],
  },
];


const categoryToRouteMap = {
  "Security": "/docs/devops/cicd/security",
  "Deployment": "/docs/devops/cicd/deployment",
  "Automation": "/docs/devops/cicd/automation",
  "Continuous Integration": "/docs/devops/cicd/continuous-integration",
};



const WorkflowCards = ({ searchTerm = "" }) => {
  const filteredCategories = categorizedCards
    .map((group) => {
      const filteredItems = group.items.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...group, items: filteredItems };
    })
    .filter((group) => group.items.length > 0);

  return (
    <main className={styles.container}>
      {filteredCategories.map((group, index) => (
        <div key={index}>
          <h2 className={styles.categoryHeading}>{group.category}</h2>
          <div className={styles.grid}>
            {group.items.map((card, idx) => (
              <div className={styles.card} key={idx}>
                <div className={styles.icon}>{card.icon}</div>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.subtitle}>{card.subtitle}</p>
                <p className={styles.text}>{card.text}</p>
                <div className={styles.cardFooter}>
                  <button className={styles.configureButton}>{card.buttonText}</button>
                  <span className={styles.status}>
                    {card.status}
                    <span className={styles.statusDot} style={{ backgroundColor: card.statusColor }} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link className={styles.viewAllButton} to={categoryToRouteMap[group.category]}>
            View All
          </Link>
        </div>
      ))}
    </main>
  );
};

export default WorkflowCards;