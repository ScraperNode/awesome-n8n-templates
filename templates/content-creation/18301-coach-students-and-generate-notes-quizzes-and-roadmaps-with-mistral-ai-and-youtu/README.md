# 🎬 Coach students and generate notes, quizzes, and roadmaps with Mistral AI and YouTube

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow exposes a single webhook endpoint that routes requests to Skillora AI modules for generating study notes, YouTube learning video results, multiple-choice quizzes, career roadmaps, or a chat-based learning coach using Mistral Cloud, YouTube Data API, and Postgres-backed conversation memory.

## How it works
1. Receives a POST webhook request and reads the requested module from `body.module`.
2. For `notes`, sends the topic, difficulty, language, and format to Mistral Cloud to generate structured study notes and returns `{ notes: ... }` as JSON.
3. For `youtube_search`, queries the YouTube Data API for up to 10 videos matching the provided search term and language, formats the results into a clean `videos` array, and returns it as JSON.
4. For `quiz`, prompts Mistral Cloud to generate exactly the requested number of multiple-choice questions, parses the model output into valid JSON, and returns the quiz questions with options, answers, and explanations.
5. For `roadmap`, sends the provided career category and role to Mistral Cloud to generate a structured roadmap object (milestones, resources, and progress) and returns it as JSON.
6. For `assistant`, creates or reuses a session ID, uses Postgres chat memory plus Mistral Cloud to generate a contextual coaching reply, and returns the assistant message as JSON.

## Setup
1. Add a Mistral Cloud API credential for all AI modules (notes, quiz, roadmap, and assistant).
2. Add a Postgres credential and ensure the database is reachable for the chat memory used by the assistant module.
3. Update the YouTube Data API key used in the YouTube search request (and ensure the YouTube Data API v3 is enabled for that key).
4. Activate the workflow and copy the webhook URL, then configure your frontend/app to POST JSON with `body.module` set to `notes`, `youtube_search`, `quiz`, `roadmap`, or `assistant` and the corresponding input fields.

## Additional info
Need Help or Customization?

Digital Biz Tech can help tailor this workflow to your business.

We offer free setup support, including credential configuration and deployment.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)

Developer: Beny B
Email: [coderbeny@gmail.com](mailto:coderbeny@gmail.com)

You can also DM us on LinkedIn for any help or customization.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Structured Output Parser, Mistral Cloud Chat Model, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
