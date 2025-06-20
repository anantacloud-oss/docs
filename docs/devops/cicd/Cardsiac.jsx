import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./Styles.module.css";


const categorizedCards = [
  {
    category: "Infrastructure as a Code",
    items: [
      {
        title: "Cosign",
        subtitle: "By Sigstore",
        icon: <img src="/img/cosign.webp" style= {{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Sign and verify container images to ensure trusted supply chains",
        buttonText: "Configure",
        status: "Image Signing",
        statusColor: "#007acc",
        isCustom: true,
        link: "/developer-docs/iac/terraform",    
      },
      {
        title: "Trivy",
        subtitle: "By Aqua Security",
        icon: <img src="/img/trivy.png"  style= {{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Comprehensive scanner for containers, IaC, and source code vulnerabilities",
        buttonText: "Configure",
        status: "Vulnerability Scanner",
        statusColor: "#e67e22",
        isCustom: true,
        link: "/developer-docs/iac/terragrunt",
      },
      {
        title: "Clair",
        subtitle: "By Quay",
        icon: <img src="/img/clair.png"  style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Performs static vulnerability analysis on container images",
        buttonText: "Configure",
        status: "Security Analysis",
        statusColor: "#8e44ad",
        isCustom: true,
        link: "/developer-docs/iac/pulumi",
      },
      
    ],
  },
]; 


const Cards = ({ searchTerm = "" }) => {
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
        </div>
      ))}
    </main>
  );
};

export default Cards;

