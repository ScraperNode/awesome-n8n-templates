# 🎣 AI marketing agent for lead generation: Reddit + OpenRouter + Gmail

> ⚡ **2,632 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# What it is
This n8n workflow monitors Reddit for posts relevant to a specific business or industry, identifies potential leads, and delivers them directly to your inbox.

Full tutorial (https://findleads.agency/blog/n8n-ai-agent-for-lead-generation-using-reddit-openai-gmail)  for those wanting to build it themselves.

# How It Works
1. A user submits their website URL and email through a form
2. The workflow analyzes the website to determine the industry and extract relevant keywords
3. It searches Reddit for posts containing those keywords and filters them based on custom engagement metrics (i.e. upvotes &gt; 15, non-empty text content, posted within the last 90 days)
4. An AI agent (using OpenRouter's GPT-4.1-mini) analyzes each post to determine relevance and summarizes the key points
5. Relevant posts are stored in Google Sheets and formatted into a professional HTML email
6. The email is sent to the user's provided email address with a summary of potential leads

# Setup
To run this workflow, you need to set up credentials in n8n for:

- Reddit: Uses OAuth 2.0. Requires creating an app on Reddit to get a Client ID & Secret. (YT Tutorial for Reddit App Creation: https://youtu.be/zlGXtW4LAK8)
- OpenRouter: Uses an API Key. Generate this key directly from your OpenRouter account settings. (YT Tutorial: https://youtu.be/Cq5Y3zpEhlc)
- Google Sheets: Recommend OAuth2 (just connect by authenticating) or setup in Google Cloud Console (enable Sheets API, create OAuth Client ID with n8n redirect URI) to get a Client ID & Secret.
- Gmail: Uses OAuth 2.0. Requires setup in Google Cloud Console to enable Gmail API and create OAuth credentials.

## 🔗 Nodes Used

Google Sheets, Gmail, Reddit, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
