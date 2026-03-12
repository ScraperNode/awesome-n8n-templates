# 🔒 OTX & OpenAI web security check

> ⚡ **6,997 views** · 🔒 [SecOps & Security Automation](../)

## Description

# This n8n workflow automates website security audits. It combines direct website scanning, threat intelligence from AlienVault OTX, and advanced analysis from an OpenAI large language model (LLM) to generate and email a comprehensive security report.

## How it Works (Workflow Flow):

Input: A user provides a website URL via a simple web form.
**Data Collection:**
An HTTP Request node visits the provided URL to gather initial data (status code, headers).
An AlienVault HTTP Request node queries AlienVault OTX for known threats associated with the website's hostname.
**Data Preparation (Prepare Data for AI):** A custom code node consolidates the collected website data and AlienVault intelligence, performing initial checks for common issues (e.g., error codes, missing security headers, AlienVault warnings).
**AI Analysis (Security Configuration Audit):** The prepared data is sent to an OpenAI Chat Model, which acts as a cybersecurity expert. The AI analyzes the data to identify vulnerabilities, explain their impact, suggest exploitation methods, and outline mitigation steps.
**Report Formatting (Format Report for Email):** Another custom code node takes the AI's plain-text report and converts it into a structured HTML format suitable for email.
**Delivery (Send Security Report):** The final HTML report is sent via Gmail to a specified email address.

### **Setup Steps:**

To use this workflow, you'll need an n8n instance and the following credentials:

n8n Instance: Ensure your n8n environment is running.
**OpenAI API Key:**
Generate a key from OpenAI.
Add an "OpenAI API" credential in n8n (e.g., "OpenAI account").
**AlienVault OTX API Key:**
Obtain a key from your AlienVault OTX profile.
Add an "AlienVault OTX API" credential in n8n (e.g., "AlienVault account").
**Gmail Account:**
Set up a "Gmail OAuth2" credential in n8n for sending emails (recommended for security; involves Google Cloud setup).
**Import Workflow:**
Copy the workflow's JSON code.
In n8n, import the workflow via "Workflows" &gt; "New" &gt; "Import from JSON".
**Configure Recipient:**
In the "Send Security Report" node, specify the email address where reports should be sent.
**Activate:** Enable the workflow to start processing submissions.

Once activated, access the "On form submission" webhook URL to input a URL and trigger an audit.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
