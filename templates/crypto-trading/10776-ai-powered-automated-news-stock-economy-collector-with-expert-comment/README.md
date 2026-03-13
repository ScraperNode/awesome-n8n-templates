# 📈 AI-Powered automated news (stock, economy...) collector with expert comment

> ⚡ **604 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### What is This Workflow?
V2 (2026) available!
An intelligent, fully automated news aggregation system that collects articles from multiple sources (RSS feeds + Google Search), uses AI to classify and summarize the most important stories, then delivers a professional HTML email report with expert commentary.

---
![Screenshot_1612026_55828_mail.google.com.jpeg](fileId:4002)
![Screenshot_1612026_55840_mail.google.com.jpeg](fileId:4003)

#### ***Contact to customize this workflow for your business: [me@nguyenthieutoan.com](mailto:me@nguyenthieutoan.com)***
---

### Use Cases:

📈 **Financial Markets**: Stock news, economic indicators, market analysis
📰 **Industry News**: Tech, healthcare, real estate, etc.
🌍 **Regional Updates**: Country-specific news, local events
🏢 **Corporate Intelligence**: Competitor monitoring, industry trends
🎓 **Academic Research**: Paper aggregation, research updates
⚡ **Crisis Monitoring**: Breaking news, emergency alerts

### Key Features:
✅ **Multi-Source Collection**: RSS feeds + Google Search API (expandable)
✅ **AI Classification**: Auto-categorizes articles by topic (e.g., stock market, economy)
✅ **AI Summarization**: Selects top 15 stories, groups by region, adds expert insights
✅ **Professional Email**: Finance-themed HTML design with structured tables
✅ **Data Table Storage**: Central repository with auto-cleanup (3-day retention)
✅ **Duplicate Prevention**: Link-based deduplication
✅ **Cost Optimized**: GPT-4.1 Nano for classification, Gemini Flash for summarization
✅ **Fully Customizable**: Topics, languages, sources, schedules, styling—all flexible

---

# How It Works

## 1. News Collection
- Gather updates from multiple sources (RSS feeds, keyword searches).
- Standardize format (title, link, snippet, date, source, tag).
- Store in a central table with duplicate prevention.

## 2. AI Processing & Analysis
- Classify articles into categories (e.g., Stock Market, Economy).
- Summarize top items per category and region.
- Add short expert-style commentary for context.
- Output structured JSON with title, content, insights, and links.

## 3. Email Generation & Delivery
- Merge summaries into professional tables.
- Apply finance-themed design (Navy Blue, Gold, Green).
- Include header (date + “Daily Executive Briefing”) and footer attribution.
- Send via Gmail with HTML body and subject line including date.


### Requirements:

**n8n Version:** 1.113.0+ (for Data Table feature), 2.4.0+ for Auto Create Data Table (or you need to create manually).

**APIs & Credentials:**
- **SerpAPI**: For Google Search (free tier available) - if you need to use Google Search source.
- **OpenAI API**: GPT-4.1 Nano access
- **Google Gemini API**: Gemini Flash access
- **Gmail OAuth2**: For sending emails

**Optional:**
- Custom RSS feeds (public, no auth required)

---

### Cost Optimization:

**API Usage per Day:**
- SerpAPI: 2-4 searches (free tier: 100/month)
- OpenAI: ~50 classification calls (~$0.01)
- Gemini: ~2 summarization calls (~$0.005)
- **Total: &lt; $0.02/day** (~$0.60/month)

**Cost Reduction Tips:**
- Use free Gemini tier (2M tokens/day)
- Batch classification (reduce API calls)
- Adjust article limits (fewer = cheaper)
- Use Claude Haiku instead of GPT-4.1 Nano (even cheaper)

---

### Customization & Support:

🎁 **FREE Workflow Customization**
Need to adapt this workflow for your specific use case? Contact the author for **FREE** basic customization:
- Change topics/categories/languages
- Adjust sources and schedules
- Modify email styling
- Simple logic changes
- Lifetime free updates and bug fixes

📧 **Email**: me@nguyenthieutoan.com

💼 **Paid Advanced Support** (~$15-30 USD)
For complex customization + full setup + additional features:
- Multi-language support with auto-translation
- Advanced AI analysis (sentiment, trends, predictions)
- Integration with Slack/Discord/Teams
- Custom web dashboard
- Database integration (PostgreSQL, MongoDB)
- Webhook integrations
- Custom reporting formats (PDF, Slack cards, etc.)

**Author**: Nguyen Thieu Toan (Jay Nguyen)  
**n8n Profile**: [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)  
**Status**: n8n Verified Creator  
**Website**: nguyenthieutoan.com

---

### Version History:

**v2.0** (Current)
- Multi-source collection (RSS + Google Search)
- AI-powered classification & summarization
- Professional HTML email generation
- Data Table storage with auto-cleanup
- Fully customizable architecture

---

### Related Workflows:

🔗 Browse more workflows by Jay Nguyen:  
[n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

**Similar Templates:**
- Social Media Content Aggregator
- Competitor Monitoring System
- Research Paper Digest Generator
- Breaking News Alert System

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
