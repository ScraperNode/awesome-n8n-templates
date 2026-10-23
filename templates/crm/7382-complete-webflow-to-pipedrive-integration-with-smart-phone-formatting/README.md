# 🤝 Sync Webflow form leads to Pipedrive with Discord and Gmail notifications

> ⚡ **236 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
**📺 Full walkthrough video: https://youtu.be/62QIMjT2u-E**

Automatically captures Webflow form submissions, formats phone numbers with international dial codes, and creates or updates contacts, organizations, and leads in Pipedrive — then notifies the team via Discord and sends a confirmation email to the lead.

## How it works
1. A Webflow form submission triggers the workflow, capturing lead fields: first name, last name, company, professional email, phone number, website URL, and message.
2. Key fields are mapped via a Set node, and a custom JavaScript code node cleans and formats the phone number with the correct international dial code (France, Belgium, Switzerland, and 15+ other countries supported).
3. The workflow searches Pipedrive for an existing organization matching the company name. If none is found, a new one is created. Both paths merge via an Aggregate node.
4. It then searches for the contact person by full name. If found, their email and phone are updated; if not, a new person is created and linked to the organization.
5. A new lead is created in Pipedrive associating the resolved person and organization, with a label and owner automatically assigned.
6. In parallel: a Discord message notifies the team in the configured channel, a Gmail confirmation email is sent to the lead, and — if a website URL was provided — the organization's URL field in Pipedrive is updated.

## Setup
1. Connect your Webflow OAuth2 credentials and configure the "When Webflow Form Submitted" trigger with the correct site.
2. Add Pipedrive API credentials to all Pipedrive nodes (Search/Create Organization, Search/Update/Create Person, Create Lead, Update Organization URL).
3. Add Discord Bot credentials and set the target server and channel in the "Notify Team on Discord" node.
4. Add Gmail OAuth2 credentials and adjust the email subject and body in the "Send Confirmation Email" node.
5. Review the "Format Phone Numbers" code node to confirm the country detection logic matches your audience (France is the default fallback).
6. Ensure your Webflow form field names match the mapped keys in the "Set Contact Fields" node (Prénom, Nom, Entreprise, Mail professionnel, Téléphone pro, URL du site internet, Message).

## Requirements
- Webflow account with a published form and OAuth2 access
- Pipedrive CRM account with API credentials
- Discord server with a configured bot token
- Gmail account with OAuth2 access

## Customization
- Extend the "Set Contact Fields" node to map additional Webflow form fields into Pipedrive custom properties
- Replace the Gmail node with a SendGrid or SMTP node to use a transactional email service instead
- Add a Slack node alongside or in place of Discord if your team uses Slack for notifications
- Modify the "Format Phone Numbers" code node to add new country patterns or change the default fallback country

## Additional info
Template maintained by Growth AI — a Lyon-based automation agency specializing in n8n workflows. For custom enterprise CRM integrations, reach out via LinkedIn.

## 🔗 Nodes Used

Pipedrive, Discord, Webflow Trigger, Gmail, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
