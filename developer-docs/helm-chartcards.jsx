import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./devops/cicd/Styles.module.css";


const categorizedCards = [
  {
    category: "Cloud Providers",
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

export default Cards;

