import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./cicd/Styles.module.css";


const categorizedCards = [
  {
    category: "Docker Images",
    items: [
        {
          title: "Jenkins",
          subtitle: "CI/CD",
          icon: <img src="/img/jenkins.png" style={{ width: "100px", height: "40px" }} />,
          text: "Automate builds, tests, and deployments using Jenkins Docker container.",
          buttonText: "Configure",
          status: "Docker Image",
          statusColor: "#2196f3", 
          isCustom: true,
          link: "/developer-docs/Dockerimage/jenkins"
        },
        {
          title: "Python",
          subtitle: "Runtime",
          icon: <img src="/img/python.png" style={{ width: "100px", height: "40px" }} />,
          text: "Run Python applications in isolated and reproducible environments.",
          buttonText: "Configure",
          status: "Docker Image",
          statusColor: "#2196f3",
          isCustom: true,
          link: "/developer-docs/Dockerimage/python"
        },
        {
          title: "Postgres",
          subtitle: "Database",
          icon: <img src="/img/postgres.png" style={{ width: "100px", height: "40px" }} />,
          text: "Reliable and scalable relational database containerized with Docker.",
          buttonText: "Configure",
          status: "Docker Image",
          statusColor: "#2196f3",
          isCustom: true,
          link: "/developer-docs/Dockerimage/postgres"
        }
            
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


