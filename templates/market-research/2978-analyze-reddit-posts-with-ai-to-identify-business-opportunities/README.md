# 📊 Analyze Reddit posts with AI to identify business opportunities

> ⚡ **32,721 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

**Use case**
Manually monitoring Reddit for viable business ideas is time-consuming and inconsistent. This workflow automatically analyzes trending Reddit discussions using AI to surface high-potential opportunities, filter irrelevant content, and generate actionable insights - saving entrepreneurs 10+ hours weekly in market research.

**What this workflow does**
This AI-powered workflow automatically collects trending Reddit discussions, analyzes posts for viable business opportunities using GPT-4, applies smart filters to exclude low-value content, and generates scored opportunity reports with market insights. It identifies unmet customer needs through sentiment analysis, prioritizes high-potential ideas using custom criteria, and outputs structured data to Google Sheets for actionable decision-making.

**Setup**
- Add Reddit,Google and OpenAI credentials
- Configure target subreddits in **Subreddit** node
- Test workflow by testing workflow
- Review generated opportunity report in Google Sheets


**How to adjust this template**
- **Change data sources**: Replace Reddit trigger with Twitter/X or Hacker News API
- **Modify criteria**: Adjust scoring thresholds in Opportunity Calculator node
- **Add integrations**:
   - Create automatic Slack alerts for urgent opportunities
   - Generate draft business plans using AI Document Writer

## 🔗 Nodes Used

Google Sheets, Gmail, Reddit, AI Agent, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
