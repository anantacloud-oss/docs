---
id: infrastructure-live
title: Infrastructure Live
sidebar_label: Infrastructure Live 
---

# Recommended Folder Structure – Infrastructure Live

A common question from customers is how to structure their Terragrunt code effectively. This document outlines Ananta Cloud's recommended approach to organizing infrastructure code for better **comprehension**, **scalability**, and **development efficiency**.

## 📦 Separating Modules from Live Infrastructure

We strongly recommend **separating the definition of Terraform/OpenTofu modules** from their usage. This enables:

- Independent versioning of modules
- Running different versions across environments (e.g., `v1.0.0` in production, `v2.0.0` in staging)

### 🗂 Recommended Repository Layout

- **`modules/`**: Contains reusable, versioned Terraform/OpenTofu modules (e.g., EKS, VPC).
- **`live/`**: Defines your live infrastructure using Terragrunt, organized by environment/account.

> Think of modules as "blueprints" and the live repo as the "build site."






