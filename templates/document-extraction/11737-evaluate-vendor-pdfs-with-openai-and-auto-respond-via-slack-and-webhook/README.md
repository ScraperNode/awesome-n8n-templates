# 🔬 Evaluate vendor PDFs with OpenAI and auto-respond via Slack and webhook

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# **AI Vendor / Partner Proposal Evaluation & Auto-Response System**

---

## **Description**

Automate vendor and partner proposal evaluation from slow, manual PDF reviews into a fast, consistent, and AI-powered decision workflow.

This workflow accepts proposal PDFs via webhook, extracts and cleans document content, uses AI to analyze proposals for key information and risks, and automatically decides whether the proposal should be **flagged for review or approved instantly**.

The system guarantees **one proposal = one decision**, eliminates duplicate outputs, and ensures stakeholders are notified immediately when risks are detected — while low-risk proposals are auto-approved without human intervention.

---

## **What This Workflow Does**

Transforms vendor proposal evaluation into a single, reliable automation:

📥 **Proposal Intake via Webhook** – Accepts vendor or partner proposal PDFs through an API-ready webhook endpoint.

📄 **PDF Download & Text Extraction** – Downloads the submitted PDF and extracts readable text from the document.

🧹 **Text Cleanup & Normalization** – Removes noise such as headers, page numbers, and repeated titles to improve AI accuracy.

🧠 **AI Proposal Evaluation** – Uses OpenAI to summarize the proposal, extract key points, identify the category, and detect risks or missing information.

🧩 **Structured JSON Parsing** – Converts AI output into clean, automation-safe JSON.

⚖️ **Risk Decision Logic** – Calculates a single risk flag for the entire proposal (no fragmented decisions).

🚨 **Risk Alerts** – Sends a structured Slack alert when risks are detected, prompting manual review.

✅ **Auto-Approval Flow** – Automatically approves proposals with no risks and returns a success response via webhook.

---

## **Key Features**

🤖 **AI-Powered Proposal Analysis** – Consistent summaries and risk detection across all proposals.

📄 **PDF-First Workflow** – Designed specifically for real-world proposal documents.

⚖️ **One Proposal = One Decision Logic** – Prevents duplicate items or conflicting outcomes.

🚨 **Instant Risk Notifications** – Alerts stakeholders the moment issues are detected.

✅ **Automatic Approvals** – Saves time by instantly approving low-risk proposals.

⚙️ **Automation-Safe JSON Output** – Perfect for extending into CRMs, databases, or dashboards.

---

## **Perfect For**

🏢 Procurement & Vendor Management Teams
🤝 Partnerships & Business Development Teams
📊 Operations & Strategy Teams
🚀 Startups reviewing vendor or partner proposals
🧾 Compliance & Risk Review Teams

---

## **What You’ll Need**

### **Required Integrations**

🤖 **OpenAI** – Proposal evaluation, summarization, and risk detection
💬 **Slack** – Risk alerts and internal notifications
🌐 **Webhook Access** – Proposal submission endpoint

---

## **Optional Enhancements**

📄 **PDF Report Generation** – Create downloadable AI evaluation reports
📊 **Google Sheets / Database Logging** – Track proposal decisions
📧 **Email Notifications** – Notify vendors of approval or next steps
🗂 **CRM Integration** – Push approved vendors into onboarding systems
🌍 **Multi-Language Analysis** – Support international proposals

---

## **Quick Start**

1️⃣ Import the workflow into your n8n workspace
2️⃣ Add OpenAI and Slack credentials
3️⃣ Deploy the webhook and copy the URL
4️⃣ Submit a proposal PDF to the webhook
5️⃣ Review Slack alerts or approval responses
6️⃣ Activate the workflow

---

## **Customization Options**

1️⃣ **AI Prompt Tuning** – Adjust evaluation depth or industry focus
2️⃣ **Risk Rules** – Change what qualifies as a flagged proposal
3️⃣ **Approval Messaging** – Customize webhook responses
4️⃣ **Notification Channels** – Swap Slack for email or Teams
5️⃣ **Additional Fields** – Extract budgets, timelines, or compliance data

---

## **Expected Results**

⚡ Faster proposal review cycles
🤖 Consistent and unbiased evaluations
📉 Reduced manual workload
🚨 Immediate visibility into risky proposals
✅ Clean, documented approval decisions

---

## **Workflow Structure Overview**

📥 Proposal Upload
↓
📄 PDF Download & Parsing
↓
🧹 Text Cleanup
↓
🧠 AI Proposal Evaluation
↓
🧩 JSON Parsing
↓
⚖️ Risk Decision
↓
🚨 Slack Alert **or** ✅ Auto Approval

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
