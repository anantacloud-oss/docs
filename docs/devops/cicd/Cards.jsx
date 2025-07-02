import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./Styles.module.css";


const categorizedCards = [
  {
    category: "Top 3 Security Actions",
    items: [
      {
        title: "Cosign",
        subtitle: "Owner: Ananta Cloud",
        icon: <img src="/img/cosign.webp" style= {{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate             (900%)"}} />,
        text: "Build trust into your supply chain with cryptographic signatures.",
        buttonText: "Configure",
        status: "Image Signing",
        statusColor: "#007acc",
        isCustom: true,
        link: "/developer-docs/security/cosign",    
      },
      {
        title: "Trivy",
        subtitle: "Owner: Ananta Cloud",
        icon: <img src="/img/trivy.png"  style= {{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate                (900%)"}} />,
        text: "Comprehensive scanner for containers, IaC, and source code vulnerabilities",
        buttonText: "Configure",
        status: "Vulnerability Scanner",
        statusColor: "#e67e22",
        isCustom: true,
        link: "/developer-docs/security/trivy",
      },
      {
        title: "Clair",
        subtitle: "Owner: Ananta Cloud",
        icon: <img src="/img/clair.png"  style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate                (900%)"}} />,
        text: "Performs static vulnerability analysis on container images",
        buttonText: "Configure",
        status: "Security Analysis",
        statusColor: "#8e44ad",
        isCustom: true,
        link: "/developer-docs/security/clair",
      },
      {
        title: "Grype",
        subtitle: "Owner: Ananta Cloud",
        icon: <img src="/img/grype.png"  style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate                (900%)"}} />,
        text: "Vulnerability scanner for container images and filesystems, compatible with Syft.",
        buttonText: "Configure",
        status: "Vulnerability Scanner",
        statusColor: "#d35400",
        isCustom: true,
        link: "/developer-docs/security/grype",
      },
      {
        title: "Syft",
        subtitle: "Owner: Ananta Cloud",
        icon: <img src="/img/syft.png" style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate                (900%)" }} />,
        text: "Generates Software Bill of Materials (SBOM) for container images and code projects.",
        buttonText: "Configure",
        status: "SBOM Generator",
        statusColor: "#16a085",
        isCustom: true,
        link: "/developer-docs/security/syft",
      },
      {
       title: "Kube-bench",
       subtitle: "Owner: Ananta Cloud",
       icon: <img src="/img/kube-bench.png"  style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg)                   saturate(900%)"}} />,
       text: "Checks Kubernetes clusters against CIS security benchmarks for best practices.",
       buttonText: "Configure",
       status: "Kubernetes Security",
       statusColor: "#9b59b6",
       isCustom: true,
       link: "/developer-docs/security/kube-bench",
     },
     {
       title: "Kube-hunter",
       subtitle: "Owner: Ananta Cloud",
       icon: <img src="/img/kube-hunter.png"   style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg)               saturate(900%)"}} />,
       text: "Kubernetes penetration testing tool that identifies security risks in clusters.",
       buttonText: "Configure",
       status: "Kubernetes PenTest",
       statusColor: "#2980b9",
       isCustom: true,
       link: "/developer-docs/security/kube-hunter",
     },
     {
       title: "Checkov",
       subtitle: "Owner: Ananta Cloud",
       icon: <img src="/img/checkov.png"  style={{ width: "120px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate             (900%)" }} />,
       text: "Static code analysis tool for securing infrastructure as code (Terraform, CloudFormation).",
       buttonText: "Configure",
       status: "IaC Security",
       statusColor: "#e74c3c",
       isCustom: true,
       link: "/developer-docs/security/Checkov",
     },
     {
       title: "Falco",
       subtitle: "Owner: Ananta Cloud",
       icon: <img src="/img/falco.png" style={{ width: "120px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate              (900%)"  }} />,
       text: "Cloud-native runtime security tool for detecting unexpected application behavior.",
       buttonText: "Configure",
       status: "Runtime Security",
       statusColor: "#34495e",
       isCustom: true,
       link: "/developer-docs/security/falco",
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
