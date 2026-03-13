# 🎣 Website intelligence & lead scoring with ScrapeGraphAI, HubSpot and Slack

> ⚡ **457 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# How it works

This workflow automatically analyzes website visitors in real-time, enriches their data with company intelligence, and provides lead scoring and sales alerts.

## Key Steps

1. **Webhook Trigger** - Receives visitor data from your website tracking system.
2. **AI-Powered Company Intelligence** - Uses ScrapeGraphAI to extract comprehensive company information from visitor domains.
3. **Visitor Enrichment** - Combines visitor behavior data with company intelligence to create detailed visitor profiles.
4. **Lead Scoring** - Automatically scores leads based on company size, industry, engagement, and intent signals.
5. **CRM Integration** - Updates your CRM with enriched visitor data and lead scores.
6. **Sales Alerts** - Sends real-time notifications to your sales team for high-priority leads.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for company intelligence gathering.
2. **Set up HubSpot connection** - Connect your HubSpot CRM to automatically update contact records.
3. **Configure Slack integration** - Set up your Slack workspace and specify the sales alert channel.
4. **Customize lead scoring criteria** - Adjust the scoring algorithm to match your target customer profile.
5. **Set up website tracking** - Configure your website to send visitor data to the webhook endpoint.
6. **Test the workflow** - Verify all integrations are working correctly with a test visitor.

## Key Features

- **Real-time visitor analysis** with company intelligence enrichment
- **Automated lead scoring** based on multiple factors (company size, industry, engagement)
- **Intent signal detection** (pricing interest, demo requests, contact intent)
- **Priority-based sales alerts** with recommended actions
- **CRM integration** for seamless lead management
- **Deal size estimation** based on company characteristics

## 🔗 Nodes Used

Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
