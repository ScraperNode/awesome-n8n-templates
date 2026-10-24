# 📱 Post top Reddit content to Telegram with GPT-4.1-mini and human approval

> ⚡ **69 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works

- A weekly cron triggers the flow
- The Reddit node fetches top posts from a `+`-separated list of subreddits you define
- A code node normalises each item into `{url, title, publishedAt}` while preserving Reddit-specific fields like `ups`, `upvote_ratio`, and `num_comments`
- A deduplication step drops repeats by normalised URL and then by title
- A scoring step ranks candidates by `ups x upvote_ratio` and passes the winner plus the top 10 candidates to GPT-4
- A LangChain agent writes three platform-specific drafts in a single call: a short Telegram blurb with a link
- Gmail sends you one email containing a draft with APPROVE / DECLINE buttons (sendAndWait, double-confirm)
- On APPROVE, a Gate node fans out to three parallel branches that post to Telegram, and each result is appended to its own tab in Google Sheets
- On DECLINE, reviewer feedback is injected into the agent and it picks another topic to retry


## Set up steps

- Setup takes about 15 to 20 minutes
- Connect a **Reddit OAuth2** credential with read access
- Connect an **OpenAI API** credential (defaults to gpt-4.1-mini; swap to any model you prefer)
- Connect a **Gmail OAuth2** credential for the approval email and set `sendTo` to your own address
- Connect a **Telegram Bot API** credential and replace `@your_telegram_channel` in the Post to Telegram node with your real channel handle (your bot must be an admin of the channel)
- Connect a **Google Sheets OAuth2** credential and pick your destination spreadsheet + correct tab in each of the four Google Sheets nodes
- Edit the default subreddit list inside the Reddit node to match your niche
- Optional: adjust the GPT prompt inside the Social Posts Generator to match your tone per platform
- Detailed per-step notes live inside the workflow as sticky notes

## 🔗 Nodes Used

Cron, Google Sheets, Telegram, Gmail, Reddit, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
