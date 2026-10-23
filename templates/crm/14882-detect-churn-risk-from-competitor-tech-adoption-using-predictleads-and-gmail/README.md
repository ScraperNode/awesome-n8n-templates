# 🤝 Detect churn risk from competitor tech adoption using PredictLeads and Gmail

> ⚡ **57 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Monitor customers for competitor tech adoption via PredictLeads and alert CSMs to prevent churn.**

This workflow uses PredictLeads to monitor existing customers for competitor tool adoption (HubSpot, Salesforce, Zoho CRM) and renewal timing risk, then alerts Customer Success Managers so they can take proactive action before customers churn.

## How it works
1. Schedule trigger runs weekly and loads customer domains from Google Sheets
2. Fetches each customer's full tech stack via PredictLeads Technology Detections API
3. Looks up technology details by ID in PredictLeads to identify competitor tools
4. Detects if customer adopted competitor tools (HubSpot, Salesforce, Zoho CRM)
5. Calculates days until renewal and flags high-risk accounts (competitor detected + within 90 days)
6. Sends churn risk alert email to the assigned CSM

## Setup
1. Create Google Sheet with columns: `company_domain`, `renewal_date`, `csm_email`
2. Connect Gmail OAuth2 for CSM alert emails
3. Connect Slack OAuth2 for team notifications (optional)
4. Add PredictLeads API credentials (X-Api-Key and X-Api-Token headers)
## Requirements
- PredictLeads API account (https://docs.predictleads.com)
- Google Sheets OAuth2 credentials
- Gmail OAuth2 credentials
- Slack OAuth2 credentials (optional)
## Customization
- Adjust competitor list in "Detect Competitor Usage" Code node
- Modify 90-day renewal window threshold in "Calculate Renewal Risk" node
- Change notification channel from Slack to another platform if needed

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
