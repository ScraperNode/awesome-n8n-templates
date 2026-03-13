# 🎬 Ai-driven Instagram reels creation and publishing with GPT, Creatomate and Slack

> ⚡ **525 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automate your Instagram growth strategy by generating and posting viral Reels using AI and Creatomate. This workflow plans content topics based on trends, generates video assets, and handles the approval and posting process—all without manual video editing.

## How it works

1. **Schedule Trigger**: Runs every day at 9:00 AM.
2. **Topic Planning**: Checks past topics from Google Sheets to avoid duplicates, then uses OpenAI (GPT-4o) to generate a new quiz-style content plan.
3. **Video Generation**: Uses Creatomate to generate a video based on a template, dynamically inserting the AI-generated text and images.
4. **Approval Loop**: Sends the generated video to Slack for human review.
5. **Posting**: Once approved in Slack, the workflow automatically uploads the Reel to Instagram.
6. **Logging**: Saves the new topic to Google Sheets and notifies Slack upon successful publication.

## Setup steps

1. **Configure Credentials**:
   - **OpenAI**: For generating content plans.
   - **Creatomate**: For video rendering.
   - **Google Sheets**: For tracking past topics.
   - **Slack**: For approval notifications.
   - **Facebook Graph API**: For Instagram publishing.

2. **Google Sheets Setup**:
   - Create a Google Sheet with columns: `Question`, `Answer`, `Title`, `Date`.
   - Update the **Get Past Topics** and **Save New Topic** nodes with your Sheet ID.

3. **Creatomate Setup**:
   - Create a template in Creatomate or use an existing one.
   - Update the **Generate Video** node with your `template_id` in the JSON body.

4. **Slack Setup**:
   - Create a channel for approvals.
   - Update the **Slack Approval Request** and **Slack Notification** nodes with your Channel ID.

5. **Activate**:
   - Turn on the workflow to start automating your content pipeline!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Facebook Graph API, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
