# 🎣 Score and route Facebook Marketplace leads with OpenAI, Supabase, and Slack

> ⚡ **90 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures new Facebook Marketplace page messages, uses OpenAI (GPT-4o-mini) to extract structured inquiry details, stores them in Supabase, scores the lead based on intent, and posts hot, warm, or cold lead alerts to different Slack channels.

## How it works
1. Triggers when a new Facebook Page message related to Marketplace activity is received via the Facebook webhook subscription.
2. Sends the message text to OpenAI (GPT-4o-mini) to classify intent, identify the product mentioned, and generate a short summary in strict JSON.
3. Parses the AI output into JSON safely, falling back to “unknown” fields if parsing fails.
4. Inserts the structured inquiry (intent, product_id, product_mentioned, summary) into a Supabase table for tracking.
5. Computes a lead score from the extracted intent and evaluates whether the inquiry is hot (score ≥ 5) or not.
6. Routes non-hot inquiries into warm (score ≥ 3) or cold and posts the appropriate formatted alert to the corresponding Slack channel.

## Setup
1. Create a Facebook App, connect it to your Facebook Page, and configure the required webhook subscriptions/permissions for Page messages.
2. Add an OpenAI API credential in n8n and ensure the workflow can access the GPT-4o-mini model.
3. Add a Supabase credential and create a `marketplace_inquiries` table with `product_id`, `product_mentioned`, `summary`, and `intent` columns.
4. Add a Slack credential and set or replace the target channel IDs for hot, warm, and cold lead notifications.
5. Update the Facebook Trigger node’s App ID placeholder and complete the trigger’s webhook verification steps in the Facebook Developer settings.

## Additional info
## How To Customize Nodes

- Modify the AI prompt to extract additional fields if needed  
- Adjust lead scoring logic in the Code node  
- Change Slack message format to match your team’s preference  
- Update Slack channel IDs based on your workspace setup  
- Customize Supabase table structure if additional tracking is required  
- Modify IF node conditions to change lead classification thresholds  


## Add-ons

- Add Facebook reply automation for instant responses  
- Integrate CRM systems for lead management  
- Add follow-up workflows using Cron nodes  
- Store analytics data for reporting dashboards  
- Integrate Telegram or email alerts alongside Slack  
- Add sentiment analysis for deeper insights  


## Use Case Examples

- Automatically identify high-intent buyers from Facebook Marketplace  
- Notify sales teams instantly about hot leads  
- Organize leads based on priority without manual effort  
- Track customer inquiries for reporting and analysis  
- Improve response time and lead conversion rates  

There can be many more use cases depending on how you extend this workflow with additional integrations and logic.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data from Facebook | Webhook not configured properly | Verify Facebook App and webhook setup |
| AI output parsing fails | Invalid JSON from AI response | Check prompt format and parsing logic |
| Data not stored in Supabase | गलत credentials or table issue | Verify Supabase credentials and table mapping |
| Slack message not sent | Incorrect channel ID or permissions | Check Slack API credentials and channel access |
| Lead classification incorrect | Wrong scoring logic | Update Code node scoring rules |
| Workflow not triggering | Trigger not active | Activate workflow and test webhook |


## Need Help?

If you need help setting up this workflow, customizing nodes or extending it with advanced features like CRM integration, auto-replies or analytics dashboards, you can reach out to our [n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) for expert support.

We can help you build scalable automation workflows tailored to your business needs.

## 🔗 Nodes Used

Slack, Facebook Trigger, Supabase, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
