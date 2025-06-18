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
        icon: <img src="/img/terraform.svg" />,
        text: "Provision and manage cloud infrastructure with code",
        buttonText: "Configure",
        status: "IaC",
        statusColor: "#5c6bc0",
        isCustom: true,
        link: "/docs/devops/cicd/iac/terraform",
      },
      {
        title: "Terragrunt",
        subtitle: "Wrapper for Terraform",
        icon: <img src="/img/terragrunt.svg" />,
        text: "Keep your Terraform configurations DRY with Terragrunt",
        buttonText: "Configure",
        status: "Terragrunt",
        statusColor: "#00897b",
        isCustom: true,
        link: "/docs/devops/cicd/iac/terragrunt",
      },
      {
        title: "Pulumi",
        subtitle: "Modern IaC",
        icon: <img src="/img/pulumi.svg" />,
        text: "Use real languages to define and deploy infrastructure",
        buttonText: "Configure",
        status: "Pulumi",
        statusColor: "#ab47bc",
        isCustom: true,
        link: "/docs/devops/cicd/iac/pulumi",
      },
    ],
  },
  {
    category: "Top Security Actions",
    items: [
      {
        title: "Cosign",
        subtitle: "By Sigstore",
        icon: <img src="/img/cosign.svg" />,
        text: "Sign and verify container images",
        buttonText: "Configure",
        status: "Image Signing",
        statusColor: "#007acc",
        isCustom: true,
        link: "/docs/devops/cicd/security/cosign",
      },
      {
        title: "Trivy",
        subtitle: "By Aqua Security",
        icon: <img src="/img/trivy.svg" />,
        text: "Scan containers, IaC, and source code for vulnerabilities",
        buttonText: "Configure",
        status: "Scanner",
        statusColor: "#e67e22",
        isCustom: true,
        link: "/docs/devops/cicd/security/trivy",
      },
      {
        title: "Clair",
        subtitle: "By Quay",
        icon: <img src="/img/clair.svg" />,
        text: "Static analysis for vulnerabilities in OCI images",
        buttonText: "Configure",
        status: "Security",
        statusColor: "#8e44ad",
        isCustom: true,
        link: "/docs/devops/cicd/security/clair",
      },
    ],
  },
  {
    category: "Continuous Integration",
    items: [
      {
        title: "Maven Build",
        subtitle: "By Apache Maven",
        icon: <img src="/img/maven.svg" />,
        text: "Manage builds, dependencies, and documentation with Maven.",
        buttonText: "Configure",
        status: "Maven",
        statusColor: "#1565c0",
        isCustom: true,
        link: "/docs/devops/cicd/continuous-integration/maven",
      },
      {
        title: "Gradle Build",
        subtitle: "By Gradle",
        icon: <img src="/img/gradle.svg" />,
        text: "Flexible build automation for Java and Android projects.",
        buttonText: "Configure",
        status: "Gradle",
        statusColor: "#388e3c",
        isCustom: true,
        link: "/docs/devops/cicd/continuous-integration/gradle",
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      {
        title: "Source Control",
        subtitle: "By Git Integration",
        icon: <img src="/img/git.svg" />,
        text: "Version control with Git-based workflows.",
        buttonText: "Configure",
        status: "Git",
        statusColor: "#8e44ad",
        isCustom: true,
        link: "/docs/devops/cicd/version-control/git",
      },
    ],
  },
];

const categoryToRouteMap = {
  "Infrastructure as a Service": "/docs/devops/cicd/iac",
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
