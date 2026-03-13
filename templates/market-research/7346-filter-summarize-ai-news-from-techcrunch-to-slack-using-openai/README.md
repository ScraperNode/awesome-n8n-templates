# 📊 Filter & summarize AI news from TechCrunch to Slack using OpenAI

> ⚡ **802 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow automatically scrapes TechCrunch articles, filters for AI-related content using OpenAI, and delivers curated summaries to your Slack channels. Perfect for individuals or teams who need to stay current on artificial intelligence developments without manually browsing tech news sites.

## Who's it for

* AI product teams tracking industry developments and competitive moves
* Tech investors monitoring AI startup coverage and funding announcements  
* Marketing teams following AI trends for content and positioning strategies
* Executives needing daily AI industry briefings without manual research overhead
* Development teams staying current on AI tools, frameworks, and breakthrough technologies

## How it works

The workflow runs on a daily schedule, crawling a specificed amount of TechCrunch articles from the current year. Firecrawl extracts clean markdown content while bypassing anti-bot measures and handling JavaScript rendering automatically.

Each article gets analyzed by an AI research assistant that determines if the content relates to artificial intelligence, machine learning, AI companies, or AI technology. Articles marked as "NOT_AI_RELATED" get filtered out automatically.

For AI-relevant articles, OpenAI generates focused 3-bullet-point summaries that capture key insights. These summaries get delivered to your specified Slack channel with the original TechCrunch article title and source link for deeper reading.

## How to set up

1. **Configure Firecrawl**: Add your Firecrawl API key to the HTTP Request node
2. **Set OpenAI credentials**: Add your OpenAI API key to the AI Agent node  
3. **Connect Slack**: Configure your Slack webhook URL and target channel
4. **Adjust scheduling**: Set your preferred trigger frequency (daily recommended)
5. **Test the workflow**: Run manually to verify article extraction and Slack delivery

## Requirements

* **Firecrawl account** with API access for TechCrunch web scraping
* **OpenAI API key** for AI content analysis and summarization  
* **Slack workspace** with webhook permissions for message delivery
* **n8n instance** (cloud or self-hosted) for workflow execution

## How to customize the workflow

**Source expansion**: Modify the HTTP node URL to target additional tech publications beyond TechCrunch, or adjust the article limit and date filtering for different coverage needs.

**AI focus refinement**: Update the OpenAI prompt to focus on specific AI verticals like generative AI, robotics, or ML infrastructure. Add company names or technology terms to the relevance filtering logic.

**Summary formats**: Change from 3-bullet summaries to executive briefs, technical analyses, or competitive intelligence reports by modifying the OpenAI summarization prompt.

**Multi-channel delivery**: Extend beyond Slack to email notifications, Microsoft Teams, or database storage for historical trend analysis and executive dashboards.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
