# 📱 Daily import validated contacts from NocoDB to Brevo

> ⚡ **264 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview
Automate your daily contact imports from NocoDB to Brevo.The workflow updates the record status in NocoDB at each step.

For every email campaign, it’s essential to keep your Brevo contact list updated so you can send personalized and targeted emails. This flow automates that process.

## ✅ Tasks
⏰ Runs automatically every day
🗂 Fetches only new/unimported records from NocoDB
🔍 Checks for missing required fields
🚫 Filters out disposable/temporary emails
📬 Creates contacts in Brevo
📝 Updates NocoDB status after each step

## 🛠 How to Use
1️⃣ **Set your schedule**

- The Schedule Trigger node runs the flow daily adjust to your preferred time.

2️⃣ **Prepare your table in NocoDB**

Your NocoDB table should contain at least:
- id
- first_name
- last_name
- email
- status (default: 0-not-imported)

3️⃣ **Configure your credentials**

- Connect your NocoDB API Token in the NocoDB nodes.
- Connect your Brevo API Key in the Brevo node.

4️⃣ **Map your fields**

- In the Brevo: Create Contact node, make sure first name, last name, and email match your NocoDB column names.

## 📌 Notes
🛡 Make sure your NocoDB project/table IDs match the ones in this template.

🚀 This workflow processes contacts one-by-one to avoid heavy API calls and rate limit issues with Brevo.

✅ **status values:**

0-not-imported → new record
1-empty-fields → missing required fields
2-disposal-email → disposable email detected
3-contact-created → successfully created in Brevo

## 🔗 Nodes Used

NocoDB, Brevo, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
