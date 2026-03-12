# 📊 Create weekly AI research briefings with Decodo, OpenAI, and Gmail

> ⚡ **25 views** · 📊 [Market Research & Insights](../)

## Description

## What Problem Does It Solve?
- Staying up-to-date with AI and LLM developments requires reading dozens of articles every week.
- Manual research is time-consuming and often leads to “information overload” or reading low-quality clickbait.
- Important technical breakthroughs often get buried under marketing fluff.

This workflow solves these by:
- Leveraging **Decodo** to instantly find and scrape high-quality organic articles (automatically filtering out YouTube/video noise).
- Using AI to read and summarize every article individually.
- Using an "Analyst Agent" to score news by relevance and write a single, high-quality intelligence report.

## How to Configure It

### Decodo & API Setup
- **Decodo:** Connect your Decodo credentials. This is the core engine that handles the high-precision Google Search and content scraping.
- **OpenAI:** Connect your OpenAI API key (GPT-4o or 4.1-mini recommended for best analysis).
- **Gmail:** Connect a Google Service Account or Gmail OAuth to send the emails.

### Search Configuration
- Open the **Set Search Config** node.
- Edit the `search_query` value to match your niche (e.g., "Latest Large Language Model benchmarks" or "Generative AI in Healthcare").

## How It Works
- **Trigger:** The workflow wakes up once a week (customizable).
- **Search (Powered by Decodo):** It searches Google using Decodo's organic results filter to ensure only high-quality reading material is selected.
- **Scraping:** It visits every URL found and extracts the raw text, cleaning up HTML tags.
- **Summarization:** An LLM reads each article individually to extract key technical points.
- **Analyst Agent:** Reviews all summaries, assigns a "Relevance Score", and compiles the final newsletter.
- **Delivery:** The final report is emailed to you immediately.

## Customization Ideas
- Change the topic to any industry (Crypto, Finance, Sports).
- Swap the AI model for Claude or DeepSeek.
- Log the summaries into a Notion database.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Telegram, Gmail, Schedule Trigger, AI Agent, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
