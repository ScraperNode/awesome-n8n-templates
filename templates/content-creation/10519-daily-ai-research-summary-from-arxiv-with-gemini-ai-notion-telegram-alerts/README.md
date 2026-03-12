# 🎬 Daily AI research summary from arXiv with Gemini AI, Notion & Telegram alerts

> ⚡ **564 views** · 🎬 [Content Creation & Video](../)

## Description

## What this template does

This workflow turns the arXiv AI feed into a daily research assistant.
Every morning it fetches the latest Artificial Intelligence papers from [arXiv.org](arXiv.org), deduplicates them, stores one page per paper in Notion (with metadata + PDF link), generates a **Deep Research Summary** of each PDF using Gemini, and finally posts a short update to a Telegram channel with links to both the paper and the Notion summary.

## Who is this for & what problem it solves

This template is designed for founders, researchers, builders and curious professionals who want to stay up-to-date with AI research without reading every paper in full.
It solves the “information overload” problem: instead of manually checking arXiv and skimming PDFs, you get a curated daily feed with human-style explanations stored in your own Notion database.

## Use Cases

* Daily AI research digest for solo founders or small teams.
* Private “AI research hub” in Notion for your company or lab.
* Telegram channel that shares the latest AI papers plus plain-English summaries.
* Personal learning pipeline: track, tag and revisit important papers over time.

## How it works (workflow overview)

1. Scheduled trigger runs every day at 08:00.
2. HTTP Request pulls the latest AI papers from arXiv’s API.
3. Results are converted from XML to JSON and cleaned.
4. A time-window filter keeps only recent papers and removes duplicates.
5. For each paper, a Notion page is created (metadata + PDF URL).
6. Gemini reads the PDF and returns a structured, multi-chunk summary.
7. Each chunk is appended to the same Notion page as rich-text blocks.
8. A Telegram message is sent with title, short abstract, PDF link and Notion link.

## Setup (step-by-step)

1. Create a Notion database and connect your Notion integration.
2. Map the properties in the **Register to Notion Database** node (title, arxiv_id, abstract, authors, categories/tags, published date, pdf URL).
3. Add your Gemini API key and model in the **Analyze doc (Prompt Ultra-Pro)** node.
4. Add your Telegram bot token and **chat_id** in the **Send a text message** node.
5. (Optional) Adjust the arXiv query in **HTTP Request** to focus on your preferred AI categories or keywords.
6. Enable the **Scheduled Daily Trigger** when you’re ready to run it in production.

## Customization options

* Change the arXiv search query (keywords, categories, max_results).
* Modify the time window logic (e.g. 24h, 48h, or no filter).
* Adapt the Notion properties to your own schema (status, tags, priority, etc.).
* Switch the messaging channel (Telegram, Discord, Slack) using similar nodes.

## 🔗 Nodes Used

HTTP Request, Telegram, Notion, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
