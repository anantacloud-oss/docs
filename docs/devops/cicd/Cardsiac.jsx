import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./Styles.module.css";


const categorizedCards = [
  {
    category: "Infrastructure as a Code",
    items: [
      {
<<<<<<< HEAD
        title: "Terraform",
        subtitle: "By HashiCorp",
        icon: <img src="/img/terraform.png" style= {{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Provision and manage cloud infrastructure with code",
=======
        title: "Cosign",
        subtitle: "Owner: Ananta Cloud",
        icon: <img src="/img/cosign.webp" style= {{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Build trust into your supply chain with cryptographic signatures.",
>>>>>>> 8ad5ca7a1da60f48d81d20ff1d9bf2589937696c
        buttonText: "Configure",
        status: "Infrastructure as Code",
        statusColor: "#007acc",
        isCustom: true,
        link: "/developer-docs/iac/terraform",    
      },
      {
<<<<<<< HEAD
        title: "Terragrunt",
        subtitle: "By Gruntwork",
        icon: <img src="/img/terragrunt.png"  style= {{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Keep your Terraform configurations DRY with Terragrunt",
=======
        title: "Trivy",
        subtitle: "By Aqua Security",
        icon: <img src="/img/trivy.png"  style= {{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Comprehensive scanner for containers, IaC, and source code vulnerabilities",
>>>>>>> 8ad5ca7a1da60f48d81d20ff1d9bf2589937696c
        buttonText: "Configure",
        status: "IaC Wrapper",
        statusColor: "#e67e22",
        isCustom: true,
        link: "/developer-docs/iac/terragrunt",
      },
      {
<<<<<<< HEAD
        title: "Pulumi",
        subtitle: "By Pulumi Corp",
        icon: <img src="/img/pulumi.png"  style={{ width: "135px" , height: "60px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Use real languages to define and deploy infrastructure",
=======
        title: "Clair",
        subtitle: "By Quay",
        icon: <img src="/img/clair.png"  style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"}} />,
        text: "Performs static vulnerability analysis on container images",
>>>>>>> 8ad5ca7a1da60f48d81d20ff1d9bf2589937696c
        buttonText: "Configure",
        status: "Infrastructure as Code",
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

