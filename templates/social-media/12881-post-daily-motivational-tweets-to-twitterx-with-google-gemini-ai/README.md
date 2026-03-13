# 📱 Post daily motivational tweets to Twitter/X with Google Gemini AI

> ⚡ **133 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template demonstrates how to use AI to automatically generate and post content to Twitter/X on a schedule. It combines AI-generated text with workflow automation to help creators and businesses stay consistent on social media without manual posting.

Use cases include posting motivational quotes, daily tips, brand updates, announcements, or any short-form text content. The workflow is flexible and can be easily customized to fit different tones, niches, and posting frequencies.

## Good to know

* This workflow uses an AI text model, so usage may incur costs depending on your provider’s pricing.

* Rate limits apply when posting to Twitter/X. Posting frequency should be kept within platform guidelines.

* The template uses official n8n nodes and is compatible with n8n Cloud.

## How it works

* The workflow is triggered on a schedule using a schedule trigger.

* An AI model generates multiple pieces of tweet-ready text in a single run.

* The generated content is processed and split into individual tweets.

* Tweets are posted one by one with a configurable delay between each post.

## How to use

* Replace the trigger if needed (for example, use a webhook instead of a schedule).

* Adjust the AI prompt to control tone, topic, or length of tweets.

* Modify the delay to control how often tweets are posted.

## Requirements

* An AI provider account (for example, Google Gemini)

* A connected Twitter/X account

## Customizing this workflow

This template can be adapted for many use cases, such as posting educational threads, curated content, or scheduled announcements. You can also extend it to support other platforms like LinkedIn or Threads with minimal changes.

## 🔗 Nodes Used

Function, X (Formerly Twitter), Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
