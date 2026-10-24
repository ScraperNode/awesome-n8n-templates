# 🎬 Publish daily gaming guides from Reddit using Google Gemini to your web app

> ⚡ **70 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automatically monitors a set of subreddits on a daily schedule, fetches the top trending posts via RSS, and uses a Google Gemini AI model to identify the most discussion-worthy post. It then generates a full, SEO-optimized guide in Markdown — complete with step-by-step walkthroughs, data tables, and pro tips — and publishes the result to a web app endpoint.
How it works:

A Schedule Trigger fires once per day
A configurable list of subreddits is looped over one by one
Each subreddit's hot posts are fetched via Reddit's public RSS feed
Raw XML is parsed and cleaned into structured post data
Gemini AI picks the best post and writes a complete guide
The guide is sent via HTTP POST to your publishing endpoint

What you'll need to configure:

Your subreddit list (in the Code node)
A Google Gemini (PaLM) API credential
Your publishing endpoint URL + any required auth headers

Use cases: Gaming blogs, niche community newsletters, auto-publishing pipelines for any topic-focused subreddit.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
