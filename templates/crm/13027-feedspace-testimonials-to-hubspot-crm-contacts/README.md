# 🤝 Feedspace Testimonials to HubSpot CRM Contacts

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**What problem does it solve?**
Manually copying contacts and testimonials from Feedspace to HubSpot is time-consuming and error-prone. This workflow automates the entire process, ensuring every testimonial is:

- Linked to the correct contact (creating new contacts if needed)
- Stored as a detailed, formatted note with all metadata
- Processed in real-time as testimonials are submitted

**How It Works**

1. Receive Webhook - Feedspace sends testimonial data via webhook when a new submission arrives
2. Extract Data - Code node parses and normalizes the testimonial payload (handles text, video, and audio types)
3. Validate Email - IF node checks if reviewer email exists (required for HubSpot contact)
4. Upsert Contact - HubSpot node creates a new contact or updates existing one based on email
5. Create Note - HTTP Request creates a detailed note associated with the contact
6. Respond - Returns success/error response to Feedspace

**Setup Steps**
**1. Configure HubSpot Credentials**

- Create a HubSpot Private App with the following scopes:
	- crm.objects.contacts.write
	- crm.objects.contacts.read

- Add the App Token to your n8n credentials

**2. Get the Webhook URL**

- Open the Receive Testimonial webhook node
- Copy the Production URL

**3. Configure Feedspace**

- Go to your Feedspace dashboard
- Navigate to Integrations → Webhooks
- Add the n8n webhook URL
- Select New Testimonial as the trigger event

**4. Activate the Workflow**

- Toggle the workflow to Active
- Test by submitting a testimonial in Feedspace

## 🔗 Nodes Used

HTTP Request, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
