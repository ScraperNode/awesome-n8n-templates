# 🤝 Create client onboarding projects, contracts and Slack channels from form data

> ⚡ **102 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📊 Description
Streamline and standardize your entire client onboarding process with a single end-to-end automation. 🚀📋 This workflow captures detailed client intake data via webhook, automatically creates a fully structured Asana onboarding project, generates a personalized service contract from a Google Docs template, emails the agreement to the client, and logs all information in Google Sheets. It also creates a dedicated Slack channel for internal collaboration, ensuring every new client is onboarded consistently, professionally, and without manual effort. Perfect for service businesses scaling operations while maintaining quality and clarity. ✨📄🤝
## 🔁 What This Template Does
1️⃣ Receives detailed client intake form data via webhook. 📥
 2️⃣ Parses and normalizes 70+ client, business, and technical fields. 🧾
 3️⃣ Creates a new client-specific onboarding project in Asana. 📋
 4️⃣ Copies sections and tasks from a predefined Asana template project. 🔄
 5️⃣ Assigns all tasks into the new project with proper structure. ✅
 6️⃣ Retrieves a Google Docs contract template. 📄
 7️⃣ Replaces placeholders with client-specific details (name, fees, dates). ✍️
 8️⃣ Downloads the personalized contract as a PDF. 📑
 9️⃣ Sends a welcome email to the client with the contract attached. 📧
 🔟 Resets the contract template for the next onboarding. 🔁
 1️⃣1️⃣ Logs all client data into Google Sheets for tracking and reporting. 📊
 1️⃣2️⃣ Creates a dedicated Slack channel for internal client communication. 💬
## ⭐ Key Benefits
✅ Eliminates manual onboarding setup and repetitive admin work
 ✅ Ensures consistent project structure for every client
 ✅ Generates error-free, personalized contracts automatically
 ✅ Improves client experience with instant, professional communication
 ✅ Centralizes client data for operations and reporting
 ✅ Scales onboarding without adding operational overhead
## 🧩 Features
- Webhook-based client intake form processing
- Advanced data parsing for large intake payloads
- Asana project creation with template-based sections and tasks
- Google Docs dynamic contract generation
- Automated PDF download and email delivery
- Google Sheets client tracking with append/update logic
- Automatic Slack channel creation for internal teams
- Clean reset logic for reusable document templates
## 🔐 Requirements
- Asana OAuth2 credentials
- Google Docs OAuth2 credentials
- Google Drive OAuth2 credentials
- Google Sheets OAuth2 credentials
- Gmail OAuth2 credentials
- Slack API credentials
- Asana template project ID
- Google Docs contract template ID
- Google Sheets tracking document ID
## 🎯 Target Audience
- Service-based businesses onboarding new clients
- Agencies managing multi-step client engagements
- Operations and delivery teams
- SaaS or healthcare service providers with complex intake forms
- Automation teams building scalable onboarding systems

## 🔗 Nodes Used

Asana, Google Sheets, HTTP Request, Slack, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
