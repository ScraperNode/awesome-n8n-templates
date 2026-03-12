# 🎯 Automate Client Onboarding with GPT-4o-mini, Asana, Slack, Google Drive and Gmail

> ⚡ **111 views** · 🎯 [AI Summarization & Classification](../)

## Description

Automate the **complete client onboarding process** for AI automation services using **n8n**, **Asana**, **Slack**, **Google Drive**, and **Gmail**.
This workflow ensures a consistent, professional, and scalable onboarding experience for every new client.

---

## 📌 Purpose

This workflow is designed to:

* Eliminate manual setup tasks during client onboarding
* Automatically create client-specific resources (folders, projects, channels)
* Ensure smooth communication between your team and the client
* Deliver instant confirmation and welcome emails to the client

---

## ⚡ Trigger

The workflow is triggered by an **n8n Form submission** (`Client Onboarding Form`) where clients provide:

* **Name**
* **Email**
* **Company Name**
* **Website**
* **Proposal/Scope Document (PDF)**

---

## 🛠️ Actions Performed

Once the form is submitted, the workflow executes the following steps:

1. **Extract Proposal/Scope Document**

   * Reads the uploaded PDF and extracts key information.

2. **Rename & Store Project Data**

   * Standardizes project information for downstream steps.

3. **Google Drive Setup**

   * Creates a client folder in Drive
   * Stores the uploaded document
   * Saves folder ID for references

4. **Asana Setup**

   * Creates a **new Asana Project** from a template
   * Uses AI (OpenAI GPT-4o-mini) to parse the proposal and **generate 20–30 detailed onboarding tasks**
   * Populates Asana with automatically assigned tasks and due dates

5. **Slack Setup**

   * Creates a **dedicated client Slack channel** (named dynamically using the company name)
   * Posts a **welcome message** with next steps and checklist

6. **Welcome Email**

   * Sends a personalized email to the client, including:

     * Google Drive folder link
     * Asana project access
     * Slack channel invite
     * Onboarding call scheduler link

---

## 🔧 Configuration Notes

Before using this workflow, configure:

### 1. Google Drive

* Set up OAuth2 credentials
* Ensure the account has **folder creation permissions**

### 2. Asana

* Set up OAuth2 credentials
* Verify workspace permissions
* Ensure the correct **project template** is available

### 3. Slack

* Create a Slack App with **bot permissions**
* Add OAuth scopes:

  * `channels:write`
  * `chat:write`
  * `users:read.email`

### 4. Email (SMTP or Gmail OAuth2)

* Configure SMTP/Gmail credentials for internal notifications
* Update **recipient email address**

---

## 📬 Example Outputs

### ✅ Slack Channel Creation

![Slack Welcome Message](https://i.ibb.co/60ZL8mV5/Screenshot-2025-08-20-at-16-04-27.png)

### ✅ Welcome Email

![Welcome Email](https://i.ibb.co/CszkQvcp/Screenshot-2025-08-20-at-16-31-41.png)

### ✅ Asana Tasks
![Screenshot 20250820 at 16.35.15.png](fileId:2161)

---

## 🚦 Suggested Triggers

While currently triggered by an **n8n Form**, you can adapt this workflow to start from:

* **Payment received** (Stripe/PayPal integration)
* **Contract signed** (DocuSign/HelloSign)
* **CRM Opportunity Change** (HubSpot/Pipedrive/Salesforce)

---

## 🏷️ Tags

`onboarding` · `automation` · `asana` · `slack` · `google-drive` · `client-success`

---

## 📢 Notes

* If due dates fall on weekends, they are rolled forward to the next business day.
* Task breakdown leverages AI to **generate detailed, sequential, and actionable onboarding steps**.
* This workflow is optimized for **scalability**, ensuring every new client receives the same structured onboarding experience.

---

## 🔗 Nodes Used

Asana, Slack, Google Drive, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
