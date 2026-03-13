# 📊 Find, scrape & analyze Twitter posts by name with Bright Data & Gemini

> ⚡ **1,895 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow template automates the process of collecting and analyzing Twitter (X) posts for any public profile, then generates a clean, AI-powered summary including key metrics, interests, and activity trends.

🚀 **What It Does**
- Accepts a user's full name and date range through a public form.
- Automatically finds the person’s X (formerly Twitter) profile using a Google search.
- Uses Bright Data to retrieve full post data from the X.com profile.
- Extracts key post metrics like views, likes, reposts, hashtags, and mentions.
- Uses Google Gemini (PaLM) to generate a personalized summary: tone, themes, popularity, and sentiments.
- Stores both raw data and the AI summary into a connected Google Sheet for further review or team collaboration.

🛠️ **Step-by-Step Setup**
1. Deploy the public form to collect full name and date range.
2. Build a Google search query using the name to find their X profile.
3. Scrape the search results via Bright Data (Web Unlocker zone).
4. Parse the page content using the HTML node.
5. Use Gemini AI to extract the correct X profile URL.
6. Pull full post data via Bright Data dataset snapshot API.
7. Transform post data into clean structured fields:
date_posted, description, hashtags, likes, views,
quoted_post.date_posted, quoted_post.description,
replies, reposts, quotes, and tagged_users.profile_name.
8. Analyze all posts using Google Gemini for interest detection and persona generation.
9. Save results to a Google Sheet: structured post data + AI-written summary.
10. Show success or fallback messages depending on profile detection or scraping status.

🧠 **How It Works: Workflow Overview**
- Trigger: When user submits form
- Search & Match: Google search → HTML parse → Gemini filters matching X profile
- Data Gathering: Bright Data → Poll for snapshot completion → Fetch post data
- Transformation: Extract and restructure key fields via Code node
- AI Summary: Use Gemini to analyze tone, interests, and trends
- Export: Save results to Google Sheet
- Fallback: Display custom error message if no X profile found

📨 **Final Output**
- A record in your Google Sheet with:
  - Clean post-level data
  - Profile-level engagement summary
  - An AI-written overview including tone, common topics, and post popularity

🔐 **Credentials Used**
- **Bright Data account** (for search & post scraping)
- **Google Gemini (PaLM)** or Gemini Flash via - 
OpenAI/Google Vertex API
- **Google Sheets (OAuth2) account** (for result storage)

**⚠️Community Node Dependency**
This workflow uses a custom community node:
**n8n-nodes-brightdata**
Install it via UI (Settings → Community Nodes → Install).

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
