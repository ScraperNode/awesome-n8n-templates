# 📊 AI marketing report (Google Analytics & Ads, Meta Ads), sent via email/Telegram

> ⚡ **51,720 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What this workflow does
This workflow retrieves Online Marketing data (Google Analytics for several domains, Google Ads, Meta Ads) from the last 7 days and the same period in the previous year. The data is then prepared by AI as a table, analyzed and provided with a small summary.
The summary is then sent by email to a desired address and, shortened and summarized again, sent to a Telegram account.

This workflow has the following sequence:

1. time trigger (e.g. every Monday at 7 a.m.)
2. retrieval of Online Marketing data from the last 7 days (via sub workflows)
3. assignment and summary of the data
4. retrieval of Online Marketing data from the same time period of the previous year
5. allocation and summary of the data
6. preparation in tabular form and brief analysis by AI.
7. sending the report as an email
8. preparation in short form by AI for Telegram (optional)
9. sending as Telegram message.

## Requirements
The following accesses are required for the workflow:
- Google Analytics (via Google Analytics API): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/)
- Google Ads (via HTTP Request -&gt; Google Ads API):[Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/)
- Meta Ads (via Facebook Graph API): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/facebookgraph/)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- SMTP access data (for sending the mail)
- Telegram access data (optional for sending as Telegram message): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/telegram/)

You must set up the individual sub-workflows as separate workflows. Then set the “Execute workflow trigger” here. Then select the corresponding sub-workflow in the AI Agent Tools.
You can select the number of domains yourself. If the data queries are not required, simply delete the corresponding tool (e.g. “Analytics_Domain_5).

Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Facebook Graph API, Google Analytics, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
