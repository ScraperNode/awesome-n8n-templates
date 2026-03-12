# 🎬 Automated tweet generator & publisher with GPT-4, Discord, and Google Sheets

> ⚡ **3,359 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Twitter Content Machine – Write, Refine & Publish Tweets on Autopilot

This workflow is perfect for creators, solopreneurs, and personal brands who want to consistently publish bold, high-performing content on X (Twitter) — without writing a single line themselves. After a one-time setup, it automatically generates tweet ideas, writes in your voice, evaluates post quality, avoids duplicates, and publishes directly to Twitter. All approvals and rewrites are handled in a conversational loop powered by OpenAI, Discord, and Google Sheets.

Whether you’re building a personal brand or growing your startup audience, this tool will help you stay active, edgy, and relevant — with zero friction.

## How it works
- Distill what your flow does in a few high-level steps.
- Loads your brand brief from a sub-workflow.
- Generates a tweet idea aligned with your tone.
- Checks Google Sheets to ensure the idea hasn’t been used.
- Writes the post.
- Evaluates it using a feedback sub-workflow — if the quality score is below 0.7, it rewrites the post.
- Refines tone and voice using a Rewriter Agent that mimics your past content (from a Google Sheet).
- Sends the final post to a Discord channel for manual approval.
- On approval, posts directly to Twitter (X) and logs it to Google Sheets (History and Examples tabs).

## Set up steps
- Give users an idea of how long setup will take. Don’t describe every detail.
- Keep detailed descriptions in sticky notes inside your workflow.

## Key benefits
- No burnout, no block – Stop spending energy thinking what to tweet. AI handles everything.
- Style-matching – Posts sound like you, not a generic robot. Based on your real writing.
- Fast & scalable – Publish once or five times a day — it’s up to you.
- Avoid duplicates – Each idea is checked against your post history.
- Human-in-the-loop – You approve final posts via Discord. No rogue tweets.

## Integrations required
- n8n
- OpenAI API
- Google Sheets
- Twitter (OAuth2)
- Discord (for approval)
- Notion (optional for brand brief storage)

## 🔗 Nodes Used

Google Sheets, Discord, Execute Sub-workflow, X (Formerly Twitter), Notion, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
