import React, { useState } from "react";
import styles from "./Styles.module.css";
import {
  FaShieldAlt,
  FaCogs,
  FaCloud,
  FaCodeBranch,
  FaDatabase,
  FaDocker,
  FaLock,
  FaTools,
  FaUserShield,
} from "react-icons/fa";

const categorizedCards = [
  {
    category: "Security",
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
    category: "Infrastructure",
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
      {
        title: "Tooling",
        subtitle: "By Dev rahul",
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

const WorkflowCards = ({ searchTerm = "" }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filteredCategories = categorizedCards
    .map((group) => {
      const categoryMatch = group.category.toLowerCase().includes(searchTerm.toLowerCase());

      const filteredItems = group.items.filter((card) => {
        return (
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
          categoryMatch
        );
      });

      return { ...group, items: filteredItems };
    })
    .filter((group) => group.items.length > 0);

  return (
    <main className={styles.container}>
      {filteredCategories.length === 0 ? (
        <div className={styles.notFound}>Workflow not found.</div>
      ) : (
        filteredCategories.map((group, index) => {
          const isExpanded = expandedCategories[group.category];
          const itemsToShow = isExpanded ? group.items : group.items.slice(0, 3);
          const showViewAll = group.items.length > 3;

          return (
            <div key={index}>
              <h2 className={styles.categoryHeading}>{group.category}</h2>
              <div className={styles.grid}>
                {itemsToShow.map((card, idx) => (
                  <div className={styles.card} key={idx}>
                    <div className={styles.icon}>{card.icon}</div>
                    <h3 className={styles.title}>{card.title}</h3>
                    {card.subtitle && <p className={styles.subtitle}>{card.subtitle}</p>}
                    <p className={styles.text}>{card.text}</p>
                    {card.isCustom && (
                      <div className={styles.cardFooter}>
                        <button className={styles.configureButton}>{card.buttonText}</button>
                        <span className={styles.status}>
                          {card.status}
                          <span
                            className={styles.statusDot}
                            style={{ backgroundColor: card.statusColor }}
                          />
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {showViewAll && (
                <button
                  className={styles.viewAllButton}
                  onClick={() => toggleCategory(group.category)}
                >
                  {isExpanded ? "Show Less" : "View All"}
                </button>
              )}
            </div>
          );
        })
      )}
    </main>
  );
};

export default WorkflowCards;
