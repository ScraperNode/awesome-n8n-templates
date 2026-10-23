# 🎬 Send daily LinkedIn post drafts with Tavily, Groq Llama 3.3 and Gmail

> ⚡ **275 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 8 AM to rotate through a topic list, research it with Tavily web search, generate a LinkedIn post and image prompt with Groq (Llama 3.3 70B), create a Pollinations.ai image URL, and email you the post with the image attached via Gmail.

## How it works
1. Runs every day at 8:00 AM on a schedule.
2. Selects today’s topic from a rotating list based on the day of the year.
3. Searches the web with Tavily to fetch up-to-date results for the selected topic.
4. Uses a Groq-hosted Llama model to write a LinkedIn post and a matching image prompt grounded in the Tavily results.
5. Builds a Pollinations.ai image generation URL from the image prompt and downloads the generated image file.
6. Emails the post text with the image attached via Gmail, and sends a text-only fallback email if image generation or download fails.

## Setup
1. Add a Groq API credential to the Groq Chat Model node.
2. Create a Tavily API key and configure HTTP Header Auth with `Authorization: Bearer <YOUR_TAVILY_KEY>` for the Tavily Search request.
3. Connect a Gmail OAuth2 credential and update the recipient email address in both Gmail send steps.
4. Edit the topic list in the topic-selection code step if you want different rotating themes.

## Requirements
- Groq API key (free tier available)
- Tavily API key (free tier — 1,000 searches/month)
- Gmail account (OAuth2)

## Customization
- Edit the topic list inside the "Pick Today's Topic" code node to change what subjects the post rotates through.
- Change the Groq model in the "Groq Chat Model" node if you want a different LLM (e.g. a smaller/faster or larger Groq model).
- Adjust the schedule trigger if you want a different posting time, or swap the Gmail "send to" address to deliver the draft to someone else for review.

## Additional info
This workflow emails you a draft for manual review before posting — it does not post to LinkedIn automatically. If image generation fails, a text-only fallback email is sent instead so you never miss the post text.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
