# 📱 Create AI newsletters from YouTube with LangChain, Gemini, Apify & Gmail

> ⚡ **464 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Video → Newsletter AI Agent

This n8n workflow converts a YouTube video into a polished, email-ready newsletter. It scrapes the transcript, extracts a thumbnail/logo and brand color theme, uses multiple AI agents to (1) clean & summarize the transcript into three newsletter sections, (2) convert that content into a styled HTML newsletter (color-aware), then saves the draft to Google Sheets and sends the email to subscribers via Gmail. The flow is optimized for batch sending and brand-consistent HTML output.

## How it works (step-by-step)
1. **Trigger** — `On form submission` accepts Brand Name, Brand Website, and YouTube video link.  
2. **Site scrape & colour study** — HTTP requests + `Information Extractor` → AI agent derives brand color theme (primary/secondary/accent/background).  
3. **Transcript retrieval** — Two YouTube transcript scrapers (Apify acts) fetch the video transcript and thumbnail; a small `Code` node merges transcript chunks.  
4. **Summarization & journalism** — `AI Agent2` (LangChain/Gemini) cleans the transcript, extracts thesis + key points, and writes 3 newsletter sections in a journalistic tone.  
5. **HTML conversion** — `Convert Newsletter to HTML (AI)` agent applies the fixed layout and injects only text color variables (keeps layout intact) and outputs Subject + HTML body (≤1000 words).  
6. **Aggregate & merge** — `Merge` + `Aggregate` assemble files, assets, and parsed outputs.  
7. **Save & send** — Save the email draft to Google Sheets (`Save Newsletter Draft in Google Sheet`) and loop through subscribers from a subscribers sheet; `Sending Emails to all the Subscribers` (Gmail node) sends the HTML to each address in batches.  
8. **Batching & looping** — `Split In Batches` handles large subscriber lists; `Loop Over Items` triggers the HTML-conversion per recipient batch.

## Quick Setup Guide
👉 [Demo & Setup Video](https://drive.google.com/file/d/1bOfkyDY-Y06pq9ojZzLaGy5Xuvp9LdH7/view?usp=sharing)
👉 [Sheet Template](https://docs.google.com/spreadsheets/d/1hvB5Zif52eCLv_X7E_OifQv9OI5usn-CQ50-TsZTMQA/edit?usp=sharing)
👉 [Course](https://www.udemy.com/course/n8n-automation-mastery-build-ai-powered-enterprise-ready/?referralCode=2EAE71591D3BEB80F2CC)

## Nodes of interest
- `On form submission` (formTrigger) — entry point for video + brand inputs.  
- `You Tube Transcript Scraper`, `You Tube Transcript Scraper1` (HTTP Request → Apify) — transcript + thumbnail fetching.  
- `Information Extractor` & `AI Agent1` — website color/theme extraction.  
- `Code in JavaScript` — merges transcript pieces into a single text payload.  
- `AI Agent2` (LangChain agent + Gemini Chat Model) — transcript → journalist-style newsletter sections.  
- `Convert Newsletter to HTML (AI)` (LangChain agent + Structured Output Parser) — builds constrained, brand-aware HTML email and subject.  
- `Structured Output Parser1/2` — enforce schemas for color theme / structured outputs.  
- `Get row(s) in sheet` & `Save Newsletter Draft in Google Sheet` (Google Sheets) — subscriber list + draft storage.  
- `Loop Over Items` / `Split In Batches` — batch processing for sends.  
- `Sending Emails to all the Subscribers` (Gmail) — SMTP/OAuth send.  
- `OpenRouter Chat Model` — LM compute provider configured in the workflow.

## What you’ll need (credentials & resources)
- Google Sheets OAuth2 (for reading subscribers & saving drafts).  
- Gmail OAuth2 (for sending HTML emails).  
- Gemini / LLM provider credentials (Gemini API key or equivalent) for the LangChain agents.  
- Apify API key (for the YouTube transcript scrapers).  
- ConvertAPI (or similar) key if you convert logos (SVG→PNG) server-side.  
- Host storage / publicly accessible URLs for images (thumbnails, logos) or a file-store (S3).  
- Optional: SendGrid / Mailgun credentials if you swap Gmail for a transactional email provider.  
**Security note:** do NOT hardcode credentials in node parameters; use n8n credentials manager or environment variables.

## Recommended settings & best practices
- **Batch size & rate-limits:** set `Split In Batches` to a conservative batch size (e.g., 50–200) and add delays between batches to avoid provider rate limits and Gmail throttling.  
- **Retries & timeouts:** enable retries for HTTP Request nodes and set sensible timeouts (e.g., 30–60s). Use exponential backoff.  
- **LM controls:** set token/response length limits and `max_output_tokens` (or equivalent) to avoid runaway costs; enforce the 1000-word HTML hard limit in the prompt.  
- **Validation:** validate the YouTube URL and that transcript content exists before invoking AI summarization (fail fast with a clear error).  
- **Schema enforcement:** use `Structured Output Parser` nodes with strict JSON schemas to prevent malformed outputs.  
- **Testing:** run with a small subscriber test sheet and use a safety test Gmail account before sending to production lists.  
- **Logging & monitoring:** log each run (video URL, subject, send count, errors) to a monitoring sheet or external logging service.  
- **Privacy & compliance:** ensure recipients have consent to receive emails (store opt-ins); include unsubscribe handling if you move beyond one-off sends. Comply with CAN-SPAM / local laws.  
- **Credential rotation:** rotate API keys periodically and revoke compromised tokens.  
- **Content safety:** instruct the LM agents to avoid hallucinated citations — only include links you can verify.

## Customization ideas
- Multi-language support: auto-detect video language and run summarizer in that language.  
- A/B subject testing: generate 2–3 subject lines and send variations to subsets.  
- Scheduling: add a scheduler node to delay sends or publish at optimal send-times per recipient timezone.  
- Integrate with SendGrid/Mailgun for higher throughput and analytics (opens/clicks).  
- Add personalization tokens (first name, company) from subscribers sheet to the HTML (merge fields).  
- Auto-attach transcript as plain-text footer or include “Read more” link to a hosted full article.  
- Add analytics: record opens, clicks, and engagement back into Google Sheets or a database.  
- Support other platforms: ingest videos from Vimeo, Loom, or uploaded MP4s.  
- Use a templating engine to allow multiple newsletter layouts and style variants.  
- Auto-generate social posts (Twitter/X, LinkedIn) from the newsletter summary.

## Tags
`n8n` `newsletter` `youtube` `transcript` `langchain` `gemini` `apify` `gmail` `google-sheets` `html-email` `automation` `batching` `ai` `content-ops`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
