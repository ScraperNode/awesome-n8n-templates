# 📱 Automate content publishing across 25 social media channels with Airtable & Postiz

> ⚡ **974 views** · 📱 [Social Media & Email Marketing](../)

## Description

**How it works**
• Webhook triggers from content creation system in Airtable
• Downloads media (images/videos) from Airtable URLs
• Uploads media to Postiz cloud storage
• Schedules or publishes content across multiple platforms via Postiz API
• Tracks publishing status back to Airtable for reporting

**Set up steps**
• Sign up for Postiz account at https://postiz.com/?ref=max
• Connect your social media channels in Postiz dashboard
• Get channel IDs and API key from Postiz settings
• Add Postiz API key to n8n credentials (Header Auth)
• Update channel IDs in "Prepare for Publish" node
• Connect Airtable with your content database
• Customize scheduling times per platform as needed
• Full setup details in workflow sticky notes

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
