import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./Styles.module.css";


const categorizedCards = [
  {
    category: "Infrastructure as a Code",
    items: [
      {
        title: "Terraform",
        subtitle: "By HashiCorp",
        icon: <img src="/img/terraform.png" style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }}/>,
        text: "Provision and manage cloud infrastructure with code",
        buttonText: "Configure",
        status: "IaC",
        statusColor: "#5c6bc0",
        isCustom: true,
        link: "/developer-docs/iac/terraform",
      },
      {
        title: "Terragrunt",
        subtitle: "Wrapper for Terraform",
        icon: <img src="/img/terragrunt.png" style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }}/>,
        text: "Keep your Terraform configurations DRY with Terragrunt",
        buttonText: "Configure",
        status: "Terragrunt",
        statusColor: "#00897b",
        isCustom: true,
        link: "/developer-docs/iac/terragrunt",
      },
      {
        title: "Pulumi",
        subtitle: "Modern IaC",
        icon: <img src="/img/pulumi.png" style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }} />,
        text: "Use real languages to define and deploy infrastructure",
        buttonText: "Configure",
        status: "Pulumi",
        statusColor: "#ab47bc",
        isCustom: true,
        link: "/developer-docs/iac/pulumi",
      },
    ],
  },
  {
    category: "Top 3 Security Actions",
    items: [
      {
        title: "Cosign",
        subtitle: "Owner: Ananta Cloud",
        icon: <img src="/img/cosign.webp"  style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }} />,
        text: "Build trust into your supply chain with cryptographic signatures.",
        buttonText: "Configure",
        status: "Image Signing",
        statusColor: "#007acc",
        isCustom: true,
        link: "/developer-docs/security/cosign",
      },
      {
        title: "Trivy",
        subtitle: "By Aqua Security",
        icon: <img src="/img/trivy.png"  style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }} />,
        text: "Comprehensive scanner for containers, IaC, and source code vulnerabilities",
        buttonText: "Configure",
        status: "Vulnerability Scanner",
        statusColor: "#e67e22",
        isCustom: true,
        link: "/developer-docs/security/trivy",
      },
      {
        title: "Clair",
        subtitle: "By Quay",
        icon: <img src="/img/clair.png" style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }} />,
        text: "Performs static vulnerability analysis on container images",
        buttonText: "Configure",
        status: "Security Analysis",
        statusColor: "#8e44ad",
        isCustom: true,
        link: "/developer-docs/security/clair",
      },
    ],
  },
  {
    category: "Continuous Integration",
    items: [
      {
        title: "Maven Build",
        subtitle: "By Apache Maven",
        icon: <img src="/img/maven.png"  style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}}/>,
        text: "Manage builds, dependencies, and documentation with Maven.",
        buttonText: "Configure",
        status: "Maven",
        statusColor: "#1565c0",
        isCustom: true,
        link: "/developer-docs/continuous-integration/maven",
      },
      {
        title: "Gradle Build",
        subtitle: "By Gradle",
        icon: <img src="/img/gradle.png" style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }} />,
        text: "Flexible build automation for Java and Android projects.",
        buttonText: "Configure",
        status: "Gradle",
        statusColor: "#388e3c",
        isCustom: true,
        link: "/developer-docs/continuous-integration/gradle",
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      {
        title: "Source Control",
        subtitle: "By Git Integration",
        icon: <img src="/img/git.png" style={{ width: "135px" , height: "70px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)" }} />,
        text: "Version control with Git-based workflows.",
        buttonText: "Configure",
        status: "Git",
        statusColor: "#8e44ad",
        isCustom: true,
        link: "/developer-docs/version-control/git",
      },
    ],
  },
];

const categoryToRouteMap = {
  "Infrastructure as a Code": "/docs/devops/cicd/iac",
  "Top Security Actions": "/docs/devops/cicd/security",
  "Continuous Integration": "/docs/devops/cicd/continuous-integration",
  "Version Control": "/docs/devops/cicd/version-control",
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
                  <Link to={card.link} className={styles.configureButton}>
                    {card.buttonText}
                  </Link>
                  <span className={styles.status}>
                    {card.status}
                    <span
                      className={styles.statusDot}
                      style={{ backgroundColor: card.statusColor }}
                    />
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
