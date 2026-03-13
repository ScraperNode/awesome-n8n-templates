# 💬 Automate personalized lead responses with website scraping, GPT-4o, and Airtable CRM

> ⚡ **187 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n template automatically processes inbound form leads, researches their company via their website, and uses AI to write and send a highly personalized "speed to lead" email instantly. It also tracks subsequent appointment bookings to keep your CRM up to date.

Use cases are focused on high velocity sales: Perfect for agency owners, founders, and sales teams who need to respond to new leads in seconds while maintaining a high quality, personal touch.

## Good to know
At the time of writing, this template is optimized for GPT-4o to ensure the highest quality personalization.
This template was originally designed using a Lovable form, but it works with any form builder (Typeform, Webflow, WordPress) that can send data via a webhook.

## How it works
* The workflow starts when a new lead submits your contact form via the Webhook node.
* It immediately checks your Airtable CRM to ensure the lead is new and not a duplicate.
* The system scrapes the provided website URL and uses custom code to clean the HTML data.
* AI analyzes the cleaned website data to generate a concise summary of the business.
* A second AI step uses this summary and the lead's goals to draft and send a personalized email via Gmail.
* The lead data and website summary are logged into your Airtable base.
* A parallel flow monitors your inbox for booking confirmations and updates the CRM automatically.

## How to use
* Create the necessary Base and Table in Airtable to store your leads.
* Connect your website form to the Webhook URL in the workflow.
* Update the OpenAI node prompts with your specific email signature and phone number.
* Run a test submission to ensure the website scraper is capturing data correctly.

## Requirements
* Airtable account
* OpenAI account (GPT-4o model recommended)
* Gmail account

## Customising this workflow
You can easily adapt this for different communication channels. Try swapping the Gmail node for a Slack notification to alert your team of high value leads, or connect it to HubSpot instead of Airtable for enterprise CRM management.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Gmail, Markdown, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
