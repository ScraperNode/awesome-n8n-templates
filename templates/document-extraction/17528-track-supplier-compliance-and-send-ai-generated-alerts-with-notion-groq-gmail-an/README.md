# 🔬 Track supplier compliance and send AI-generated alerts with Notion, Groq, Gmail and Slack

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to audit a Notion supplier compliance database, calculates certification expiry urgency, uses Groq (Llama 3.3 via LangChain) to generate supplier emails and internal Slack messages, and then sends notifications through Gmail and Slack while updating supplier status in Notion for critical breaches.

## How it works
1. Runs on a daily schedule trigger at a set hour.
2. Fetches all supplier records from a Notion database and calculates days remaining to certification expiry, skipping offboarded/requalification suppliers and suppressing vendors alerted within the last 14 days.
3. Loops through the actionable suppliers, prepares prompt context, and updates each Notion record with a “Last Compliance Alert” date to prevent duplicate reminders.
4. Uses Groq (Llama 3.3) through a LangChain LLM chain to generate a JSON payload containing an email body and a Slack message per supplier, then parses the structured output.
5. Buffers requests with a short wait step, formats the generated content, and routes each supplier by urgency bracket (30 days, 14 days, critical breach, or missing data).
6. Sends the generated supplier email via Gmail and posts the internal message to Slack for routine/urgent reminders, and for critical breaches also updates the supplier’s Notion status to “In Requalification” and sends an escalation Slack alert plus a final suspension email.

## Setup
1. Create and connect Notion credentials, and set the Notion database ID and the correct property names for supplier status, expiry date, contact email, certification type, and last alert date.
2. Add Groq credentials (API key) for the LangChain Groq Chat Model used to generate the email and Slack message content.
3. Add Gmail credentials and set the sender mailbox and any required email settings for both the standard renewal notice and the final suspension warning.
4. Add Slack OAuth2 credentials and select the target channel(s) for routine alerts and risk escalations.
5. Replace the placeholder secure upload link in the suspension email template and adjust the schedule time, anti-spam window, and urgency thresholds if needed.

## Additional info
## How To Customize Nodes

* **Schedule Trigger:** By default, it runs every day at 8:00 AM. You can change this to run weekly or at a different hour to match your timezone.
* **Code Node (`Calculate Expiry Timelines`):** If your company requires 60-day or 90-day warnings instead of 30-day warnings, you can easily change the numbers inside the Javascript code. You can also adjust the 14-day anti-spam guard limit.
* **Switch Node (`Urgency Routing Engine`):** If you want to add a brand new urgency bracket (like "Escalate to Legal"), you can add a new routing rule here based on the Javascript calculation.


## Add‑ons

You can easily extend this workflow to be even more powerful:

* **Google Drive Integration:** Add a Google Drive node to automatically create a dedicated folder for any vendor who enters the 30-day renewal window.
* **Task Management Sync:** Add a Jira, Asana or ClickUp node right after the `Risk Team Escalation` Slack message to automatically generate an audit task for your team to review manually.
* **DocuSign / PandaDoc:** Automatically trigger an NDA or contract renewal template to be sent to the supplier alongside their warning email.


## Use Case Examples

While this is built for general procurement, it perfectly fits many scenarios:

1. **Software Security (SOC2) Tracking:** Ensure your SaaS vendors always have an active SOC2 Type II report on file before their annual renewal hits.
2. **Contractor Insurance Liability:** Prevent independent contractors from stepping onto a job site if their Commercial Liability Insurance has lapsed.
3. **Health & Safety Permits:** Track local health department permits for catering or food-supply vendors.
4. **NDA Expirations:** Automatically ask partners to sign a fresh Non-Disclosure Agreement when the 2-year term is about to expire.
5. **Environmental Compliance:** Track ISO 14001 or FSC Chain of Custody certificates for manufacturing suppliers.

*(Note: There are dozens of other ways to use this workflow simply by changing the columns in your Notion database!)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Notion node says "Database not found"** | n8n integration lacks access. | Go to your Notion database page, click the three dots (top right), click "Connections" and ensure your n8n integration is added. |
| **AI nodes fail to run** | Groq API rate limits or invalid key. | Check your Groq API dashboard to ensure you have available usage quotas and that your API key in n8n is valid. |
| **Suppliers receive the same email every day** | The `Stamp Last Alert Date` node is failing. | Ensure the `Last Compliance Alert` property in Notion is strictly formatted as a **Date** type, not a Text type. |
| **Emails are sending blank text** | AI Output Parser mismatch. | Open the `JSON Output Parser` node and ensure the schema strictly expects `emailBody`, `slackMessage`, `email`, and `id`. |


## Need Help?

Building automated compliance firewalls can get tricky, especially when dealing with custom company policies, complex AI prompts and database structures.

If you need a helping hand to customize this workflow, connect additional Add-Ons or build entirely new automated systems for your business, [**WeblineIndia** is here to help](https://www.weblineindia.com/contact-us.html)! 

Reach out to us to [hire expert n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) for implementation, workflow optimization and custom integrations tailored to your exact business needs.

## 🔗 Nodes Used

Slack, Gmail, Notion, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
