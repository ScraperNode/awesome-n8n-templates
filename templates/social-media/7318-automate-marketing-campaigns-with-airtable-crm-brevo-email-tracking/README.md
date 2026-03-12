# 📱 Automate marketing campaigns with Airtable CRM & Brevo email tracking

> ⚡ **901 views** · 📱 [Social Media & Email Marketing](../)

## Description

# 🎯 General principles

This template automates the management of marketing campaign from a CRM based on Airtable, using Brevo for sending and tracking emails.

## 🧩 It is based on two main steps:
1. Sending emails to targeted companies in Airtable, creating an interaction record for each sent email.

2. Real-time tracking of events (email delivered / opened / clicked, unsubscribe request) via a n8n webhook, updating the corresponding interaction or company record.

This workflow provides precise tracking of marketing actions and facilitates the history of interactions with prospects or clients.

________________________________________

# Prerequisites
### Airtable with at least 3 tables:
* Company: Contains information about your clients or prospects.
* Interaction: Log of exchanges and events.
* Campaign: Information about the ongoing campaign.

### Brevo:
* A predefined email template, which can include a link to a form.
* API access for sending and tracking emails.

________________________________________

# ⚙️ Step-by-step description
## 1️⃣ Sending Emails
### Selecting targeted companies
The workflow queries the Company table in Airtable, filtering on a tag or a specific field related to the campaign (e.g., Campaign = "1").
### Preparing data for Brevo
For each company, retrieves the necessary information: email address.
### Sending the email via Brevo
Uses a Brevo Send Template node with a predefined template.
Brevo returns a unique identifier for each email sent.
### Creating an interaction in Airtable
A record is added to the Interaction table containing:
* Company
* Date and time of interaction
* Media = email
* Brevo email identifier
________________________________________

## 2️⃣ Tracking Events
### Receiving Brevo events
Brevo triggers a webhook to n8n for each event:
* Delivered
* Opened
* Clicked
* Unsubscribed
### Matching with the interaction
* Based on the Brevo identifier received, the workflow finds the corresponding Interaction in Airtable.
### Updating the interaction
* The interaction status is updated based on the event (e.g., "Opened" with date and time).
### Managing unsubscribes
In case of an unsubscribe:
* The workflow finds the Company associated via the interaction.
* A specific field in the Company table (e.g., Opt-in) is updated to "No" in order to exclude this company from future campaigns.
________________________________________
## ✅ Benefits of this template
* Automated sending and real-time tracking.
* Interaction history stored in the CRM.
* RGPD (European regulations) compliance through automatic unsubscribe management.
* Clear view of campaign effectiveness (open rates, clicks, etc.).

### 📬 Contact
Need help customizing this (e.g., expanding Data Tables, connecting multiple surveys, or automating follow-ups)?

📧 [smarthome.smartelec@gmail.com](smarthome.smartelec@gmail.com)
🔗 [guy.salvatore](https://www.linkedin.com/in/guy-salvatore-3570911a/)
🌐 [smarthome-smartelec.fr](https://smarthome-smartelec.fr)

## 🔗 Nodes Used

Airtable, Webhook, Brevo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
