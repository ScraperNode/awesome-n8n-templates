# 🎬 Generate content ideas from social trends with Apify, Gemini, and Google Sheets

> ⚡ **105 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Trend2Content

This n8n workflow (named **Trend2Content**) takes a short topic input from a small web form, scrapes recent/top social content for that topic (via an Apify act), aggregates the raw text, passes that aggregated content into a LangChain AI agent (Google Gemini in this flow) which returns a structured content output (topic summary, blog post title ideas, tweet hooks), formats that output, and appends the results into a Google Sheet.

It’s a lightweight:

**Topic → Trending Content → AI Ideas → Sheet**

pipeline for fast content ideation.

---

## How It Works (Step-by-Step)

1. **On Form Submission**  
   The user fills a single field `Topic` (webhook/form trigger).

2. **X Scraper (HTTP Request)**  
   Calls an Apify act `run-sync-get-dataset-items` with:  
   - `searchTerms: [{{ $json.Topic }}]`  
   - `maxItems: 20`  
   to fetch social posts for that topic.

3. **Edit Fields (Set)**  
   Extracts `fullText` from each scraped item and stores it in a `Content` field.

4. **Aggregate**  
   Aggregates the `Content` field so the AI agent receives one combined input rather than many separate items.

5. **Google Gemini Chat Model (LM) + AI Agent (LangChain Agent Node)**  
   The agent uses a templated system prompt + the aggregated content to generate a structured response with:
   - Topic summary  
   - Blog title ideas  
   - Tweet hooks  

   The agent is connected to a **Structured Output Parser** node to force a predictable JSON schema.

6. **Code in JavaScript**  
   Transforms the structured JSON into sheet-friendly strings (joins arrays with bullets).

7. **Append Row in Sheet (Google Sheets)**  
   Appends the generated `blog_post_titles` and `tweet_hooks` to the target Google Sheet.

8. **(Optional)**  
   Sticky notes and internal meta nodes exist for documentation and board organization.

---
# Quick Setup Guide
👉 [Demo & Setup Video](https://drive.google.com/file/d/1HeypybNWR-AHu1Odtt0kgcsK-uRPB0JP/view?usp=sharing)
👉 [Sheet Template](https://docs.google.com/spreadsheets/d/1ewthiWelucJgbn1V3xizT_eeQ0gROcaHaJr0WNLX5sE/edit?usp=sharing)
👉 [Course](https://www.udemy.com/course/n8n-automation-mastery-build-ai-powered-enterprise-ready/?referralCode=2EAE71591D3BEB80F2CC)

---
## Nodes of Interest You Can Edit

### 1. On Form Submission (formTrigger)
- Edit form fields (add author, language, region, or filters).
- Change webhook behaviour or require authentication.

### 2. X Scraper (HTTP Request)
- **URL:** Change to another Apify act or another scraping API.
- **jsonBody:** Change `maxItems`, `sort` (Top/Recent), or modify `searchTerms` (e.g., topic + hashtag).
- **Headers:** Set the `Authorization: Bearer` token (Apify).
- Add pagination or query parameters if switching scraper APIs.

### 3. Edit Fields (Set)
- Map additional fields (author, date, source URL).
- Add filtering logic (remove short posts, retweets, duplicates).

### 4. Aggregate
- Customize aggregation strategy:
  - Concatenate
  - Sample top N
  - Deduplicate before combining

### 5. Google Gemini Chat Model / AI Agent / Structured Output Parser
- Edit `systemMessage` and prompt template (tone, format, extra outputs).
- Tune LM parameters (temperature, max tokens).
- Update schema to request:
  - Sentiment
  - Key quotes
  - Additional formats

### 6. Code in JavaScript
- Modify formatting (CSV-ready, add timestamp).
- Add metadata columns.
- Add deduplication or length checks before write.

### 7. Append Row in Sheet (Google Sheets)
- Change spreadsheet ID or sheet name.
- Add more columns.
- Switch from Append to Upsert.
- Configure batch appends.

---

## What You’ll Need (Credentials)

### 1. Apify API Token
- Used in the HTTP Request node.
- Set in header:  
  `Authorization: Bearer YOUR_APIFY_TOKEN`

### 2. Google Sheets OAuth2 Credentials
- Must include `spreadsheets` scope.
- Required for appending rows.

### 3. Google / PaLM / Google Gemini API Credentials
- Used by the LangChain / Google Gemini node.

### Optional
- n8n webhook URL (for mounting the form).
- Monitoring credentials (Slack webhook, Sentry, etc.) for alerts.

---

## Recommended Settings & Best Practices

- Enable workflow only after testing (`active: true`).
- Limit `maxItems` (20–50 recommended).
- Sanitize & dedupe content before sending to the AI.
- Always use a **Structured Output Parser** for reliable JSON.
- Set low temperature (0.0–0.6) for consistent results.
- Add retries and exponential backoff for external APIs.
- Add logging or Slack alerts for failures.
- Keep execution log columns in the sheet (`status`, `error_message`, `run_time`).
- Store workflow JSON in version control.
- Monitor API rate limits (Apify + Google).
- Avoid writing scraped PII into public sheets.

---

## Customization Ideas

- Add output types:
  - Instagram captions
  - LinkedIn posts
  - Video scripts
  - Email subject lines

- Add sentiment / trend scoring.
- Add language detection & translation.
- Store aggregated content in a vector database (Pinecone / Chroma).
- Schedule runs using Cron trigger.
- Add multiple data sources (Reddit, RSS, HackerNews).
- Add approval workflow (Slack / Notion).
- Add metadata columns:
  - `source_urls`
  - `top_authors`
  - `most_shared`

---
# Tags
#content-ideation'  
#social  
#ai  
#google-gemini  
#apify  
#google-sheets  
#n8n

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
