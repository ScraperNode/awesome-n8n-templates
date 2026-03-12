# 🎣 AI-driven lead classification & routing with HighLevel and Azure GPT-4o-mini

> ⚡ **511 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description:
Streamline your lead management process with this AI-driven n8n automation template.
 The workflow fetches opportunities from HighLevel (GHL), enriches them with contact details, and uses Azure OpenAI GPT-4o-mini to analyze each lead’s intent (e.g., Demo Request, Support Query, or Partnership Inquiry). It then automatically routes the lead to the right internal team via email, ensuring instant follow-up and zero delays in response time.
Perfect for sales, support, and partnership teams who want to save time on manual triage and ensure every inquiry reaches the correct department within seconds.

## ✅ What This Template Does (Step-by-Step)
⚡ Manual or Scheduled Trigger
 Run the workflow manually for on-demand classification or schedule it to execute periodically.

📥 Fetch Opportunities from HighLevel
 Retrieves all opportunities from your GHL CRM, serving as the starting dataset for AI-powered intent detection.

👤 Fetch Detailed Contact Information
 Enriches each opportunity with full contact details such as name, email, and message notes.

🧠 AI-Powered Lead Classification
 Uses Azure OpenAI GPT-4o-mini via the LangChain AI Agent to analyze the lead’s message and determine the intent.
 Possible outputs include:
- 🎯 Demo Request
- 🛠️ Support Query
- 🤝 Partnership Inquiry
- 🧾 Post-Processing of AI Response
 JavaScript logic parses and formats the AI’s output into actionable data for conditional routing.

🔀 Intelligent Routing to Relevant Teams
- Demo Requests → demo@company.com
- Support Queries → support@company.com
- Partnership Inquiries → partnership@company.com
 Each email includes full contact info and original message context.

📧 Instant Team Notifications
 Sends neatly formatted emails from a centralized sender (noreply@company.com) to ensure smooth handoff and accountability.

## 🧠 Key Features
 🤖 AI intent classification using Azure OpenAI GPT-4o-mini
 🔀 Automated lead routing via email
 📋 Structured data enrichment from HighLevel
 ⚙️ Smart conditional logic for 3 lead categories
 📩 End-to-end automation from CRM intake to response

## 💼 Use Cases
 📞 Automatically route demo requests to the sales team
 🛠️ Send support-related queries directly to helpdesk
 🤝 Forward partnership inquiries to business development
 💡 Reduce response delays and manual triage errors

## 📦 Required Integrations
HighLevel (GHL) – for opportunity and contact data
Azure OpenAI – for AI-driven lead classification
SMTP / Gmail – for team routing email notifications

## 🎯 Why Use This Template?
 ✅ Automates manual lead sorting and tagging
 ✅ Ensures every inquiry reaches the right team
 ✅ Increases response speed and lead conversion
 ✅ Scalable AI logic adaptable to any organization

## 🔗 Nodes Used

Send Email, HighLevel, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
