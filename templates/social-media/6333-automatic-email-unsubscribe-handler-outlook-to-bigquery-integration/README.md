# 📱 Automatic email unsubscribe handler: Outlook to BigQuery integration

> ⚡ **793 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🚫 Email Unsubscribe Handler for Outlook 

## Description
This n8n workflow automatically scans recent email replies from your Outlook inbox and identifies unsubscribe requests. If a contact replies with any variation of "unsubscribe" within the past 7 days, the system performs two key actions:

Saves the contact’s email address in a BigQuery unsubscribes table (for compliance and tracking).

Deletes that contact from the active leads table in BigQuery (to stop future outreach).

This flow can be triggered on a schedule (e.g. every 4 hours) or run manually as needed.

## Key Features
📥 Email Parsing from Outlook: Automatically monitors for replies that contain unsubscribe language.

🧠 Smart Filtering: Captures unsubscribes based on message content, not just subject lines.

🔄 BigQuery Integration: Logs unsubscribed emails and removes them from your leads dataset.

## 🤝 Connect with Me

## Description  
I’m Robert Breen, founder of Ynteractive — a consulting firm that helps businesses automate operations using **n8n**, **AI agents**, and custom workflows. I’ve helped clients build everything from intelligent chatbots to complex sales automations, and I’m always excited to collaborate or support new projects.

If you found this workflow helpful or want to talk through an idea, I’d love to hear from you.

## Links  
🌐 Website: [https://www.ynteractive.com](https://www.ynteractive.com)  
📺 YouTube: [@ynteractivetraining](https://www.youtube.com/@ynteractivetraining)  
💼 LinkedIn: [https://www.linkedin.com/in/robert-breen](https://www.linkedin.com/in/robert-breen)  
📬 Email: rbreen@ynteractive.com

## 🔗 Nodes Used

Microsoft Outlook, Google BigQuery, Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
