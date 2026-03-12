# 📊 Cross-platform brand monitoring & analysis with AnySite API and GPT

> ⚡ **205 views** · 📊 [Market Research & Insights](../)

## Description

![Screenshot 20251031 at 11.45.25.png](fileId:3153)
## Overview

This n8n workflow automates **brand monitoring across social media platforms** (Reddit, LinkedIn, X, and Instagram) using the **AnySite API**.  
It searches posts mentioning your defined keywords, stores results in n8n Data Tables, analyzes engagement and sentiment, and generates a detailed **AI-powered social media report** automatically sent to your email.

---

## Key Features

- **Multi-Platform Monitoring:** Reddit, LinkedIn, X (Twitter), and Instagram  
- **Automated Post Collection:** Searches for new posts containing tracked keywords  
- **Data Persistence:** Saves all posts and comments in structured Data Tables  
- **AI-Powered Reporting:** Uses GPT (OpenAI API) to summarize and analyze trends, engagement, and risks  
- **Automated Email Delivery:** Sends comprehensive daily/weekly reports via Gmail  
- **Comment Extraction:** Collects and formats post comments for deeper sentiment analysis  
- **Scheduling Support:** Can be executed manually or automatically (e.g., every night)

---

## How It Works

### Triggers

The workflow runs:
- Automatically (via **Schedule Trigger**) — e.g., once daily  
- Manually (via **Manual Trigger**) — for testing or on-demand analysis

### Data Collection Process

1. **Keyword Loading:**  
   Reads all keywords from the Data Table **“Brand Monitoring Words”**

2. **Social Media Search:**  
   For each keyword, the workflow calls the **AnySite API** endpoints:  
   - `api/reddit/search/posts`  
   - `api/linkedin/search/posts`  
   - `api/twitter/search/posts` (X)  
   - `api/instagram/search/posts`

3. **Deduplication:**  
   Before saving, checks if a post already exists in the **“Brand Monitoring Posts”** table.

4. **Data Storage:**  
   Inserts new posts into the Data Table with fields like `type`, `title`, `url`, `vote_count`, `comment_count`, etc.

5. **Comments Enrichment:**  
   For Reddit and LinkedIn, retrieves and formats comments into JSON strings, then updates the record.

6. **AI Analysis & Report Generation:**  
   The **AI Agent** (OpenAI GPT model) aggregates posts, analyzes sentiment, engagement, risks, and generates a structured **HTML email report**.

7. **Email Sending:**  
   Sends the final report via Gmail using your connected account.

---

## Setup Instructions

### Requirements

- Self-hosted or cloud **n8n instance**  
- **AnySite API key** – [https://AnySite.io](https://AnySite.io)  
- **OpenAI API key** (GPT-4o or later)  
- Connected **Gmail** account (for report delivery)

---

### Installation Steps

1. **Import the workflow**  
   Import the provided file:  
   `Social Media Monitoring.json`

2. **Configure credentials**
   - **AnySite API:** Add `access-token` header with your API key  
   - **OpenAI:** Add your OpenAI API key in the “OpenAI Chat Model” node  
   - **Gmail:** Connect your Gmail account (OAuth2) in the “Send a message in Gmail” node

3. **Create required Data Tables**

---

### 1️⃣ Brand Monitoring Words

| Field | Type | Description |
|-------|------|-------------|
| `word` | string | Keyword or brand name to monitor |

&gt; Each row represents a single keyword to be tracked.

---

### 2️⃣ Brand Monitoring Posts

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Platform type (e.g., reddit, linkedin, x, instagram) |
| `title` | string | Post title or headline |
| `url` | string | Direct link to post |
| `created_at` | string | Post creation date/time |
| `subreddit_id` | string | (Reddit only) subreddit ID |
| `subreddit_alias` | string | (Reddit only) subreddit alias |
| `subreddit_url` | string | (Reddit only) subreddit URL |
| `subreddit_description` | string | (Reddit only) subreddit description |
| `comment_count` | number | Number of comments |
| `vote_count` | number | Votes, likes, or reactions count |
| `subreddit_member_count` | number | (Reddit only) member count |
| `post_id` | string | Unique post identifier |
| `text` | string | Post body text |
| `comments` | string | Serialized comments (JSON string) |
| `word` | string | Matched keyword that triggered capture |

---

## AI Reporting Logic

- Collects all posts gathered during the run  
- Aggregates by keyword and platform  
- Evaluates sentiment, engagement, and risk signals  
- Summarizes findings with an executive summary and key metrics  
- Sends the **Social Media Intelligence Report** to your configured email

---

## Customization Options

- **Schedule:** Adjust the trigger frequency (daily, hourly, etc.)  
- **Keywords:** Add or remove keywords in the **Brand Monitoring Words** table  
- **Report Depth:** Modify system prompts in the “AI Agent” node to customize tone and analysis focus  
- **Email Recipient:** Change the target email address in the “Send a message in Gmail” node

---

## Troubleshooting

| Issue | Solution |
|-------|-----------|
| No posts found | Check AnySite API key and keyword relevance |
| Duplicate posts | Verify Data Table deduplication setup |
| Report not sent | Confirm Gmail OAuth2 connection |
| AI Agent error | Ensure OpenAI API key and model selection are correct |

---

## Best Practices

- Use **specific brand or product names** in keywords for better precision  
- Run the workflow daily to maintain fresh insights  
- Periodically review and clean Data Tables  
- Adjust AI prompt parameters to refine analytical tone  
- Review AI-generated reports to ensure data quality

---

## Author Notes

Created for **automated cross-platform brand reputation monitoring**, enabling real-time insights into how your brand is discussed online.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
