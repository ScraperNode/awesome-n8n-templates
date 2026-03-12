# 🎬 Create WordPress posts from Reddit content via Telegram bot and Perplexity

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

## Description

Create unlimited content from Reddit with just one click.

## How it works :

-  Schedule Trigger:  Schedule Trigger fires on the selected day/time.

- Fetching Reddit Posts: The Reddit node fetches new posts from the communities.

- Article Idea Generation: An AI agent converts Reddit post titles into article topics.

- Sending Article Ideas via Telegram Bot: A list of topics on which articles can be created is sent.

-  Article Creation: If an article is approved, AI Agents create a title, SEO optimized content, and a slug for the post.

- Post Creation: Post is created with a created title, content, and slug on WordPress.

## Setup Steps (25 Minutes) :

1. Set up the Reddit API and add its credentials to n8n.
2. Set up a Telegram bot via Botfather and add credentials to n8n.
3. Set up Data Tables with columns specified in workflow notes
4. Set up WordPress API and add its credentials to n8n.
5. Set up Perplexity API, and its credentials to n8n

## Requirements :

- WordPress API: Website with WordPress API enabled to create articles

- Reddit API: A Reddit account with API access

- Telegram Bot: A Telegram bot to receive and approve article ideas

- Perplexity API: Perplexity API to research information about the article topic

## 🔗 Nodes Used

Telegram, Telegram Trigger, Wordpress, Reddit, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
