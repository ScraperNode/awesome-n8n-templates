# 📊 Multi-channel customer sentiment tracker with real-time analytics and alerting

> ⚡ **159 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## How It Works
Scheduled processes retrieve customer feedback from multiple channels. The system performs sentiment analysis to classify tone, then uses OpenAI models to extract themes, topics, and urgency indicators. All processed results are stored in a centralized database for trend tracking. Automated rules identify high-risk or negative sentiment items and trigger alerts to the relevant teams. Dashboards and workflow automation then visualize insights and support follow-up actions.

## Setup Instructions
1. **Data Sources:** Connect social media APIs, survey tools, and customer support platforms.
2. **AI Analysis:** Configure the OpenAI API with sentiment and theme-extraction prompts.
3. **Database:** Set up a feedback storage schema in your utility database.
4. **Alerts:** Configure email notifications and CRM triggers for priority issues.
5. **Dashboards:** Link your analytics and reporting tools for real-time insights.


## Prerequisites
Social media/survey API credentials; OpenAI API key; database access; CRM system credentials; email notification setup

## Use Cases
Customer sentiment tracking; product feedback aggregation; support ticket prioritization; brand monitoring; trend identification

## Customization
Adjust sentiment thresholds; add new feedback sources; modify categorization rules 

## Benefits
Reduces analysis time 85%; captures actionable insights; enables rapid response to issues

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Postgres, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
