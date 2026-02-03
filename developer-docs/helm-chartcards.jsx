import React from "react";
import styles from "./Styles.modules.css"; 

const categorizedCards = [
  {
    items: [
      {
        title: "Jenkins Master",
        subtitle: "Enterprise CI Orchestration",
        text: "A production-ready Jenkins controller delivered through Trustary for fast, secure CI setup.",
      },
      {
        title: "Jenkins Agent",
        subtitle: "Elastic Build Capacity",
        text: "Auto-scaling Jenkins agents deployed from Trustary to accelerate parallel pipelines.",
      },
      {
        title: "Github Runner",
        subtitle: "Self-Hosted Actions at Scale",
        text: "Trustary-managed GitHub Actions runners for secure, high-performing workflows.",
      },
      {
        title: "Gitlab Runner",
        subtitle: "Kubernetes-Native CI Power",
        text: "Deploy GitLab CI runners via Trustary with seamless autoscaling and governed configs.",
      },
      {
        title: "Grafana",
        subtitle: "Instant Observability",
        text: "A secure, persistent Grafana stack from Trustary for dashboards and monitoring excellence.",
      },
      {
        title: "CSI Driver",
        subtitle: "Reliable Persistent Storage",
        text: "Trustary-validated CSI driver enabling safe and consistent volume provisioning.",
      },
      {
        title: "Core DNS",
        subtitle: "Lightning-Fast Cluster DNS",
        text: "A high-performance CoreDNS deployment maintained and versioned through Trustary.",
      },
    ],
  },
];

export default function HelmChartCards() {
  return (
    <div>
      {categorizedCards.map((category, idx) => (
        <section key={idx}>
          <h2>{category.category}</h2>

          <div className={styles.cardGrid}>
            {category.items.map((item, index) => (
              <div key={index} className={styles.card}>
                <h3>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
