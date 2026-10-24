# ⚡ Score and send job matches from public boards to Telegram with Claude

> ⚡ **241 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow checks public job postings from Ashby, Greenhouse, and Lever boards plus Jobicy and Himalayas feeds, filters and deduplicates them, scores each new role against your profile with Anthropic Claude, and sends qualifying matches (or unjudged fallbacks) to Telegram.

## How it works
1. Runs daily at 09:00 (and can be run manually) and loads your settings like target region, profile, keywords, and Telegram chat ID.
2. Fetches job listings from your configured company boards (Ashby, Greenhouse, Lever) and optionally searches Jobicy and Himalayas for the configured keywords.
3. Normalizes all postings into a common format, merges sources, and removes duplicates so each opening is only processed once.
4. Applies low-cost filters for allowed region, matching role titles, and non-junior roles, then keeps only jobs not seen in previous executions and caps the number processed per run.
5. Uses Anthropic Claude (via the LangChain LLM chain) to return a structured verdict (fit, 1–10 score, and a one-line reason) based on your profile, while keeping jobs as “unjudged” if the LLM call fails.
6. Sends a run summary to Telegram and then sends one Telegram message per job that meets the minimum score threshold (or could not be judged), including required “via” attribution links for Jobicy and Himalayas items.

## Setup
1. Add an Anthropic API credential for the Claude model and a Telegram bot credential for sending messages.
2. Set your Telegram chat ID, profile text (including hard requirements), minimum score, max-per-run limit, and allowed region in the “Configure me” step.
3. Populate the company boards list (company, ATS, slug) and/or enable aggregators with keywords for Jobicy/Himalayas, then run once manually to validate settings before activating the daily schedule.

## Requirements
- Anthropic API key
- Telegram bot token (from @BotFather) and your chat ID

## Customization
- Add a company: one line in "Configure me" with its name, ATS (ashby, greenhouse or lever) and board slug
- Other roles: edit the role filter pattern and the feed keywords
- Feeds only: empty the company list. Companies only: set useAggregators to false
- Swap Telegram for Slack or email, or Claude for another chat model

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Filter, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
