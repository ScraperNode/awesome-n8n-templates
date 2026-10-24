# 🎬 Create WordPress articles in author style with Gemini, Telegram and Pinecone

> ⚡ **59 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow ingests your WordPress site content into Google Sheets and Pinecone, analyzes each author’s writing style with Google Gemini, then sources new topic ideas from Reddit and scraped websites via Browserless, routes approvals through a Telegram bot, and drafts new internally linked WordPress posts using Perplexity research.

## How it works
1. Runs on a daily schedule, fetches your site’s XML sitemap, and filters URLs updated since the last run.
2. For each new/updated URL, fetches the WordPress page HTML, extracts title/content/date/author, saves the data to Google Sheets, and stores chunked embeddings in Pinecone using Google Gemini embeddings.
3. On manual execution, reads recent articles per author from Google Sheets and uses Google Gemini to generate a writing-style analysis that it writes back to an “AuthorStyles” sheet.
4. Runs weekly to pull new tech posts from Reddit and scrape additional sources with Browserless, uses Google Gemini (via OpenRouter) to generate article ideas, checks Pinecone for near-duplicates, and sends fresh ideas to Telegram with Approve/Disapprove buttons while logging them to Google Sheets.
5. When a Telegram user approves an idea or submits /newidea or /bestproducts, the workflow records the state in Google Sheets and prompts the user to choose an author from the AuthorStyles list.
6. After author selection, it uses Perplexity to research the topic, generates a 2000-word HTML draft in the chosen author’s style with Google Gemini/OpenRouter, injects internal links based on existing WordPress posts, and creates a draft post in WordPress.

## Setup
1. Add credentials for Google Sheets, Pinecone, Telegram, WordPress, Google Gemini (PaLM), OpenRouter, Perplexity, Reddit, and Browserless.
2. Replace the sitemap URL in the initial HTTP request and ensure your WordPress HTML selectors match the fields being extracted (title/content/date/author).
3. Create and configure the Google Sheets documents/tabs used for Articles, AuthorStyles, and State, and ensure columns match the fields being appended/updated.
4. Create a Pinecone index (for example, “kb”) compatible with your chosen Gemini embeddings and keep the index name consistent across insert and load steps.
5. Set your Telegram chat ID in the send-message steps and connect the Telegram trigger webhook URL in your bot configuration.
6. Connect WordPress API credentials and verify author IDs in the AuthorStyles sheet so drafts are created under the selected author.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Execute Sub-workflow, Wordpress

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
