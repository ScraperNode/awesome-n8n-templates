# 📱 Publish LinkedIn posts from tech trends with Ollama AI quality checks

> ⚡ **40 views** · 📱 [Social Media & Email Marketing](../)

## Description

## **Who is this for?**

This workflow is for solopreneurs, founders, creators, and marketers who want a consistent LinkedIn presence without spending hours writing posts. Ideal for anyone in tech, SaaS, or AI who wants trend-aware content on autopilot.

## **What it does**

**Flow 1 — Daily Research (6 AM):**
- Fetches trending topics from Hacker News, Reddit (8 subreddits), and Product Hunt in parallel
- Merges all sources, runs 7-layer deduplication, and ranks by relevance
- AI generates 3 LinkedIn post drafts with different angles
- Saves all drafts to a Google Sheets queue with status tracking

**Flow 2 — Smart Publish (Tue/Wed/Thu at 9:30 AM):**
- Reads all unpublished drafts from Google Sheets
- AI Selector picks the single best draft for today
- Selected post passes through an AI Quality Gate (scored 1–10)
- Approved posts publish to LinkedIn with a hashtag comment
- Posts needing revision get auto-rewritten, then published
- Rejected posts are skipped; Telegram notifications on every action

## **Setup steps**

1. **Google Sheets** — Create a spreadsheet with columns: Post ID, Angle, Hook Line, Full Post, Hashtags, Trend Referenced, Word Count, Best Day, Posting Notes, Status, Created Date, Published Date, LinkedIn URL, AI Review, Revised Post, Dedup Stats, Generated At
2. **Ollama** — Install locally and pull your preferred model (e.g., `ollama pull mistral`)
3. **LinkedIn OAuth** — Register an app at developer.linkedin.com with `w_member_social` scope, get your Person URN
4. **Telegram Bot** — Create via @BotFather, get your bot token and chat ID
5. **AI Prompts** — Edit the system prompts in AI Writer, AI Selector, and AI Quality Gate nodes to match your persona and brand voice
6. **Test** — Run the research flow manually first, verify drafts appear in your sheet, then test the publish flow

## **Requirements**

- Self-hosted n8n (uses Ollama nodes)
- Ollama running locally with at least one model installed
- Google Sheets OAuth2 credentials
- LinkedIn OAuth2 credentials with `w_member_social` permission
- Telegram Bot credentials

## **How to customize**

- Tweak AI Selector weights in its system prompt (day alignment, angle variety, engagement potential)
- Adjust Quality Gate thresholds (hook strength, value density, authenticity, engagement, brand safety)
- Set any draft status to `force_publish` in Google Sheets to override AI selection
- Add more sources by duplicating the fetch/normalize pattern
- Change posting schedule by editing the cron expressions in the Schedule Trigger nodes

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
