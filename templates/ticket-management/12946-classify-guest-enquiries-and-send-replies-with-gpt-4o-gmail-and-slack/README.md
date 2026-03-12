# 🎫 Classify guest enquiries and send replies with GPT-4o, Gmail and Slack

> ⚡ **62 views** · 🎫 [Ticket Management & Triage](../)

## Description

📘 Description
This workflow automates guest enquiry intake, intent classification, response generation, and internal routing for hospitality businesses using webhooks, GPT-4o, Gmail, and Slack. It converts raw guest enquiries into structured, actionable items while ensuring fast acknowledgements, correct team assignment, and SLA visibility.
When a guest submits an enquiry through a webhook (website form, booking page, or external system), an AI agent analyzes the message to detect intent—booking, pricing, availability, or policy. The agent generates a polite, human-like acknowledgement message and determines the most suitable internal team to handle the request. Based on the detected intent, the workflow assigns the enquiry to the correct team with a predefined SLA.

If the guest prefers email communication, an automated reply is sent via Gmail. In parallel, a detailed enquiry summary—including guest details, detected intent, assigned agent, and SLA—is posted to Slack for internal visibility and follow-up. All AI responses are also logged to Slack for transparency. Any workflow failure triggers an immediate Slack alert with diagnostic details.

⚙️ What This Workflow Does (Step-by-Step)
 📥 Webhook Trigger – Guest Enquiry Intake
 Receives guest enquiry data (name, email, message, dates, preferences).
 🧠 AI Intent Classification & Reply Generation
 GPT-4o analyzes the enquiry, detects intent, and generates a polite acknowledgement.
 🔍 Extract Detected Category
 Parses AI output to identify the enquiry category.
 🔀 Route by Intent Category
 Directs enquiries to booking, pricing, availability, or policy flows.
 👥 Team Assignment with SLA
 Assigns the enquiry to the correct team and sets response SLA.
 📧 Send Email Reply to Guest (Conditional)
 Automatically replies if the guest prefers email contact.
 💬 Post Enquiry Summary to Slack
 Shares full enquiry context, assignment, and SLA for team follow-up.
 📝 Log AI Reply to Slack
 Stores the generated guest reply for internal reference.
 🚨 Error Handler → Slack Alert
 Sends instant alerts if any node fails.

🧩 Prerequisites
 • n8n webhook endpoint
 • OpenAI / Azure OpenAI (GPT-4o or GPT-4o-mini) credentials
 • Gmail OAuth2 credentials
 • Slack API credentials

💡 Key Benefits
 ✔ Instant AI-driven enquiry classification
 ✔ Faster guest acknowledgements
 ✔ Correct team routing with SLA enforcement
 ✔ Reduced manual triage for front-desk and sales teams
 ✔ Full visibility of enquiries and replies in Slack
 ✔ Built-in error monitoring

👥 Perfect For
-  Hotels and resorts
-  Vacation rental operators
-  Hospitality sales and front-desk teams
-  Property management companies
-  Businesses handling high volumes of guest enquiries

## 🔗 Nodes Used

Slack, Webhook, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
