# 💬 Personalized cold lead re-engagement with Zoho CRM and GPT-4o-mini

> ⚡ **122 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description:
Reignite cold leads automatically with this intelligent n8n automation template that integrates Zoho CRM, Azure OpenAI (GPT-4o-mini), and Email.
This workflow identifies leads that haven’t been contacted in the last 30 days, generates personalized AI-written emails based on lead data, sends them directly, and updates the CRM—all without manual follow-up.
Perfect for sales teams, marketing managers, and business development professionals who want to recover lost opportunities, boost engagement rates, and maintain an active sales pipeline with minimal effort.

## ✅ What This Template Does (Step-by-Step)

⏰ Daily Trigger
 Automatically runs on a set schedule (daily or weekly) to check for inactive leads.

📅 Calculate 30 Days Ago
 Computes the exact date threshold (today − 30 days) to filter stale leads from Zoho CRM.

🔍 Fetch Cold Leads from Zoho
 Searches Zoho CRM for leads whose Last Activity occurred before the calculated date—returning only those needing re-engagement.

🤖 AI Email Generation
 Uses Azure OpenAI (GPT-4o-mini) to analyze each lead’s data and craft a personalized re-engagement email that reflects their previous interactions, interests, or stage in the funnel.

📧 Send Personalized Email
 Delivers the custom AI-generated email directly to each lead.
 Subject: “Let’s Reconnect!”
 Body: Tailored, human-like message written by AI.

✅ Update CRM Record
 After each email is sent, the workflow updates the lead in Zoho CRM—marking them as contacted, refreshing the Last Activity timestamp, and maintaining accurate engagement history.

## 🧠 Key Features
 ✔️ Smart lead filtering based on inactivity window
 ✔️ AI-crafted, context-aware personalized emails
 ✔️ Seamless Zoho CRM integration for tracking and updates
 ✔️ Fully automated daily execution
 ✔️ Customizable for different CRMs or intervals

## 💼 Use Cases
 💡 Re-engage leads who’ve gone silent for 30+ days
 📈 Improve conversion and response rates automatically
 🤝 Maintain continuous pipeline nurturing
 🔁 Save hours of manual email follow-up

## 📦 Required Integrations
 • Zoho CRM API – for fetching and updating lead data
 • Azure OpenAI API (GPT-4o-mini) – for email personalization
 • SMTP / Email API – for sending re-engagement emails

## 🎯 Why Use This Template?
 ✅ Automates your entire cold-lead revival process
 ✅ Saves manual outreach time for sales reps
 ✅ Increases lead conversion through personalized AI communication
 ✅ Keeps CRM data fresh and accurate

## 🔗 Nodes Used

Send Email, Function, HTTP Request, Schedule Trigger, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
