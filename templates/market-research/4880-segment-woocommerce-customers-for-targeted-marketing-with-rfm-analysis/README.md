# 📊 Segment WooCommerce customers for targeted marketing with RFM analysis

> ⚡ **1,204 views** · 📊 [Market Research & Insights](../)

## Description

## Overview

This workflow is designed for eCommerce store owners and marketing teams who use WooCommerce. It helps segment customers based on their purchasing behavior using the RFM (Recency, Frequency, Monetary) model. By identifying high-value customers, new buyers, and at-risk segments, you can tailor your marketing strategies and improve customer retention.

## How It Works

1. **Trigger**: The workflow can be started manually or on a scheduled basis (e.g., weekly).
2. **Retrieve Orders**: It fetches completed orders from your WooCommerce store from the past year.
3. **RFM Analysis**: It groups orders by customer and calculates their RFM scores.
4. **Customer Segmentation**: Based on RFM scores, customers are categorized into marketing segments (e.g., Champions, At Risk, Lost).
5. **Summary Report**: Generates a styled HTML report with a table summarizing customer segments and suggested marketing actions.

## Setup Instructions

1. **Connect WooCommerce**:

   * Go to the WooCommerce node.
   * Add or select your WooCommerce API credentials. You need the Base URL, Consumer Key, and Consumer Secret.
   * Ensure API access is enabled in your WooCommerce settings.

2. **Customize Segmentation (Optional)**:

   * In the "Calculate RFM Scores" code node, you can adjust the logic that assigns segment labels based on score combinations.
   * You can also update the marketing suggestions in the second "Code" node.

3. **Run the Workflow**:

   * Use the "Manual Start" node for testing.
   * Enable the "Weekly Trigger" node to automate execution.

4. **View Report**:

   * The final HTML node outputs a complete styled report.
   * You can send this via email or integrate it with other services.

## Requirements

* WooCommerce store with API access enabled.
* Valid API credentials (Base URL, Consumer Key, Consumer Secret).
* n8n instance with access to the internet.

## 🔗 Nodes Used

Start, WooCommerce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
