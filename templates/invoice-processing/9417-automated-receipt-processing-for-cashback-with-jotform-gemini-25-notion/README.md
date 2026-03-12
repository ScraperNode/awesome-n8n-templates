# 🧾 Automated receipt processing for cashback with Jotform, Gemini 2.5 & Notion

> ⚡ **54 views** · 🧾 [Invoice Processing](../)

## Description

## 📈 Automated Customer Rewards Platform: Jotform Integration

This blueprint details a highly efficient, AI-powered workflow designed to automate customer reward fulfillment. Leveraging the accessible interface of Jotform, this system delivers superior reliability and exceptional processing speed.

## 📊 Reliability, Productivity, and Performance
This workflow is engineered to maximize operational efficiency and maintain data integrity:

* Instant Fulfillment: Automation handles receipt scanning (OCR), AI calculation, logging, and notification in seconds, eliminating manual delays.
* Seamless Data Capture: Leverages the **user-friendly Jotform** interface for fast, reliable customer submission and file uploads. 
## 🛠️ Quick Configuration Guide
* **Jotform Webhook:** In your **JotForm** settings, paste the n8n **Jotform Trigger URL** into the Webhook Integration. Done.
* **API Access:** Generate a **"Full Access"** JotForm API key and insert it into the required n8n nodes (Jotform Trigger and Fetch All Receipts).
* **Credential Setup:** Plug in your necessary API keys (Gemini, OCR.Space) and update the Notion Database ID and internal email recipient.
## 🚀 How It Works (Practical Flow)
* **1. Submission:** Customer submits their request via **Jotform**.
* **2. Processing:** System extracts text from the receipt (OCR), the AI calculates the reward, and the If node verifies the total.
* **3. Fulfillment:** Transaction logged, confirmation emails sent to both the customer and the internal team.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

HTTP Request, Jotform Trigger, Gmail, Notion, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
