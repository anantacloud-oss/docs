import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./devops/cicd/Styles.module.css";


const categorizedCards = [
  {
    category: "Cloud Providers",
    items: [
     {
       title: "Amazon Web Services",
       subtitle: "By Amazon",
       icon: <img src="/img/aws.png" style={{ width: "100px", height: "40px" }} />,
       text: "Scalable cloud services for compute, storage, networking, and more.",
       buttonText: "Get Modules",
       status: "Cloud Platform",
       statusColor: "#ff9900", 
       isCustom: true,
       link: "/developer-docs/cloud/aws",
    },
    {
      title: "Microsoft Azure",
      subtitle: "By Microsoft",
      icon: <img src="/img/azure.png" style={{ width: "100px", height: "40px" }} />,
      text: "Build, run, and manage apps across multiple clouds with Azure.",
      buttonText: "Get Modules",
      status: "Cloud Platform",
      statusColor: "#0072c6", 
      isCustom: true,
      link: "/developer-docs/cloud/azure",
    },
    {
       title: "DigitalOcean",
       subtitle: "By DigitalOcean",
       icon: <img src="/img/digitalocean.png" style={{ width: "100px", height: "35px" }} />,
       text: "Simple cloud hosting for developers and teams.",
       buttonText: "Get Modules",
       status: "Cloud Platform",
       statusColor: "#0080FF", 
       isCustom: true,
       link: "/developer-docs/cloud/digitalocean",
     },
    {
      title: "Google Cloud Platform",
      subtitle: "By Google",
      icon: <img src="/img/gcp.png" style={{ width: "100px", height: "50px", filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg) saturate(900%)"          }} />,
      text: "Modern infrastructure and data services built on Google's backbone.",
      buttonText: "Get Modules",
      status: "Cloud Platform",
      statusColor: "#4285F4", 
      isCustom: true,
      link: "/developer-docs/cloud/gcp",
     },
     {
       title: "Oracle Cloud Infrastructure",
       subtitle: "By Oracle",
       icon: <img src="/img/oracle-cloud.png" style={{ width: "100px", height: "40px", filter: "grayscale(1) brightness(1.1) sepia(1) hue-rotate(190deg)        saturate(900%)" }} />,
       text: "High-performance cloud infrastructure and apps with OCI.",
       buttonText: "Get Modules",
       status: "Cloud Platform",
       statusColor: "#F80000", 
       isCustom: true,
       link: "/developer-docs/cloud/oci",
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


