# 🤝 Sync Adobe Commerce Customer Data to KlickTipp with Value-Based Tagging

> ⚡ **137 views** · 🤝 [CRM & Sales Operations](../)

## Description

![Sync Adobe Commerce Customer Data to KlickTipp with ValueBased Tagging.png](fileId:4068)
Community Node Disclaimer: This workflow uses KlickTipp community nodes.

## Introduction
This workflow monitors orders and customers in Adobe Commerce, automatically creating or updating contacts in KlickTipp, enriching profiles for segmentation and automated messaging. Tags are applied dynamically: high-value orders (≥100) receive a "Premium Customer" tag, and purchases with certain SKUs (e.g., clothing) are assigned product-based tags. Perfect for e-commerce businesses, online retailers, and digital shops that want to eliminate manual data entry and ensure every buyer and customer receives the right messages.

## Setup Instructions
1. **KlickTipp Preparation**
      - Prepare **custom fields**
       - `Payment ID`
       - `Total`
       - `Receipt URL`
       - `Products`
      - Prepare **tags**:
       - `Premium customer`
       - `Clothing buyer`

2. **Credential Configuration**
     - Connect your Magento account using an **Access Token/Base URL** from the Magento Admin Dashboard (System → Extensions → Integrations).
     - Authenticate your KlickTipp connection with **username/password** credentials (API access required).

## Customization
- **Trigger options:** If your Commerce edition supports **webhooks**, you can replace polling with a **Webhook** trigger.  
- **Cadence & overlap:** 1–30 min are typical; a 1–2 min overlap in the filter to avoid gaps.  
- **Routing variants:** Change the SKU list, switch to category checks, or add more value tiers.

## 🔗 Nodes Used

Magento 2, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
