# 📊 Turn Reddit posts into content ideas with Telegram, Apify, GPT and Sheets

> ⚡ **64 views** · 📊 [Market Research & Insights](../)

## Description

# Reddit Content Saver Pipeline

&gt; A Telegram-triggered n8n workflow that scrapes Reddit posts, analyzes them with AI, and saves structured content ideas to Google Sheets.

---

## Overview

Send a Reddit post URL to a Telegram bot. The pipeline scrapes the post and comments, runs AI analysis for content insights, deduplicates against previously processed links, and logs everything to Google Sheets — all automatically.

---

## Workflow Diagram

```
Telegram Trigger
  └─► Typing Indicator
        └─► Get Sheets Log (dedup source)
              └─► Dedup Check
                    ├─► [DUPLICATE] Notify user → stop
                    └─► [NEW] Apify Reddit Scrape
                               └─► Extract Content
                                     ├─► [NO CONTENT] Notify user → stop
                                     └─► [HAS CONTENT] AI Analysis
                                                └─► Save to Sheets
                                                          └─► Success Reply
```

---

## Step-by-Step Breakdown

### 1. Telegram Trigger
Listens for incoming messages on the Reddit Bot Telegram account. The message is expected to contain a Reddit post URL.

### 2. Typing Indicator
Immediately sends a typing indicator back to the user so they know the bot received the message.

### 3. Get row(s) in sheet
Fetches all previously processed Reddit URLs from the Google Sheets pipeline log. This is the source of truth for duplicate detection.

Template: https://docs.google.com/spreadsheets/d/1Q0F7Th6cdiqYKJIPwx_G0td59QkRMjNJMxpU3xOVGMU/edit?usp=sharing

### 4. Dedup Check *(Code Node)*
Extracts the Reddit URL from the Telegram message using regex, then normalizes both the incoming URL and all stored URLs (strips `www.`, lowercases, removes trailing slashes) before comparing. Sets an `is_duplicate` flag.

### 5. Duplicate Branch *(If Node)*
| Condition | Action |
|---|---|
| Duplicate detected | Sends Telegram message with original submission date and summary → stops |
| New link | Continues to Apify scraping |

### 6. Reddit Scrape *(Apify — Reddit Scraper Lite)*
Runs the [`trudax/reddit-scraper-lite`](https://console.apify.com/actors/oAuCIx3ItNrs2okjQ) actor against the Reddit URL. Scrapes the post and up to top 10 comments using a residential proxy.

### 7. Get Dataset Items
Retrieves the results from the completed Apify actor run.

### 8. Extract & Clean Data *(Code Node)*
Restructures the raw Apify output — extracts `post_title`, `post_body`, and `comment_summary_text` into a flat object for downstream use.

### 9. Content Validation *(If Node)*
Checks whether the scraped post has at least a title, body, or comment text.
| Condition | Action |
|---|---|
| Has content | Continues to AI analysis |
| No content | Sends "No Content Found" Telegram reply → stops |

### 10. AI: Analyze Content *(LangChain + OpenAI)*
Passes the post and comments to an OpenAI GPT model. Analyzes the content for ideas, themes, and insights. A Structured Output Parser enforces a consistent JSON response shape.

### 11. Edit Fields
Maps the AI output into a clean, flat structure ready for Google Sheets ingestion.

### 12. Save to Google Sheets
Appends a new row to the pipeline log with post metadata, AI analysis results, and the source URL.

### 13. Success Confirmation
Sends a Telegram message confirming the post has been saved, with a link to the Google Sheet.

---

## Platforms & APIs

| Platform | Role |
|---|---|
| **Telegram** | User input (send Reddit URL) and all bot replies |
| **Apify** — `reddit-scraper-lite` | Scrapes Reddit post content and comments via residential proxy |
| **OpenAI GPT** *(via n8n LangChain)* | AI content analysis and structured output generation |
| **Google Sheets** | Persistent storage for processed posts and duplicate-detection log |
| **n8n** | Workflow orchestration |

---

## Error States

| Scenario | Bot Response |
|---|---|
| URL was previously submitted | *"You shared this link previously on [date] — [title/summary] — check GSheets [link]"* |
| Scraped post returned no usable content | *"No Reddit link found. Send me a Reddit post URL and I will analyze it for content ideas."* |

---

## Credentials Required

| Credential | Used By |
|---|---|
| Telegram Bot Token | Trigger + all reply nodes |
| Apify API Key | Reddit Scraper actor |
| OpenAI API Key | AI analysis node |
| Google Sheets OAuth | Read (dedup) + Write (save) |

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
