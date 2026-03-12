# 📱 Curate and send weekly AI newsletters with Tavily, Gemini, and Gmail

> ⚡ **68 views** · 📱 [Social Media & Email Marketing](../)

## Description

## What this workflow does

  Automatically curates and sends a weekly newsletter by combining your internal blog posts with external news. The workflow researches your topic using Tavily, has Gemini write professional newsletter content, and delivers a beautifully formatted HTML email via Gmail.

  ## How it works

  1. **Weekly Trigger** - Runs on a configurable schedule (default: every 7 days at 9:30 AM)
  2. **Dual Research** - Tavily searches your company blog for internal updates AND external sources for market news in parallel
  3. **AI Writing** - Gemini generates a complete newsletter with warm intro, product updates section, and curated news
  4. **Email Assembly** - Merges AI content with a professional HTML template
  5. **Delivery** - Gmail sends the formatted newsletter to your subscribers

  ## Setup steps

  1. Open the **Set newsletter config** node to customize:
     - Topic (what Tavily searches for)
     - Newsletter name, author, email title
     - Logo URL, blog URL, subscribe URL
  2. Add your **Tavily API** credentials (get a key at tavily.com)
  3. Add your **Google Gemini API** credentials
  4. Add your **Gmail OAuth** credentials
  5. Update the recipient email in the **Send newsletter** node
  6. Test with manual execution before enabling the schedule

  ## API keys required

  | Service | Purpose | Cost |
  |---------|---------|------|
  | Tavily | Web search for blog + news | Free tier available |
  | Google Gemini | Newsletter writing | Free tier available |
  | Gmail | Email delivery | Free |

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
