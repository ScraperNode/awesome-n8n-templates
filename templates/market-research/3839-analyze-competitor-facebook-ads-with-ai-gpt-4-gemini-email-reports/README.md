# 📊 Analyze competitor Facebook ads with AI (GPT-4 & Gemini) & email reports

> ⚡ **1,051 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Facebook Ads Competitor Creative Analysis & Automated Email Report

### 📝 What this workflow does

This workflow automates the process of competitor creative analysis for Facebook Pages. When a user submits their email and a target Facebook Page URL via a web form, the workflow:

- Scrapes the latest image and video Facebook ads from the submitted Page using Apify.
- Deduplicates and selects the top 5 image and top 5 video ads for further analysis.
- Applies advanced AI analysis:
  - Uses OpenAI Vision (GPT-4) to analyze image ads.
  - Uses Google Gemini to analyze video ads.
- Aggregates all ad insights and generates a structured, visually engaging creative analytics report.
- Sends the report directly to the user’s email with ad previews and detailed creative evaluation.

### 👥 Who is this for?

- **Marketers** and agencies conducting competitor research on Facebook.
- **Brand managers** who want quick, actionable insights into rival ad creative.
- **Growth hackers** and performance advertisers analyzing top-performing creative trends.
- **Anyone** in need of an automated, AI-based Facebook ad evaluation and reporting tool using n8n.

### 🎯 What problem does this workflow solve?

- **Manual ad analysis is time-consuming:** Scraping, filtering, and reviewing Facebook competitor ads by hand is labor-intensive.
- **Creative insight requires expertise:** Understanding the message, visuals, and targeting of competitor ads needs marketing/creative skill.
- **Lack of automated reporting:** Easily and visually summarize findings for yourself or stakeholders—without manual collation or formatting.

This workflow provides a **turnkey, end-to-end solution for competitor creative analysis**, combining real ad data with unbiased, AI-driven creative insights in a shareable email format.

### ⚙️ Setup instructions (About 10-15 minutes)

**Before using this AI marketing automation tool, you'll need:**
1. **Add api key to environment variable**
2. **Add required credentials**

### 🔧 How to Customize This Workflow

- **Adapt Image/Video Analysis Goals:** Modify the prompts or parameters sent to OpenAI Vision and Gemini to suit your specific analysis objectives—e.g., evaluate branding consistency, detect call-to-action effectiveness, or extract emotional tone.
- **Revise Email Report Design:** Customize the formatting, insights, and visuals in the delivered report to match your organization’s standards or stakeholder preferences.
- **Expand Input Fields:** Add more fields to the user-facing form, such as a competitor list, campaign dates, or target audience details, for more granular analysis.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
