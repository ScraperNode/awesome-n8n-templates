# 📱 Generate social media posts with GPT-4 for LinkedIn, X, and Facebook

> ⚡ **137 views** · 📱 [Social Media & Email Marketing](../)

## Description

Automatically generates engaging marketing posts using OpenAI and publishes them across LinkedIn, Twitter (X), and Facebook. Creates platform-optimized content with hashtags, emojis, and proper formatting.

## How it works

1. **Trigger** — Runs daily at 10 AM or manual trigger for on-demand content
2. **Generate** — Creates tailored marketing content using OpenAI GPT-4 based on topic/theme
3. **Optimize** — Customizes content for each platform (character limits, hashtags, tone)
4. **Review** — Optional human approval gate before publishing
5. **Publish** — Auto-posts to LinkedIn, Twitter, and Facebook simultaneously
6. **Track** — Logs all posts to database for analytics and content history
7. **Notify** — Sends confirmation to Slack with links to published posts

## Setup steps

1. **OpenAI API** — Add your OpenAI API key in credentials
2. **Social Media APIs** — Configure LinkedIn, Twitter (X), and Facebook credentials
3. **PostgreSQL** — Create `social_posts` table to store post history
4. **Slack** — Add webhook URL for notifications
5. **Content Topics** — Customize the topic list in the initial node
6. **Approval** (Optional) — Enable/disable manual review gate
7. **Test** — Run manually first, then activate for daily automation

## What It Does:

1. Randomly selects content topics and types for variety
2. Generates engaging posts using OpenAI
3. Optimizes content for each platform (character limits, hashtags, tone)
4. Publishes simultaneously to all three platforms
5. Stores complete records in database
6. Sends confirmation notifications to Slack

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
