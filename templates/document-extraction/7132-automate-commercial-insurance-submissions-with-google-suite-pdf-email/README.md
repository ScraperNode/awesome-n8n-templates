# 🔬 Automate commercial insurance submissions with Google Suite, PDF & email

> ⚡ **313 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Overview

Supercharge your insurance agency's efficiency with this powerful automation template for n8n. Designed specifically for commercial insurance brokers and agents, this workflow transforms the tedious process of manual application submissions into a streamlined, one-click operation. Stop wasting hours on administrative tasks and start closing more deals. This template handles everything from reading new applications in a Google Sheet to generating custom PDFs and emailing them to the right carriers all in **40 seconds**, allowing you to focus on what matters most: your clients.

### How it works

This workflow provides a powerful foundation for automating your commercial insurance submissions. It's designed to save you hours of manual work by streamlining the entire process from application intake to carrier communication.

At a high level, this is what the flow does:

* **1. Fetches New Applications:** Automatically reads new insurance applications from a designated Google Sheet.
* **2. Filters Suitable Carriers:** Filters a built-in list of carriers to find the best matches for each application based on revenue and industry requirements.
* **3. Generates Professional PDFs:** For each matched carrier, it automatically generates a professional PDF application using a pre-formatted Google Docs template.
* **4. Distributes to Carriers:** Emails the personalized application and unique PDF attachment to each matched carrier.
* **5. Creates a Summary Report:** Once all submissions are complete, it generates a clean HTML summary report and emails it to the broker.

### Set up steps

**Estimated Set Up Time:** 10-15 minutes

This template is designed for a quick setup. The detailed, step-by-step instructions are included in the Sticky Notes inside the workflow itself.

The main setup steps are:

* **1. Copy the Google Sheet:** Make a copy of the provided Google Sheet template to your own Google Drive.
* **2. Connect Your Google Account:** Authorize your Google account for the three required nodes (Google Sheets, Google Drive, and Google Docs).
* **3. Configure Your Email:** Add your email credentials to the two `Email Send` nodes (one for sending to carriers and one for notifying the broker).

## 🔗 Nodes Used

Send Email, Google Sheets, Google Drive, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
