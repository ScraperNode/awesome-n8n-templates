# 📊 Classify supplier diversity and suggest replacements with Groq, Notion, Gmail and Slack

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives a list of suppliers via webhook, uses Groq-hosted LLMs to classify each supplier’s diversity status and score, generates an alternative recommendation for low-diversity suppliers, stores the result in Notion, and sends alerts through Gmail and Slack.

## How it works
1. Receives a POST webhook request containing a JSON body with a `suppliers` array.
2. Splits the incoming supplier list into individual supplier records for processing.
3. Uses a Groq LLM to classify each supplier as Minority Owned, Women Owned, Small Business, or Not Diverse, including a certification, score, and reasoning.
4. Merges the AI classification output back into the original supplier record and adds a processing timestamp.
5. Filters suppliers that are marked “Not Diverse” or have a diversity score below 50.
6. For low-diversity suppliers, uses a second Groq LLM to generate a single alternative supplier recommendation and formats the result into standardized fields.
7. Creates a new page in a Notion database with the supplier details and recommendation, then sends an alert email via Gmail and posts a notification to a Slack channel before returning a JSON webhook response.

## Setup
1. Configure the webhook endpoint path (`/supplier-onboarding`) and set the source system to POST a JSON body with a `suppliers` array (including fields like `supplier_name`, `supplier_id`, `category`, and `country`).
2. Add a Groq API credential and select the models used for classification and recommendation.
3. Add a Notion credential, set the target database ID, and ensure the database has properties matching the mapped fields (for example Name, Supplier ID, Category, Country, Diversity Status, Diversity Score, and replacement fields).
4. Add a Gmail credential and set the recipient(s) for the email alert.
5. Add a Slack credential and select the channel where the workflow posts supplier diversity alerts.

## Additional info
## How To Customize Nodes

- **AI Prompts**: Modify classification or recommendation logic
- **Filter Logic**: Change diversity threshold
- **Notion Mapping**: Adjust fields as per your database
- **Email/Slack Messages**: Customize notification format
- **Webhook Input**: Extend supplier attributes


## Add-ons

- Add Google Sheets logging
- Integrate ERP systems
- Add approval workflow before replacement
- Add dashboard visualization
- Multi-country compliance rules


## Use Case Examples

1. Automated supplier onboarding validation
2. ESG compliance monitoring
3. Vendor replacement suggestions
4. Diversity reporting automation
5. Procurement decision support

There can be many more use cases based on business needs.


## Troubleshooting Guide

| Issue                   | Possible Cause           | Solution                       |
| ----------------------- | ------------------------ | ------------------------------ |
| Webhook not triggered   | Incorrect URL or method  | Use POST with correct endpoint |
| AI not responding       | Invalid Groq credentials | Reconnect API credentials      |
| JSON parsing error      | AI response format issue | Ensure strict JSON in prompt   |
| Notion not storing data | Wrong database mapping   | Verify field mapping           |
| Email not sent          | Gmail auth issue         | Reconnect Gmail OAuth          |
| Slack message failed    | Wrong channel ID         | Check Slack configuration      |


## Need Help?

If you need help setting up, customizing or scaling this workflow, feel free to reach out our **n8n experts at WeblineIndia**.

We can help you:

- Customize AI logic
- Integrate with your systems
- Build enterprise-grade automations
- Add advanced analytics & dashboards

**Contact WeblineIndia for expert support and custom workflow development.**

## 🔗 Nodes Used

Slack, Webhook, Gmail, Notion, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
