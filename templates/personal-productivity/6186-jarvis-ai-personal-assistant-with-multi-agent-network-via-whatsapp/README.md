# ⚡ Jarvis: AI personal assistant with multi-agent network via WhatsApp

> ⚡ **1,052 views** · ⚡ [Personal Productivity](../)

## Description

Think of this workflow as your very own **J.A.R.V.I.S.**, the ultimate AI personal assistant, capable of handling a vast array of tasks just like Tony Stark's legendary AI!

---

### Overview

This n8n workflow creates a **highly intelligent, multi-agent AI system** designed to act as your all-in-one personal assistant. At its core is **Jarvis**, the central AI, who smartly understands your requests and delegates them to specialized "supervisor" AIs. These supervisors then activate their own "sub-agents" (smaller AI workflows) to perform specific tasks, covering everything from managing your work to helping with your personal life and getting you the information you need.

---

### Use Case

This powerful workflow is perfect for anyone who wants to **automate and streamline almost any digital task**. Imagine having an assistant who can:

* **Boost Productivity:** Manage your calendar, create and update documents (Google Docs, Sheets, Drive), handle tasks (ClickUp, Google Tasks), and keep your customer data organized (Zoho CRM, Airtable).
* **Master Communication:** Draft and search emails, send messages on Slack, and even manage your X (Twitter) interactions.
* **Handle Publishing & Content:** Create images, post on social media (Facebook, X, LinkedIn, Instagram), and manage your WordPress content.
* **Provide Smart Insights:** Perform deep online research, analyze SEO trends, check financial markets, and gather website performance data from Google Analytics.
* **Manage Your Lifestyle:** Keep track of your meal plans and habits in Notion, and even help you with travel planning.

This system is designed to intelligently choose the best tool for each part of your request, making complex tasks simple.

---

### How It Works

It all starts with your input, delivered via **WhatsApp**. Whether you send a text message, an audio note (which gets transcribed), an image, or a document (from which data like invoices can be extracted), the workflow processes it to understand your need.

This input then goes to **Jarvis, the central AI**. Donna acts like a super-smart manager. It quickly figures out which "supervisor" agent is best for your request:
* **Productivity Supervisor:** For anything work-related – documents, calendars, tasks, or CRM.
* **Communication Supervisor:** For emails, Slack, or X (Twitter).
* **Lifestyle Supervisor:** For personal organization like meals or travel.
* **Insights Supervisor:** For research, SEO, financial data, or website analytics.
* **Publishing Supervisor:** For social media posting, images, or WordPress.

Donna then hands off your request to the chosen supervisor. Each supervisor, in turn, uses its own set of specialized "sub-agents" (individual n8n workflows) to get the job done. For example, if you ask Donna to "find me flight information," she directs it to the "Lifestyle Supervisor," which then uses the "Travel Agent" to look up flights. The results are then sent back to you directly through WhatsApp. This "Agent as a Tool" setup means complex tasks are broken down and handled by the right expert AI.

---

### How to Set It Up

1.  **Individual Agent Workflows:** This system is built with many specialized AI "agents" working together. To get started, you'll need to set up a separate n8n workflow for *each* of the individual agents (like "Notion Agent," "Email Agent," "SEO Agent," etc.).
2.  **Connect Agents:** Once created, these individual agent workflows must be correctly linked to their designated "call workflow" tools within the main supervisor workflows. This tells Donna and her supervisors which tools to use for each task.
3.  **Credentials:** Make sure you've properly connected all necessary accounts and API keys (like Google, OpenAI, Slack, Airtable, etc.) within their respective agent workflows.
4.  **Activate:** After setting up and linking all parts and adding your credentials, activate this main workflow.

For more detailed setup instructions, please refer to our [**Detailed Setup Guide**](https://drive.google.com/file/d/1UqQpZv5ExTuI5IEIUTMe6NiZ89bVCI9J/view?usp=sharing). If you need any further help, don't hesitate to email us at `info.gainflow@gmail.com`.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
