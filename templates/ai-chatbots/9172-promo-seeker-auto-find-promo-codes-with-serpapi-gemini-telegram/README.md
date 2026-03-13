# 🤖 Promo seeker: Auto-find promo codes with SerpAPI, Gemini & Telegram

> ⚡ **359 views** · 🤖 [AI Chatbots & Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Promo Seeker automatically finds, verifies, and delivers active promo codes to users via Telegram or email using SerpAPI + Gemini (OpenRouter). Saves hours of manual searching and deduplicates results into an n8n Data Table for fast reuse.

## Why Use This Workflow?

**Time Savings:** Reduces manual promo hunting from ~2 hours to ~5 minutes per query.

**Cost Reduction:** Cuts reliance on paid scraping tools or manual services — potential savings of $50–$200/month.

**Error Prevention:** Cross-references sources and enforces a 30‑day recency filter to reduce expired-code hits by ~60% vs single-source checks.

**Scalability:** Handles hundreds of queries per day with Data Table upserts and optional scheduling for continuous discovery.

## Ideal For

- **Marketing / Growth Managers:** Quickly discover competitor or partner discounts to promote in campaigns.
- **Customer Support / Operations:** Respond to user requests with verified promo codes via Telegram or email.
- **Affiliate / Content Teams:** Aggregate and maintain a clean promo feed for newsletters or site widgets.

## How It Works

1. **Trigger:** Incoming request via Webhook, Telegram message, Google Form submission, or scheduled run.
2. **Data Collection:** The LangChain agent uses SerpAPI search results and Gemini (OpenRouter) to locate recent promo codes.
3. **Processing:** Filter for recency (last 30 days), extract code, value, terms, and expiry.
4. **Intelligence Layer:** Gemini 2.5 Pro (OpenRouter) + LangChain agent structure and verify results, outputting a standardized JSON.
5. **Output & Delivery:** If a code exists in the Data Table, notify the requester via Telegram and Gmail; otherwise, return results and upsert them into the Data Table.
6. **Storage & Logging:** Results stored/upserted in an n8n Data Table to prevent duplicates and enable fast lookups.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| n8n instance | Essential | Execute the workflow — import JSON to your n8n instance |
| SerpAPI account | Essential | Web search results for promo code discovery |
| OpenRouter (Gemini) account | Essential | Language model (Gemini 2.5 Pro) for extraction and verification |
| Telegram Bot (BotFather) | Essential | Receive queries and send promo notifications |
| Gmail OAuth2 | Essential | Send rich email notifications |
| n8n Data Tables | Essential | Store and deduplicate promo code records |

Get your n8n instance here: n8n instance — import the JSON and begin configuration. (Repeat link for convenience) n8n instance

### Installation Steps

1. Import the JSON workflow into your n8n instance.
2. Configure credentials (use n8n's Credentials UI — do NOT paste keys into nodes):
   - SerpAPI: paste your SerpAPI API Key from your SerpAPI dashboard.
   - OpenRouter API: paste your OpenRouter API Key (for Gemini 2.5 Pro).
   - Telegram API: create bot via @BotFather, then add Bot Token to Telegram credentials.
   - Gmail OAuth2: use n8n's Gmail OAuth2 credential flow and authorize the account.
3. Update environment-specific values:
   - Webhook path: /v1/promo-seeker (configured in the Webhook node) or replace with your preferred path.
   - Data Table ID: point to your own Data Table
   - Form/webhook recipient fields (email/chatId mappings).
4. Customize settings:
   - Adjust the LangChain agent prompt (Promo Seeker Agent) for different recency windows or regional focus.
   - Change max results/limit on the Data Table node (default limit = 3).
5. Test execution:
   - Trigger via Telegram or a POST to the webhook with sample payload:
     ```json
     { "platform":"example.com", "email":"you@domain.com" }
     ```
   - Confirm notifications arrive and Data Table rows are upserted.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| SerpAPI | Fetch web search results | Provide credential; adjust search params in agent prompt |
| Gemini 2.5Pro (OpenRouter) | Extract & verify promo details | Use OpenRouter credential; model google/gemini-2.5-pro |
| Promo Seeker Agent (LangChain) | Orchestrates search + parsing | System prompt enforces 30‑day recency & result format |
| Structured Output Parser | Validates agent output | JSON schema example for platform/code/value/terms/validUntil |
| Data Table (Get row(s)) | Lookup existing promos | Filters by platform; limit = 3 |
| If (Code Exist?) | Branching logic | Checks existence of platform field |
| Data Table (Upsert row(s)) | Insert or update promo | Mapping from agent output to Data Table columns |
| Telegram Trigger / Telegram | Receive queries & notify users | Webhook-based trigger; parse_mode = HTML for messages |
| Gmail | Send rich HTML emails | Uses Gmail OAuth2 credential |
| Webhook / Form Trigger | Alternate inputs | Webhook path /v1/promo-seeker and Form trigger for manual submissions |

### Workflow Logic

- On trigger, the Platform Set node normalizes the incoming query and receiver.
- Get row(s) checks Data Table for existing promos.
  - If found: notify via Telegram and send Gmail (email template included).
  - If not found: the Promo Seeker Agent runs SerpAPI searches, parses structured output, then Upsert row(s) saves results and notifications are sent.
- Structured Output Parser enforces correct JSON to avoid bad upserts.

## Customization Options

### Basic Adjustments
- Recency window: change the agent prompt to 7/14/30 days.
- Result limit: increase Data Table Get limit or change Upsert batch size.

### Advanced Enhancements
- Add Slack or Microsoft Teams notifications (moderate complexity).
- Add caching layer (Redis) to reduce repeated SerpAPI calls (advanced).
- Parallelize searches across multiple search engines (higher API usage & complexity).

## Performance & Optimization

| Metric | Expected Performance | Optimization Tips |
|--------|----------------------|-------------------|
| Execution time | 8–30s per new search (depends on SerpAPI + LM response) | Reduce SerpAPI page depth; cache recent results |
| API calls | 3–10 SerpAPI calls per complex query | Batch queries; use higher-quality search params |
| Error handling | Agent retries on malformed output | Use retry nodes and set onError strategy for downstream nodes |

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| No results returned | Query too vague or rate-limited API | Improve query specificity; check SerpAPI quota |
| Gmail send fails | OAuth scope not granted or token expired | Reconnect Gmail OAuth2 credential in n8n |
| Telegram webhook not firing | Incorrect bot token or webhook setup | Recreate Telegram credential and check bot permissions |
| Duplicate rows | Upsert mapping mismatch | Ensure promoCode mapping in Upsert matches structured output |
| Agent returns malformed JSON | LM prompt too permissive | Tighten the agent system prompt and validate with Structured Output Parser |

---

**Created by:** [khaisa Studio](https://khaisa.studio)
**Category:** Marketing Automation

**Tags:** promo-codes, coupons, serpapi, telegram, gmail, openrouter, data-tables

Need custom workflows or help adapting this template? [Contact us](https://khaisa.studio/contact)

## 🔗 Nodes Used

Webhook, Telegram, Telegram Trigger, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
