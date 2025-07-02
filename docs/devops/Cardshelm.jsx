import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./cicd/Styles.module.css";


const categorizedCards = [
  {
    category: "Helm Chart Tools",
    items: [
     {
      title: "Cold DNS",
      subtitle: "Networking",
      icon: <img src="/img/dns.png" style={{ width: "100px" , height: "40px" }} />,
      text: "Enable DNS resolution and manage domain traffic efficiently in Kubernetes.",
      buttonText: "Configure",
      status: "Helm Chart",
      statusColor: "#4caf50",
      isCustom: true,
      link: ""
     },
     {
      title: "Grafana",
      subtitle: "Visualization",
      icon: <img src="/img/grafana.png" style={{ width: "100px" , height: "40px" }} />,
      text: "Visualize metrics and logs with powerful dashboards and alerts.",
      buttonText: "Configure",
      status: "Helm Chart",
      statusColor: "#4caf50",
      isCustom: true,
      link: ""
     },
     {
      title: "CSI Driver",
      subtitle: "Storage",
      icon: <img src="/img/CSI.png" style={{ width: "100px" , height: "40px" , filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate                     (900%)"}} />,
      text: "Provision and manage persistent volumes with Container Storage Interface.",
      buttonText: "Configure",
      status: "Helm Chart",
      statusColor: "#4caf50",
      isCustom: true,
      link: ""
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

