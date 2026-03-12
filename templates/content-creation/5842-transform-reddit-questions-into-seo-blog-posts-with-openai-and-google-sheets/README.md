# 🎬 Transform Reddit questions into SEO blog posts with OpenAI and Google Sheets

> ⚡ **8,331 views** · 🎬 [Content Creation & Video](../)

## Description

## Turn Reddit Questions into SEO Articles Automatically

This workflow takes real user questions from Reddit and transforms them into fully structured blog posts — title, intro, steps, and conclusion — using AI.

---

### How it works

- Manually triggered when you want to run it
- Scrapes the latest posts from a specific subreddit (e.g. `r/n8n`)
- Filters only posts that are real questions (based on keywords like “how,” “what,” “why”)
- Logs relevant questions into a Google Sheet as raw input
- Enhances each question using AI (rephrases, creates a clean title and slug)
- Generates full-length blog content:
  - ✏️ Intro paragraph
  - ✅ Step-by-step guide
  - 🧠 Clear conclusion
- Saves the final blog content to a second Google Sheet for publishing

---

### Set up steps

- You’ll need access to:
  - Reddit API (OAuth)
  - OpenAI API
  - Google Sheets
- Takes around **15–20 minutes** to connect all the credentials and tweak prompts
- Customize the subreddit or topic focus by changing the Reddit node config

---

Perfect for content teams who want to scale content output using real community pain points — without ever starting from a blank page.

## 🔗 Nodes Used

Google Sheets, Reddit, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
