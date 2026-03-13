# 📊 Automated SEO SERP analysis with Decodo & Google Gemini

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What Problem Does It Solve?
- SEO professionals and marketers spend hours manually searching keywords to analyze competitor content.
- Copying and pasting SERP results into spreadsheets is tedious and prone to formatting errors.
- Analyzing "why" a page ranks requires significant mental effort and time for every single keyword.
- This workflow solves these by:
  - Automatically fetching live Google search results for a list of keywords.
  - Using AI to instantly analyze the top ranking pages for Intent, Strengths, and Weaknesses.
  - Delivering a consolidated, strategic SEO report directly to your email inbox.

## How to Configure It
- API Setup:
  - Connect your Decodo credentials (for  scraping Google results).-
  - Connect your Google Gemini credentials (for the AI analysis).
  - Connect your Gmail account (to send the final report).
 - Keyword Input:
   - Open the "Edit Fields" node and replace the placeholder items (keyword_1, etc.) with the actual search terms you want to track.
- Email Recipient:
  - Update the "Send a message" node with your email address.

## How It Works
- The workflow triggers manually (or can be scheduled).
- It loops through your defined list of keywords one by one.
- Decodo performs a real-time Google search for each term and extracts organic results.
- A JavaScript node cleans the data, removing ads and irrelevant snippets.
- The AI Agent acts as an expert SEO analyst, processing the top results to generate a concise audit.
- Finally, the workflow compiles all insights into a single email report and sends it to you.

## Customization Ideas
- Change the output: Save the analysis to a Google Sheet or Notion database instead of Email.
- Adjust the AI Persona: Modify the system prompt to focus on specific metrics (e.g., content gaps or backlink opportunities).
- Automate the Input: Connect a Google Sheet to dynamically pull new keywords every week.
- Schedule It: Replace the Manual Trigger with a Cron node to run this report automatically every Monday morning.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
