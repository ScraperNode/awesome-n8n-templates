# 📊 Generate weekly Reddit startup opportunity reports with Groq AI

> ⚡ **91 views** · 📊 [Market Research & Insights](../)

## Description

### This n8n template automatically scans 10 subreddits every Monday, filters ~1000 posts for genuine frustration signals, and delivers a structured startup opportunity report to your inbox — powered by Groq AI.

Perfect for indie hackers, product builders, and founders who want to stay on top of what people are actually begging someone to build — without spending hours manually browsing Reddit.

**Good to know**

- Uses Reddit's public JSON API — no Reddit account or API key required
- Groq's free tier is generous enough to run this weekly at zero cost
- Each run analyzes up to 1000 posts and completes in under 60 seconds

## How it works

- A Schedule Trigger fires every Monday at 8AM to kick off the workflow
- A Code node defines 10 target subreddits (entrepreneur, SaaS, freelance, startups, and more)
- An HTTP Request node fetches the 100 newest posts from each subreddit using Reddit's public JSON endpoint
- A Code node filters all posts against 27 frustration-signal keywords like "why doesn't X exist", "sick of manually", "wish there was a tool for this"
- An Aggregate node merges all matched posts from all 10 subreddits into a single dataset
- A Code node builds a structured AI prompt embedding all posts with specific instructions for analysis
- An HTTP Request node sends the dataset to Groq's API (llama-3.3-70b-versatile) for deep analysis
- A Code node wraps the AI output in a clean HTML email template
- A Gmail node delivers the weekly report directly to your inbox

## How to use

- Import the workflow and connect your Groq API key as an HTTP Header Auth credential
- Connect your Gmail account via OAuth2
- Change the recipient email in the Gmail node to your own address
- Run manually first to verify the full flow end to end, then activate the schedule

## Requirements

- Groq account for AI analysis (free at console.groq.com) 
- Gmail account for delivery via OAuth2

## Customising this workflow

- Edit the subreddit list in the Define Subreddits node to focus on your specific niche or industry
- Add or remove keywords in the Filter Posts node to tune how sensitive the pain detection is
- Swap the Gmail node for Slack, Telegram, or Outlook if you prefer a different delivery channel
- Change the schedule from weekly to daily for higher-frequency monitoring
- Replace Groq with OpenAI GPT-4o by swapping the HTTP Request URL and auth header — the prompt format is identical

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
