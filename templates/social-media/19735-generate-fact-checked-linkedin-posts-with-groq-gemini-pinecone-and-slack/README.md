# 📱 Generate fact-checked LinkedIn posts with Groq, Gemini, Pinecone, and Slack

> ⚡ **8 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow selects and drafts a LinkedIn post from Supabase-sourced topics or newly uploaded Google Drive files, extracts and cleans source content (PDF/image/URL/text), uses Groq and Google Gemini models plus Pinecone reference patterns to generate and quality-check the draft, and publishes to LinkedIn after Slack approval.

## How it works
1. Runs daily on a schedule or triggers when a new file is created in a specific Google Drive folder.
2. On scheduled runs, reads eligible topics from a Supabase view and uses a Groq-powered AI agent to select a topic (or recommend skipping) before fetching the full topic record from Supabase.
3. Routes the selected topic’s source by type and extracts content by downloading and OCR-cleaning images, extracting PDF text, fetching and cleaning URL HTML, or passing through provided text into a single normalized text field.
4. Truncates the text and uses a Groq-powered AI agent to extract structured facts, angles, technical details, and privacy flags for the topic.
5. Uses a Google Gemini-powered AI agent that can query a Pinecone vector index to produce a strategy contract (angle, format, hook, structure, CTA, length) and logs it to Supabase.
6. Generates a draft post with Groq, runs a Groq-based quality checker for factual support, strategy compliance, readability, and privacy, and sends the draft and checks to Slack for Approve/Reject/Regenerate feedback.
7. If approved, creates the LinkedIn post and logs it in Supabase; if rejected, archives the topic in Supabase; if no response arrives, sends a Gmail approval link and waits for a webhook decision, and if regeneration is requested, re-runs generation using the reviewer feedback.

## Setup
1. Create the required Supabase tables/views (`trending_topics_inventory`, `eligible_trending_topics`, `strategy_contracts`, `post_review_log`, `published_posts`) and add Supabase credentials.
2. Add Google Drive OAuth credentials, set the folder to watch, and ensure your Supabase topics use `source_type` values of `File`, `url`, or `text` with the corresponding `reference_source`/text fields.
3. Add Groq API credentials for topic selection, OCR clean-up, resource analysis, post generation, and quality checking.
4. Add Google Gemini credentials for the strategist model and for generating embeddings used by Pinecone.
5. Add Pinecone credentials and ensure the `linkedin-reference-content` index exists and contains reference post patterns.
6. Add Slack, Gmail, and LinkedIn OAuth credentials, then set the Slack review channel and the timeout notification email recipient.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Gmail, LinkedIn, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
